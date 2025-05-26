

"use server";
import { IInsuranceProduct } from "@/interfaces/insurance-product.interface";
import { db } from "@/lib/db";
import { ContactForm } from "@prisma/client";


import { revalidatePath } from "next/cache";

export type ContactFormData = {
  fullName: string;
  email: string;
  mobilePhone: string;
  company?: string | null;
  city: string;
  contactReason: "quote" | "pqrs" | "other";
  message: string;
  // productId?: string;
};

export async function submitContactForm(data: ContactFormData) {
  try {
    // Guardar los datos en la base de datos
    const contact = await db.contactForm.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        mobilePhone: data.mobilePhone,
        company: data.company,
        // country: data.country,
        city: data.city,
        contactReason: data.contactReason,
        message: data.message,
        // productId: data.productId,
      },
    });

    // Revalidar la ruta para actualizar la cachÃ©
    revalidatePath("/contacto");

    return { success: true, data: contact };
  } catch (error) {
    console.error("Error al enviar el formulario de contacto:", error);
    return { success: false, error: "Error al enviar el formulario" };
  }
} 

export async function getContactForms(): Promise<ContactForm[]> {
  const contactForms = await db.contactForm.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return contactForms as unknown as ContactForm[];
}
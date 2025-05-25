"use server";

import { db } from "@/lib/db";

export async function getInsuranceProducts() {
  try {
    const products = await db.insuranceProduct.findMany({
      where: {
        isActive: true,
      },
      select: {
        id: true,
        title: true,
        slug: true,
      },
      orderBy: {
        title: 'asc',
      },
    });

    return { success: true, data: products };
  } catch (error) {
    console.error("Error al obtener los servicios:", error);
    return { success: false, error: "Error al obtener los servicios" };
  }
} 
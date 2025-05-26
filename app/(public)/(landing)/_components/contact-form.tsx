"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { submitContactForm } from "@/actions/contact.action";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ButtonLoading } from "@/components/button-loading";

// Definir el esquema de validación con Zod
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingrese un correo electrónico válido.",
  }),
  mobilePhone: z.string().min(10, {
    message: "El teléfono debe tener al menos 10 caracteres.",
  }),
  company: z.string().optional().nullable(),

  city: z.string().min(1, {
    message: "Por favor ingrese su ciudad.",
  }),
  contactReason: z.enum(["quote", "pqrs", "other"], {
    required_error: "Por favor seleccione un motivo de contacto.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
  // productId: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

// interface InsuranceProduct {
//   id: string;
//   title: string;
//   slug: string;
// }

export const ContactForm = () => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  // const [products, setProducts] = useState<InsuranceProduct[]>([]);

  // Obtener el servicio de la URL si existe
  // const serviceSlug = searchParams.get("servicio");

  // Cargar los productos al montar el componente
  // useEffect(() => {
  //   const loadProducts = async () => {
  //     try {
  //       const result = await getInsuranceProducts();
  //       if (result.success && result.data) {
  //         // setProducts(result.data);
  //         // Si hay un slug en la URL, buscar el producto correspondiente
  //         // if (serviceSlug) {
  //         //   const product = result.data.find((p) => p.slug === serviceSlug);
  //         //   if (product) {
  //         //     form.setValue("productId", product.id);
  //         //   }
  //         // }
  //       }
  //     } catch (error) {
  //       console.error("Error al cargar los productos:", error);
  //     }
  //   };

  //   loadProducts();
  // }, [serviceSlug]);

  // Inicializar el formulario con react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobilePhone: "",
      company: "",
      city: "",
      contactReason: "quote",
      message: "",
      // productId: "",
    },
  });

  // Función para manejar el envío del formulario
  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);

      // Enviar los datos a la API
      const result = await submitContactForm(data);

      if (result.success) {
        // Mostrar mensaje de Asesoría personalizada
        toast.success("Formulario enviado correctamente");

        // Limpiar el formulario
        form.reset();

        // Redirigir o mostrar mensaje de confirmación
        router.refresh();
      } else {
        toast.error(result.error || "Hubo un error al enviar el formulario");
      }
    } catch (error) {
      console.error(error);
      toast.error("Hubo un error al enviar el formulario");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact-section" className="py-16 bg-slate-50 dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              ¿Listo para proteger lo que más valoras?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a vivir con
              mayor tranquilidad.
            </p>
          </div>

          <div className="bg-white dark:bg-[#161b27] rounded-md shadow-lg p-6 md:p-8 border border-slate-100 dark:border-secondary/20">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre completo */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre completo</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-slate-50 dark:bg-[#232e47] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 border-slate-200 dark:border-slate-700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Correo electrónico */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            className="bg-slate-50 dark:bg-[#232e47] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 border-slate-200 dark:border-slate-700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Teléfono móvil */}
                  <FormField
                    control={form.control}
                    name="mobilePhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono móvil</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-slate-50 dark:bg-[#232e47] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 border-slate-200 dark:border-slate-700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Empresa (opcional) */}
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre de su empresa (opcional)</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            className="bg-slate-50 dark:bg-[#232e47] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 border-slate-200 dark:border-slate-700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Ciudad */}
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ciudad</FormLabel>
                        <FormControl>
                          <Input
                            // placeholder="Bogotá"
                            {...field}
                            className="bg-slate-50 dark:bg-[#232e47] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 border-slate-200 dark:border-slate-700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Servicio de interés
                <FormField
                  control={form.control}
                  name="productId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Servicio de interés</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={!!serviceSlug} // Deshabilitar si hay un slug en la URL
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un servicio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="">Ninguno</SelectItem>
                          {products.map((product) => (
                            <SelectItem key={product.id} value={product.id}>
                              {product.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                {/* Motivo de contacto */}
                <FormField
                  control={form.control}
                  name="contactReason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        ¿Sobre qué le gustaría contactarnos?
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un motivo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="quote">Cotización</SelectItem>
                          <SelectItem value="pqrs">PQRS</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Mensaje */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Escriba su mensaje aquí..."
                          className="min-h-[120px] bg-slate-50 dark:bg-[#232e47] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 border-slate-200 dark:border-slate-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Botón de envío */}
                <ButtonLoading
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-dark text-white "
                  // disabled={isLoading}
                  variant="default"
                  loading={isLoading}
                >
                  {isLoading ? "Enviando..." : "Enviar mensaje"}
                </ButtonLoading>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

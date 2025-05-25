import Image from "next/image";

import image from "@/public/images/employees.png";
import { Check } from "lucide-react";

export function Service5() {
  return (
    <section className="container mx-auto dark:bg-background flex flex-col items-center justify-center py-10  my-8">
      <div className="flex flex-col md:flex-row w-full min-h-[600px]  overflow-hidden  dark:bg-background">
        {/* Imagen */}
        <div className="md:w-1/2 w-full md:h-auto flex items-center justify-center">
          <div className="w-[340px] h-[600px] relative flex items-center justify-center rounded-sm overflow-hidden">
            <Image
              src={image}
              alt="Clientes conversando"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Texto */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            Respaldo para tu negocio:
            <br /> Seguros comerciales
          </h2>
          <div className="space-y-6 flex flex-col gap-4 my-4">
            <div className="flex items-start gap-4">
              <Check className="w-8 h-8 text-green-500" />
              <div>
                <div className="font-semibold text-2xl dark:text-white">
                  Seguro de responsabilidad civil
                </div>
                <div className="text-lg dark:text-slate-400">
                  Protege tu negocio ante reclamaciones de terceros.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-8 h-8 text-green-500" />
              <div>
                <div className="font-semibold  text-2xl dark:text-white">
                  Seguro de incendio
                </div>
                <div className="text-lg dark:text-slate-400">
                  Cubre daños por incendios en tu negocio.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-8 h-8 text-green-500" />
              <div>
                <div className="font-semibold  text-2xl dark:text-white">
                  Seguro de robo
                </div>
                <div className="text-lg dark:text-slate-400">
                  Te protege ante robo o hurto de tus bienes dentro de las
                  instalaciones o mientras se movilizan.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-8 h-8 text-green-500" />
              <div>
                <div className="font-semibold  text-2xl dark:text-white">
                  Seguro D&O
                </div>
                <div className="text-lg dark:text-slate-400">
                  Respalda consecuencias por decisiones equivocas del personal.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-8 h-8 text-green-500" />
              <div>
                <div className="font-semibold  text-2xl dark:text-white">
                  Seguro de daños
                </div>
                <div className="text-lg dark:text-slate-400">
                  Protege maquinaria y equipos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

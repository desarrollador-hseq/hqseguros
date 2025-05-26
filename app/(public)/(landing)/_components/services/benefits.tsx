import { Calendar, Gift, Tag } from "lucide-react";
import React from "react";

export const Benefits = () => {
  return (
    <section className="rounded-xl p-8 w-full max-w-4xl mx-auto my-20 dark:bg-[#161b27] border border-slate-300/20">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight text-center">
        Beneficios exclusivos para <br /> nuestros clientes
      </h2>
      <div className="space-y-10">
        {/* Descuentos */}
        <div className="flex items-start gap-6">
          <Tag className="text-3xl text-blue-300 min-w-[2.5rem]" />
          <div>
            <div className="font-semibold text-3xl mb-1">Descuentos</div>
            <div className="text-slate-600 dark:text-gray-400 text-lg">
              Obtén descuentos especiales con nuestros aliados por ser cliente.
            </div>
          </div>
        </div>
        {/* Reconocimientos */}
        <div className="flex items-start gap-6">
          <Calendar className="text-3xl text-blue-300 min-w-[2.5rem]" />
          <div>
            <div className="font-semibold text-3xl mb-1">Reconocimientos</div>
            <div className="text-slate-600 dark:text-gray-400 text-lg">
              Contrata nuestros servicios y haz parte del programa de
              fidelización. En este programa puedes te apoyamos en actividades
              que gestionas en tu empresa dentro del área de GH o SIG y además
              puedes aprender y asistir a charlas que preparamos para que
              aprendas a gestionar los riesgos a los que te enfrentas
              diariamente.
            </div>
          </div>
        </div>
        {/* Regalos */}
        <div className="flex items-start gap-6">
          <Gift className="text-3xl text-blue-300 min-w-[2.5rem]" />
          <div>
            <div className="font-semibold text-3xl mb-1">Regalos</div>
            <div className="text-slate-600 dark:text-gray-400 text-lg">
              Aprovecha nuestros reconocimientos en fechas especiales durante el
              año solo siendo cliente.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

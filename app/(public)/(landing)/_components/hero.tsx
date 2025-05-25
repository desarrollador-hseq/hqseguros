import Image from "next/image";

export function Hero() {
  return (
    <div className="lg:max-h-[700px] min-h-[500px]  text-foreground transition-colors duration-300  w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 w-full flex flex-col-reverse md:flex-row gap-8 items-center">
        {/* Columna izquierda */}
        <div className="w-2/3 space-y-8">
          {/* Texto principal */}
          <div className="space-y-6 ">
            <h1 className="text-secondary dark:text-secondary font-bold text-5xl lg:text-7xl">
              Protege lo que
              <br />
              más te importa
            </h1>

            <p className="text-slate-600 font-medium text-2xl">
              En un mundo incierto, tu tranquilidad es lo más importante.
              Nuestra agencia te ofrece la seguridad que necesitas para ti, tu
              familia y tu negocio.
            </p>

            {/* Información de la empresa */}
            <div className="space-y-2 pt-6">
              <h3 className="text-slate-600 text-2xl font-semibold">
                HSEQ Seguros Ltda
              </h3>
              <p className="text-gray-500">
                Tu tranquilidad, nuestra mayor responsabilidad
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha - Imagen */}
        <div className="w-1/3 relative max-h-[700px] overflow-hidden flex justify-center lg:justify-center">
          <div className="relative h-[400px] lg:h-[700px] w-full max-w-[400px]  overflow-hidden">
            <Image
              src="/images/people.png"
              alt="Equipo de profesionales"
              fill
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}



export function Service6() {
  return (
    <section className="container mx-auto dark:bg-background flex flex-col md:flex-row w-full min-h-[400px]  overflow-hidden my-16">
      {/* Imagen */}
      <div className="md:w-1/2 w-full h-64 md:h-auto flex flex-col items-center justify-center">
        {/* <Image
          src={image}
          alt="Intermediación en Riesgo Laboral"
          fill
          className="object-cover"
          priority
        /> */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-center">
          Intermediacion en Riesgo Laboral
        </h2>
        <p className="mb-8 text-2xl dark:text-slate-400 text-center">
          Somos el{" "}
          <span className="text-blue-300 font-semibold">enlace permanente</span>{" "}
          entre su compañía y su{" "}
          <span className="text-blue-300 font-semibold">ARL</span> para
          gestionar sus necesidades y asegurar la mejor cobertura en{" "}
          <span className="text-blue-300 font-semibold">riesgo laboral</span>.
        </p>
      </div>
      {/* Texto */}
      <div className="md:w-1/2 w-full   flex flex-col justify-center p-8 relative">
        <div className="dark:bg-white/5 border dark:border-white/20 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x dark:divide-white/20 ">
            <div className="p-4">
              <div className="font-semibold text-2xl ">
                Asesoría personalizada
              </div>
              <div className="dark:text-slate-400  lg:text-lg text-base mt-1">
                Somos los expertos que te asesorarán para la selección adecuada
                de ARL.
              </div>
            </div>
            <div className="p-4">
              <div className="font-semibold text-2xl ">Gestión de trámites</div>
              <div className="dark:text-slate-400  lg:text-lg text-base mt-1">
                Tenemos el equipo experto en agilizar procesos de afiliación,
                así como solicitud de documentos y certificados para procesos
                como auditorías.
              </div>
            </div>
            <div className="p-4">
              <div className="font-semibold text-2xl ">
                Defensa de sus intereses
              </div>
              <div className="dark:text-slate-400  lg:text-lg text-base mt-1">
                Velamos por el cumplimiento de sus derechos
              </div>
            </div>
            <div className="p-4">
              <div className="font-semibold text-2xl ">
                Optimización de recursos
              </div>
              <div className="dark:text-slate-400  lg:text-lg text-base mt-1">
                Reinvertimos en su compañía
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="lg:max-h-[700px] min-h-[500px] text-foreground transition-colors duration-300 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 w-full flex flex-col-reverse md:flex-row gap-8 items-center">
        {/* Columna izquierda */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-2/3 space-y-8"
        >
          {/* Texto principal */}
          <div className="space-y-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-secondary dark:text-secondary font-bold text-5xl lg:text-7xl"
            >
              Protege lo que
              <br />
              más te importa
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-600 font-medium text-2xl"
            >
              En un mundo incierto, tu tranquilidad es lo más importante.
              Nuestra agencia te ofrece la seguridad que necesitas para ti, tu
              familia y tu negocio.
            </motion.p>

            {/* Información de la empresa */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-2 pt-6"
            >
              <h3 className="text-slate-600 text-2xl font-semibold">
                HSEQ Seguros Ltda
              </h3>
              <p className="text-gray-500">
                Tu tranquilidad, nuestra mayor responsabilidad
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Columna derecha - Imagen */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/3 relative max-h-[700px] overflow-hidden flex justify-center"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[400px] lg:h-[700px] w-full md:max-w-[400px] overflow-hidden"
          >
            <Image
              src="/images/people.png"
              alt="Equipo de profesionales"
              fill
              objectFit="cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

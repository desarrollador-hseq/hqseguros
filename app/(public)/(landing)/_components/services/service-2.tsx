"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import image from "@/public/images/people.png";
import { Check } from "lucide-react";

export function Service2() {
  return (
    <section className="container mx-auto dark:bg-background flex flex-col items-center justify-center py-10 my-8">
      <div className="flex flex-col items-center justify-center md:flex-row w-full min-h-[600px] overflow-hidden dark:bg-background">
        {/* Texto */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 w-full flex flex-col justify-center items-center p-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            Protegiendo lo que más importa:
            <br /> Seguros de vida y salud
          </h2>
          <div className="space-y-6 flex flex-col md:flex-row gap-4 my-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <Check className="w-8 h-8 text-green-500" />
              <div>
                <div className="font-semibold text-2xl dark:text-white">
                  Seguro de vida
                </div>
                <div className="text-lg dark:text-slate-400">
                  Brinda tranquilidad a tus seres queridos en caso de
                  fallecimiento.
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <Check className="w-8 h-8 text-green-500" />
              <div>
                <div className="font-semibold  text-2xl dark:text-white">
                  Seguro de salud
                </div>
                <div className="text-lg dark:text-slate-400">
                  Protege tu bienestar y el de tu familia ante imprevistos
                  médicos.
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
           
              <div className="text-lg dark:text-slate-400 max-w-xl">
                Acompañamos para proteger las personas que hacen parte de un
                entorno laboral, como de un entorno familiar y social.
              </div>
           
          </motion.div>
        </motion.div>
        {/* Imagen */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 w-full md:h-auto flex items-center justify-center"
        >
          <div className="w-[340px] h-[600px] relative flex items-center justify-center rounded-sm overflow-hidden">
            <Image
              src={image}
              alt="Clientes conversando"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

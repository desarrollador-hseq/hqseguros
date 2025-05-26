"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import image from "@/public/images/conversation.png";

export function Service1() {
  return (
    <section className="container mx-auto dark:bg-background flex flex-col items-center justify-center py-10  my-8">
      <div className="flex flex-col md:flex-row w-full min-h-[600px]  rounded-md  overflow-hidden  dark:bg-background">
        {/* Imagen */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
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
        {/* Texto */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 w-full flex flex-col justify-center p-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            Entendiendo las
            <br /> necesidades de nuestros clientes
          </h2>
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <span className="bg-secondary text-white font-bold rounded-full min-w-[2rem] min-h-[2rem] w-8 h-8 flex items-center justify-center text-lg shrink-0">
                1
              </span>
              <div>
                <div className="font-semibold text-2xl dark:text-white">
                  Análisis personalizado
                </div>
                <div className="text-lg dark:text-slate-400">
                  Evaluamos tus necesidades y te ofrecemos soluciones a la
                  medida.
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
              <span className="bg-secondary text-white font-bold rounded-full min-w-[2rem] min-h-[2rem] w-8 h-8 flex items-center justify-center text-lg shrink-0">
                2
              </span>
              <div>
                <div className="font-semibold  text-2xl dark:text-white">
                  Asesoramiento experto
                </div>
                <div className="text-lg dark:text-slate-400">
                  Contamos con profesionales especializados para ayudarte a
                  tomar las mejores decisiones.
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-start gap-4"
            >
              <span className="bg-secondary text-white font-bold rounded-full min-w-[2rem] min-h-[2rem] w-8 h-8 flex items-center justify-center text-lg shrink-0">
                3
              </span>
              <div>
                <div className="font-semibold text-2xl dark:text-white">
                  Atención personalizada
                </div>
                <div className="text-lg dark:text-slate-400">
                  Te brindamos un trato cercano y te acompañamos en cada paso.
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

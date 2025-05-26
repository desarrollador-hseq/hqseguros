"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram, Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/app/store/useThemeStore";
import { useScrollTo } from "@/hooks/use-scroll-to";

export function Footer() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-secondary">
              Tu tranquilidad, nuestra mayor responsabilidad
            </h2>
            {/* <p className="mb-6 text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p> */}
            {/* <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button> 
            </form>*/}
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">
              Enlaces rápidos
            </h3>
            <nav className="space-y-2 text-sm flex flex-col gap-1">
              <HyperLink text="Inicio" elementId="home-section" />
              <HyperLink text="Acerca de nosotros" elementId="about-section" />
              <HyperLink text="Servicios" elementId="services-section" />
              <HyperLink text="Contacto" elementId="contact-section" />
              <HyperLink text="Preguntas frecuentes" elementId="faq-section" />
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">
              Contactanos
            </h3>
            <div className="space-y-8">
              {/* Líder comercial de ARL */}
              <div>
                <div className="font-bold text-xl mb-1">
                  Líder comercial de ARL
                </div>
                <a
                  href="mailto:lidercomercial@hseqseguros.com"
                  className="block text-base hover:underline"
                >
                  lidercomercial@hseqseguros.com
                </a>
                <a
                  href="tel:+573232259495"
                  className="block text-base text-slate-400"
                >
                  +57 323 225 9495
                </a>
              </div>
              {/* Ejecutivo comercial */}
              <div>
                <div className="font-bold text-xl mb-1">
                  Ejecutivo comercial
                </div>
                <a
                  href="mailto:ejecutivocomercial1@hseqseguros.com"
                  className="block text-base hover:underline"
                >
                  ejecutivocomercial1@hseqseguros.com
                </a>
                <a
                  href="tel:+573144677324"
                  className="block text-base text-slate-400"
                >
                  +57 314 4677324
                </a>
              </div>
              {/* Gerencia */}
              <div>
                <div className="font-bold text-xl mb-1">Gerencia</div>
                <a
                  href="mailto:gerencia@hseqseguros.com"
                  className="block text-base hover:underline"
                >
                  gerencia@hseqseguros.com
                </a>
                <a
                  href="tel:+573104224572"
                  className="block text-base text-slate-400"
                >
                  +57 310 4224572
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-primary">
              Síguenos
            </h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Síguenos en Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Síguenos en Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {/* <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">Tiktok</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Síguenos en Tiktok</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> */}
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Cambiar tema
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HSEQSeguros. Todos los derechos
            reservados.
          </p>
          {/* <nav className="flex gap-4 text-sm">
            <a  className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav> */}
        </div>
      </div>
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/573232259495?text=Hola%2C%20quisiera%20más%20información%20sobre%20sus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg bg-green-500 hover:bg-green-600 transition-colors w-14 h-14 flex items-center justify-center"
        aria-label="Chatea con nosotros por WhatsApp"
      >
        <span className="w-10 h-10 relative">
          <svg
            fill="#FFF"
            height="40px"
            width="40px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 308 308"
            xmlSpace="preserve"
          >
            <g id="XMLID_468_">
              <path
                id="XMLID_469_"
                d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156   c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687   c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887   c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153   c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348   c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802   c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922   c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0   c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458   C233.168,179.508,230.845,178.393,227.904,176.981z"
              />
              <path
                id="XMLID_470_"
                d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716   c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396   c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188   l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677   c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867   C276.546,215.678,222.799,268.994,156.734,268.994z"
              />
            </g>
          </svg>
        </span>
      </a>
    </footer>
  );
}

const HyperLink = ({
  text,
  elementId,
}: {
  text: string;
  elementId: string;
}) => {
  const { handleClick } = useScrollTo();
  return (
    <a
      className="transition-colors hover:text-primary"
      onClick={(e) => handleClick(e, elementId)}
    >
      {text}
    </a>
  );
};

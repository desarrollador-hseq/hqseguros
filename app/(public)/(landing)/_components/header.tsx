"use client";

import Link from "next/link";
import { BtnChangeTheme } from "@/components/btn-change-theme";
import { useScrollTo } from "@/hooks/use-scroll-to";

export function Header() {
  const { handleClick } = useScrollTo();

  return (
    <div className="overflow-x-hidden bg-gray-50 dark:bg-zinc-950 border-b border-gray-200 dark:border-gray-800">
      <header className="relative container mx-auto flex flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center dark:text-slate-100">
        <Link
          href="/"
          className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-primary"
        >
          HSEQ <span className="text-secondary">Seguros</span>
        </Link>

        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        <nav
          aria-label="Header Navigation"
          className=" peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full sm:peer-checked:mt-8 md:mt-0 md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="font-bold md:mr-12">
              <Link href="#services-section" onClick={(e) => handleClick(e, "services-section")}>Servicios</Link>
            </li>
            <li className="md:mr-12">
              <Link
                href="#contact-section"
                onClick={(e) => handleClick(e, "contact-section")}
              >
                Contacto
              </Link>
            </li>
            {/* <li className="md:mr-12"><Link href="#">Support</Link></li> */}

            <BtnChangeTheme />
          </ul>
        </nav>
      </header>
    </div>
  );
}

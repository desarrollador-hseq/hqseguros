"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { useThemeStore } from "./store/useThemeStore";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <html lang="es" className={theme}>
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

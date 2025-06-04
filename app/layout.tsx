import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Metadata } from "next";
import { ThemeSync } from "@/components/providers/theme-sync";

const inter = Inter({ subsets: ["latin"] });

const description = "Tu tranquilidad, nuestra mayor responsabilidad";

export const metadata: Metadata = {
  title: "HSEQ Seguros",
  description: description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeSync />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";



const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HSEQ Seguros",
  description: "HSEQ Seguros, Tu tranquilidad, nuestra mayor responsabilidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}

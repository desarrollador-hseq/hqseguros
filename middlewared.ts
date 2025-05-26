import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  console.log("Token obtenido:", token);

  // Si la ruta es del landing, permitir el acceso sin restricciones
  if (request.nextUrl.pathname.startsWith("/(public)")) {
    return NextResponse.next();
  }

  // Si la ruta es de autenticación y tiene token, redirigir a administración
  if (request.nextUrl.pathname.startsWith("/auth") && token) {
    return NextResponse.redirect(new URL("/administracion", request.url));
  }

  // Si la ruta es de administración y no tiene token, redirigir a login
  if (request.nextUrl.pathname.startsWith("/administracion")) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|fonts).*)",
  ],
};
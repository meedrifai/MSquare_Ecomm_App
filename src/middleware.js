// ================================
// 11. Middleware pour l'authentification
// src/middleware.js
// ================================
import { NextResponse } from "next/server";

export function middleware(request) {
  // Protéger les routes admin
  if (
    request.nextUrl.pathname.startsWith("/api/admin") ||
    request.nextUrl.pathname.startsWith("/admin")
  ) {
    const token = request.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Non autorisé" },
        { status: 401 }
      );
    }

    // Vérifier le token (simple vérification, à améliorer en production)
    try {
      const decoded = Buffer.from(token, "base64").toString();
      const [email] = decoded.split(":");

      if (email !== process.env.ADMIN_EMAIL) {
        throw new Error("Token invalide");
      }
    } catch (error) {
      return NextResponse.json(
        { success: false, error: "Token invalide" },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/admin/:path*", "/admin/:path*"],
};

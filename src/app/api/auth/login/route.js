// ================================
// 10. src/app/api/auth/login/route.js
// ================================
import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";

// POST - Connexion admin
export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Vérifier les identifiants (à remplacer par une vraie vérification en DB)
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@khalys.ma";
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "khalys2025";

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: "Identifiants incorrects" },
        { status: 401 }
      );
    }

    // Créer un token simple (en production, utiliser JWT)
    const token = Buffer.from(`${email}:${Date.now()}`).toString("base64");

    return NextResponse.json({
      success: true,
      token,
      user: {
        email,
        role: "admin",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

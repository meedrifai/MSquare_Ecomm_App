// ================================
// 9. src/app/api/upload/route.js
// ================================
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

// POST - Upload d'image
export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json(
        { success: false, error: "Aucun fichier fourni" },
        { status: 400 }
      );
    }

    // Vérifier le type de fichier
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        {
          success: false,
          error: "Type de fichier non supporté. Utilisez JPG, PNG ou WebP.",
        },
        { status: 400 }
      );
    }

    // Vérifier la taille (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: "Fichier trop volumineux. Maximum 5MB." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Générer un nom unique
    const timestamp = Date.now();
    const ext = path.extname(file.name);
    const filename = `product-${timestamp}${ext}`;
    const filepath = path.join(process.cwd(), "public", "uploads", filename);

    // Sauvegarder le fichier
    await writeFile(filepath, buffer);

    const url = `/uploads/${filename}`;

    return NextResponse.json({
      success: true,
      url,
      filename,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

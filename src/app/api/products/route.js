// ================================
// 1. src/app/api/products/route.js
// ================================
import { NextResponse } from "next/server";
import { initialProducts } from "@/lib/initialData";

// Simuler une base de données en mémoire
let products = [...initialProducts];

// GET - Récupérer tous les produits
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const newOnly = searchParams.get("new");

    let filteredProducts = [...products];

    if (category && category !== "all") {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === category
      );
    }

    if (featured === "true") {
      filteredProducts = filteredProducts.filter((p) => p.featured);
    }

    if (newOnly === "true") {
      filteredProducts = filteredProducts.filter((p) => p.new);
    }

    return NextResponse.json({
      success: true,
      products: filteredProducts,
      count: filteredProducts.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST - Créer un nouveau produit (Admin uniquement)
export async function POST(request) {
  try {
    const body = await request.json();

    // Validation
    if (!body.name || !body.category || !body.price) {
      return NextResponse.json(
        { success: false, error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    products.push(newProduct);

    return NextResponse.json(
      {
        success: true,
        product: newProduct,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

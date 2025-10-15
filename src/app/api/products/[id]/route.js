// ================================
// 2. src/app/api/products/[id]/route.js
// ================================
import { NextResponse } from "next/server";

// GET - Récupérer un produit par ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
      return NextResponse.json(
        { success: false, error: "Produit non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour un produit (Admin uniquement)
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const updates = await request.json();

    const index = products.findIndex((p) => p.id === parseInt(id));

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Produit non trouvé" },
        { status: 404 }
      );
    }

    products[index] = {
      ...products[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      product: products[index],
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un produit (Admin uniquement)
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    const index = products.findIndex((p) => p.id === parseInt(id));

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Produit non trouvé" },
        { status: 404 }
      );
    }

    const deletedProduct = products[index];
    products.splice(index, 1);

    return NextResponse.json({
      success: true,
      message: "Produit supprimé avec succès",
      product: deletedProduct,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ================================
// 6. src/app/api/reviews/[id]/route.js
// ================================
import { NextResponse } from "next/server";

// DELETE - Supprimer un avis (Admin uniquement)
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    const index = reviews.findIndex((r) => r.id === parseInt(id));

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Avis non trouvé" },
        { status: 404 }
      );
    }

    reviews.splice(index, 1);

    return NextResponse.json({
      success: true,
      message: "Avis supprimé avec succès",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// PUT - Vérifier/Modérer un avis (Admin uniquement)
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { verified } = await request.json();

    const index = reviews.findIndex((r) => r.id === parseInt(id));

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Avis non trouvé" },
        { status: 404 }
      );
    }

    reviews[index] = {
      ...reviews[index],
      verified,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      review: reviews[index],
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

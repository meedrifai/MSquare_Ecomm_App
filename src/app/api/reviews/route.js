// ================================
// 5. src/app/api/reviews/route.js
// ================================
import { NextResponse } from "next/server";

let reviews = [
  {
    id: 1,
    productId: 1,
    customerName: "Ahmed",
    rating: 5,
    comment: "Excellente qualité et design unique!",
    date: "2025-10-01",
    verified: true,
  },
  {
    id: 2,
    productId: 2,
    customerName: "Fatima",
    rating: 5,
    comment: "Très confortable et stylé!",
    date: "2025-09-28",
    verified: true,
  },
];

// GET - Récupérer les avis
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");

    let filteredReviews = [...reviews];

    if (productId) {
      filteredReviews = filteredReviews.filter(
        (r) => r.productId === parseInt(productId)
      );
    }

    // Trier par date (plus récent en premier)
    filteredReviews.sort((a, b) => new Date(b.date) - new Date(a.date));

    return NextResponse.json({
      success: true,
      reviews: filteredReviews,
      count: filteredReviews.length,
      averageRating:
        filteredReviews.length > 0
          ? (
              filteredReviews.reduce((sum, r) => sum + r.rating, 0) /
              filteredReviews.length
            ).toFixed(1)
          : 0,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST - Créer un nouvel avis
export async function POST(request) {
  try {
    const body = await request.json();

    // Validation
    if (
      !body.productId ||
      !body.customerName ||
      !body.rating ||
      !body.comment
    ) {
      return NextResponse.json(
        { success: false, error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    if (body.rating < 1 || body.rating > 5) {
      return NextResponse.json(
        { success: false, error: "La note doit être entre 1 et 5" },
        { status: 400 }
      );
    }

    const newReview = {
      id: reviews.length > 0 ? Math.max(...reviews.map((r) => r.id)) + 1 : 1,
      ...body,
      date: new Date().toISOString().split("T")[0],
      verified: false, // À vérifier manuellement par admin
      createdAt: new Date().toISOString(),
    };

    reviews.push(newReview);

    return NextResponse.json(
      {
        success: true,
        review: newReview,
        message: "Avis soumis avec succès. En attente de modération.",
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

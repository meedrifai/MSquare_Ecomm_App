// ================================
// 4. src/app/api/orders/[id]/route.js
// ================================
import { NextResponse } from "next/server";

// GET - Récupérer une commande par ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const order = orders.find((o) => o.id === parseInt(id));

    if (!order) {
      return NextResponse.json(
        { success: false, error: "Commande non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour le statut d'une commande
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { status } = await request.json();

    if (!["pending", "processing", "completed", "cancelled"].includes(status)) {
      return NextResponse.json(
        { success: false, error: "Statut invalide" },
        { status: 400 }
      );
    }

    const index = orders.findIndex((o) => o.id === parseInt(id));

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Commande non trouvée" },
        { status: 404 }
      );
    }

    orders[index] = {
      ...orders[index],
      status,
      updatedAt: new Date().toISOString(),
    };

    // TODO: Envoyer email de mise à jour de statut
    await sendStatusUpdateEmail(orders[index]);

    return NextResponse.json({
      success: true,
      order: orders[index],
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

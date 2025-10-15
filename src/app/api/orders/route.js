// ================================
// 3. src/app/api/orders/route.js
// ================================
import { NextResponse } from "next/server";
import { initialOrders } from "@/lib/initialData";

let orders = [...initialOrders];

// GET - Récupérer toutes les commandes
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    let filteredOrders = [...orders];

    if (status) {
      filteredOrders = filteredOrders.filter((o) => o.status === status);
    }

    // Trier par date (plus récent en premier)
    filteredOrders.sort((a, b) => new Date(b.date) - new Date(a.date));

    return NextResponse.json({
      success: true,
      orders: filteredOrders,
      count: filteredOrders.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST - Créer une nouvelle commande
export async function POST(request) {
  try {
    const body = await request.json();

    // Validation
    if (
      !body.customer ||
      !body.phone ||
      !body.email ||
      !body.address ||
      !body.items
    ) {
      return NextResponse.json(
        { success: false, error: "Informations de commande incomplètes" },
        { status: 400 }
      );
    }

    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "La commande doit contenir au moins un article",
        },
        { status: 400 }
      );
    }

    const newOrder = {
      id: orders.length > 0 ? Math.max(...orders.map((o) => o.id)) + 1 : 1,
      ...body,
      status: "pending",
      date: new Date().toISOString().split("T")[0],
      createdAt: new Date().toISOString(),
    };

    orders.push(newOrder);

    // TODO: Envoyer email de confirmation
    await sendOrderConfirmationEmail(newOrder);

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

// Fonction d'envoi d'email de mise à jour
async function sendStatusUpdateEmail(order) {
  console.log(
    "Envoi email de mise à jour pour commande:",
    order.id,
    "Statut:",
    order.status
  );
  return true;
}

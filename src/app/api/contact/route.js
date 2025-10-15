// ================================
// 7. src/app/api/contact/route.js
// ================================
import { NextResponse } from "next/server";

let contactMessages = [];

// POST - Envoyer un message de contact
export async function POST(request) {
  try {
    const body = await request.json();

    // Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Email invalide" },
        { status: 400 }
      );
    }

    const newMessage = {
      id: contactMessages.length + 1,
      ...body,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    contactMessages.push(newMessage);

    // TODO: Envoyer notification email à l'admin
    await sendContactNotification(newMessage);

    return NextResponse.json(
      {
        success: true,
        message: "Message envoyé avec succès. Nous vous répondrons bientôt.",
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

// GET - Récupérer tous les messages (Admin uniquement)
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      messages: contactMessages,
      count: contactMessages.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

async function sendContactNotification(message) {
  console.log("Nouveau message de contact:", message);
  return true;
}

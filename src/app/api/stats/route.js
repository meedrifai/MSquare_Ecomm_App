// ================================
// 8. src/app/api/stats/route.js
// ================================
import { NextResponse } from "next/server";

// GET - Statistiques pour le dashboard admin
export async function GET() {
  try {
    const totalProducts = products.length;
    const totalOrders = orders.length;
    const pendingOrders = orders.filter((o) => o.status === "pending").length;
    const completedOrders = orders.filter(
      (o) => o.status === "completed"
    ).length;
    const totalRevenue = orders
      .filter((o) => o.status === "completed")
      .reduce((sum, o) => sum + o.total, 0);
    const averageOrderValue =
      completedOrders > 0 ? totalRevenue / completedOrders : 0;

    // Produits les plus vendus
    const productSales = {};
    orders.forEach((order) => {
      order.items.forEach((item) => {
        productSales[item.productId] =
          (productSales[item.productId] || 0) + item.quantity;
      });
    });

    const topProducts = Object.entries(productSales)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([productId, quantity]) => ({
        product: products.find((p) => p.id === parseInt(productId)),
        quantity,
      }));

    // Commandes par jour (derniers 7 jours)
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split("T")[0];
      const dayOrders = orders.filter((o) => o.date === dateStr);
      last7Days.push({
        date: dateStr,
        orders: dayOrders.length,
        revenue: dayOrders.reduce((sum, o) => sum + o.total, 0),
      });
    }

    return NextResponse.json({
      success: true,
      stats: {
        totalProducts,
        totalOrders,
        pendingOrders,
        completedOrders,
        totalRevenue,
        averageOrderValue,
        topProducts,
        last7Days,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ================================
// 11. src/components/KhalysApp.js
// ================================
"use client";
import { useState } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import AdminPage from "./pages/AdminPage";

export default function KhalysApp() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    if (currentPage === "home")
      return <HomePage setCurrentPage={setCurrentPage} />;
    if (currentPage === "shop")
      return <ShopPage setCurrentPage={setCurrentPage} />;
    if (currentPage.startsWith("product-")) {
      const productId = currentPage.split("-")[1];
      return (
        <ProductDetailPage
          productId={productId}
          setCurrentPage={setCurrentPage}
        />
      );
    }
    if (currentPage === "cart")
      return <CartPage setCurrentPage={setCurrentPage} />;
    if (currentPage === "checkout")
      return <CheckoutPage setCurrentPage={setCurrentPage} />;
    if (currentPage === "about") return <AboutPage />;
    if (currentPage === "contact") return <ContactPage />;
    if (currentPage === "faq") return <FAQPage />;
    if (currentPage === "admin") return <AdminPage />;

    return <HomePage setCurrentPage={setCurrentPage} />;
  };

  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <main className="flex-1">{renderPage()}</main>
          <Footer setCurrentPage={setCurrentPage} />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}

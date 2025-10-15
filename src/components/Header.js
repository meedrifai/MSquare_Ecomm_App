// Header Component
"use client"
import Logo from "./Logo";
import React, { useState } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Globe } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const Header = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { cartItems } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentPage("home")}
            className="cursor-pointer"
          >
            <Logo />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["home", "shop", "about", "contact", "faq"].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`font-medium transition-colors ${
                  currentPage === page
                    ? "text-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                {t.nav[page]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Globe className="w-5 h-5" />
            </button>

            <button
              onClick={() => setCurrentPage("cart")}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-2">
            {["home", "shop", "about", "contact", "faq"].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2 rounded-lg ${
                  currentPage === page
                    ? "bg-amber-50 text-amber-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {t.nav[page]}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
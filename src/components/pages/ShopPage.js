// Shop Page
import ProductCard from "../ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { initialProducts } from "@/lib/initialData";

const ShopPage = ({ setCurrentPage }) => {
  const { lang, t } = useLanguage();
  const [products] = useState(initialProducts);
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1
          className="text-4xl font-bold mb-8"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {t.shop.title}
        </h1>

        {/* Filters */}
        <div
          className="flex gap-4 mb-8 flex-wrap"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {["all", "tshirt", "hoodie", "cap"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                filter === cat
                  ? "bg-amber-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {
                t.shop[
                  cat === "tshirt"
                    ? "tshirts"
                    : cat === "hoodie"
                    ? "hoodies"
                    : cat === "cap"
                    ? "caps"
                    : cat
                ]
              }
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setCurrentPage={setCurrentPage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

// Home Page
import ProductCard from "../ProductCard";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { initialProducts } from "@/lib/initialData";

const HomePage = ({ setCurrentPage }) => {
  const { lang, t } = useLanguage();
  const [products] = useState(initialProducts);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl" dir={lang === "ar" ? "rtl" : "ltr"}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t.home.hero}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {t.home.subtitle}
            </p>
            <button
              onClick={() => setCurrentPage("shop")}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              {t.home.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            {t.home.whyUs}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t.home.quality, desc: t.home.qualityDesc, icon: "✨" },
              { title: t.home.design, desc: t.home.designDesc, icon: "🎨" },
              { title: t.home.delivery, desc: t.home.deliveryDesc, icon: "🚚" },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md text-center"
                dir={lang === "ar" ? "rtl" : "ltr"}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            {t.home.featured}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products
              .filter((p) => p.featured)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  setCurrentPage={setCurrentPage}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;


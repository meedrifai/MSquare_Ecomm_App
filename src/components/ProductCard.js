// Product Card Component
import Image from 'next/image';
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";

const ProductCard = ({ product, setCurrentPage, onSelect }) => {
  const { lang, t } = useLanguage();
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-64 bg-gray-100 overflow-hidden group">
        <Image
          src={product.image}
          alt={product.name[lang]}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.new && (
          <span className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            NEW
          </span>
        )}
      </div>
      <div className="p-6" dir={lang === "ar" ? "rtl" : "ltr"}>
        <h3 className="text-xl font-bold mb-2">{product.name[lang]}</h3>
        <p className="text-2xl font-bold text-amber-600 mb-4">
          {product.price} DH
        </p>
        <button
          onClick={() =>
            onSelect
              ? onSelect(product)
              : setCurrentPage("product-" + product.id)
          }
          className="w-full bg-gray-900 hover:bg-amber-600 text-white py-3 rounded-lg font-medium transition-colors"
        >
          {t.shop.addToCart}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

// Cart Page
import { Minus,Plus,Trash2,ShoppingCart } from "lucide-react";
import Image from 'next/image';
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";

const CartPage = ({ setCurrentPage }) => {
  const { lang, t } = useLanguage();
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ShoppingCart className="w-24 h-24 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold mb-4">{t.cart.empty}</h2>
          <button
            onClick={() => setCurrentPage("shop")}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg"
          >
            {t.cart.continue}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1
          className="text-4xl font-bold mb-8"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {t.cart.title}
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex items-center gap-6"
                dir={lang === "ar" ? "rtl" : "ltr"}
              >
                  <Image
                    src={item.image}
                    alt={item.name[lang]}
                    width={96}
                    height={96}
                    className="object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">
                      {item.name[lang]}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {item.selectedSize} • {item.selectedColor} •{" "}
                      {item.selectedPattern}
                    </p>
                    <p className="text-lg font-bold text-amber-600">
                      {item.price} DH
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                    <button
                      onClick={() => removeFromCart(index)}
                      className="p-2 hover:bg-red-50 rounded-lg text-red-600"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(index, Math.max(1, item.quantity - 1))
                        }
                        className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          <div className="lg:col-span-1">
            <div
              className="bg-white rounded-xl shadow-md p-6 sticky top-24"
              dir={lang === "ar" ? "rtl" : "ltr"}
            >
              <h3 className="text-xl font-bold mb-4">{t.cart.total}</h3>
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-2xl font-bold">
                  <span>{t.cart.total}</span>
                  <span className="text-amber-600">{total} DH</span>
                </div>
              </div>
              <button
                onClick={() => setCurrentPage("checkout")}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium"
              >
                {t.cart.checkout}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

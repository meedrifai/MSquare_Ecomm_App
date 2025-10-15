// Checkout Page
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";

const CheckoutPage = ({ setCurrentPage }) => {
  const { lang, t } = useLanguage();
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", { formData, cartItems, total });
    setSubmitted(true);
    setTimeout(() => {
      setCurrentPage("home");
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div
          className="bg-white rounded-xl shadow-lg p-12 text-center max-w-md"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✓</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">{t.checkout.success}</h2>
          <p className="text-gray-600">{t.checkout.successMsg}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1
          className="text-4xl font-bold mb-8"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {t.checkout.title}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          <h2 className="text-2xl font-bold mb-6">{t.checkout.info}</h2>

          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2">
                {t.checkout.name}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t.checkout.phone}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t.checkout.address}
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t.checkout.city}
              </label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t.checkout.notes}
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                rows="3"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="border-t pt-6 mb-6">
            <div className="flex justify-between text-2xl font-bold">
              <span>{t.cart.total}</span>
              <span className="text-amber-600">{total} DH</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg text-lg font-medium"
          >
            {t.checkout.submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

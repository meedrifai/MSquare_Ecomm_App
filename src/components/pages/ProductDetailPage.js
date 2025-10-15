// ================================
// src/components/pages/ProductDetailPage.js - Version avec images dynamiques
// ================================

import { Star, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { initialProducts } from "@/lib/initialData";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";

const ProductDetailPage = ({ productId }) => {
  const { lang, t } = useLanguage();
  const { addToCart } = useCart();
  const [products] = useState(initialProducts);
  const product = products.find((p) => p.id === parseInt(productId));
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Blanc");
  const [selectedPattern, setSelectedPattern] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  // Initialisation du motif par défaut
  useEffect(() => {
    if (product) {
      setSelectedPattern(product.patterns[0]);
    }
  }, [product]);

  // Fonction pour obtenir l'image actuelle selon la couleur et le motif
  const getCurrentImage = useCallback(() => {
    if (!product) return "";

    // Si le produit a des images dynamiques
    if (
      product.images &&
      product.images[selectedColor] &&
      product.images[selectedColor][selectedPattern]
    ) {
      return product.images[selectedColor][selectedPattern];
    }

    // Sinon, utiliser l'image par défaut
    return product.image;
  }, [product, selectedColor, selectedPattern]);

  // Mettre à jour l'image quand la couleur ou le motif change
  useEffect(() => {
    if (product) {
      setImageLoading(true);
      const newImage = getCurrentImage();

      // Petit délai pour l'effet de transition
      setTimeout(() => {
        setCurrentImage(newImage);
        setImageLoading(false);
      }, 150);
    }
  }, [selectedColor, selectedPattern, product, getCurrentImage]);

  // Initialiser l'image au chargement
  useEffect(() => {
    if (product) {
      setCurrentImage(getCurrentImage());
    }
  }, [product, getCurrentImage]);

  if (!product)
    return <div className="p-8 text-center">Produit non trouvé</div>;

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize,
      selectedColor,
      selectedPattern,
      quantity,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg p-8">
          {/* Image avec transition */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src={currentImage || product.image}
                alt={product.name[lang]}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Indicateur de chargement */}
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Badge indiquant la combinaison actuelle */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
              <p className="text-xs font-medium text-gray-700">
                {selectedColor} • {selectedPattern}
              </p>
            </div>
          </div>

          {/* Details */}
          <div dir={lang === "ar" ? "rtl" : "ltr"}>
            <h1 className="text-4xl font-bold mb-4">{product.name[lang]}</h1>
            <p className="text-3xl font-bold text-amber-600 mb-6">
              {product.price} DH
            </p>
            <p className="text-gray-600 mb-8">{product.description[lang]}</p>

            {/* Color Selection - AVANT Size pour que l'image change d'abord */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                {t.product.color}
              </label>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                      selectedColor === color
                        ? "border-amber-600 bg-amber-50 text-amber-600 scale-105 shadow-md"
                        : "border-gray-200 hover:border-gray-300 hover:scale-102"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Pattern Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                {t.product.pattern}
              </label>
              <select
                value={selectedPattern}
                onChange={(e) => setSelectedPattern(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-amber-600 focus:outline-none transition-colors"
              >
                {product.patterns.map((pattern) => (
                  <option key={pattern} value={pattern}>
                    {pattern}
                  </option>
                ))}
              </select>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                {t.product.size}
              </label>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                      selectedSize === size
                        ? "border-amber-600 bg-amber-50 text-amber-600 scale-105"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">
                {t.product.quantity}
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xl font-bold w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg text-lg font-medium transition-colors"
            >
              {t.product.addToCart}
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div
          className="mt-12 bg-white rounded-xl shadow-lg p-8"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          <h2 className="text-2xl font-bold mb-6">{t.product.reviews}</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium">Ahmed</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">
                  Excellente qualité et design unique! Les motifs sont
                  magnifiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

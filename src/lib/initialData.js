// ================================
// src/lib/initialData.js - Version avec images dynamiques
// ================================

export const initialProducts = [
  {
    id: 1,
    name: { fr: "T-Shirt Classic", ar: "تيشيرت كلاسيك" },
    category: "tshirt",
    price: 199,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    images: {
      Blanc: {
        Anime:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        Palestine:
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
        GenZ: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
      },
      Noir: {
        Anime:
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
        Palestine:
          "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500",
        GenZ: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
      },
    },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanc", "Noir"],
    patterns: ["Anime", "Palestine", "GenZ"],
    description: {
      fr: "T-shirt premium en coton avec design marocain moderne",
      ar: "تيشيرت فاخر من القطن بتصميم مغربي عصري",
    },
    featured: true,
    new: true,
  },
  {
    id: 2,
    name: { fr: "Hoodie Premium", ar: "هودي بريميوم" },
    category: "hoodie",
    price: 399,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    images: {
      Blanc: {
        Anime:
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
        Palestine:
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
        GenZ: "https://images.unsplash.com/photo-1614251055880-6facac4ca83a?w=500",
      },
      Noir: {
        Anime:
          "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=500",
        Palestine:
          "https://images.unsplash.com/photo-1620799140782-c6f3f7f3bf1e?w=500",
        GenZ: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
      },
    },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanc", "Noir"],
    patterns: ["Anime", "Palestine", "GenZ"],
    description: {
      fr: "Hoodie confortable avec broderie artisanale",
      ar: "هودي مريح مع تطريز حرفي",
    },
    featured: true,
    new: false,
  },
  {
    id: 3,
    name: { fr: "Casquette Heritage", ar: "قبعة التراث" },
    category: "cap",
    price: 149,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500",
    images: {
      Blanc: {
        Anime:
          "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500",
        Palestine:
          "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=500",
        GenZ: "https://images.unsplash.com/photo-1631084655463-e671365ec05f?w=500",
      },
      Noir: {
        Anime:
          "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&sat=-100",
        Palestine:
          "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=500",
        GenZ: "https://images.unsplash.com/photo-1606518830255-5ee5b2f4e90c?w=500",
      },
    },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanc", "Noir"],
    patterns: ["Anime", "Palestine", "GenZ"],
    description: {
      fr: "Casquette ajustable avec logo brodé",
      ar: "قبعة قابلة للتعديل مع شعار مطرز",
    },
    featured: false,
    new: true,
  },
  {
    id: 4,
    name: { fr: "T-Shirt Berbère", ar: "تيشيرت أمازيغي" },
    category: "tshirt",
    price: 219,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
    images: {
      Blanc: {
        Anime:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        Palestine:
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
        GenZ: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
      },
      Noir: {
        Anime:
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
        Palestine:
          "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500",
        GenZ: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
      },
    },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanc", "Noir"],
    patterns: ["Anime", "Palestine", "GenZ"],
    description: {
      fr: "T-shirt avec motifs berbères traditionnels",
      ar: "تيشيرت بنقوش أمازيغية تقليدية",
    },
    featured: true,
    new: true,
  },
  {
    id: 5,
    name: { fr: "Hoodie Zellige", ar: "هودي زليج" },
    category: "hoodie",
    price: 449,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
    images: {
      Blanc: {
        Anime:
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
        Palestine:
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
        GenZ: "https://images.unsplash.com/photo-1614251055880-6facac4ca83a?w=500",
      },
      Noir: {
        Anime:
          "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=500",
        Palestine:
          "https://images.unsplash.com/photo-1620799140782-c6f3f7f3bf1e?w=500",
        GenZ: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
      },
    },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanc", "Noir"],
    patterns: ["Anime", "Palestine", "GenZ"],
    description: {
      fr: "Hoodie inspiré des mosaïques marocaines",
      ar: "هودي مستوحى من الفسيفساء المغربية",
    },
    featured: false,
    new: true,
  },
  {
    id: 6,
    name: { fr: "Casquette Marrakech", ar: "قبعة مراكش" },
    category: "cap",
    price: 169,
    image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=500",
    images: {
      Blanc: {
        Anime:
          "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500",
        Palestine:
          "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=500",
        GenZ: "https://images.unsplash.com/photo-1631084655463-e671365ec05f?w=500",
      },
      Noir: {
        Anime:
          "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&sat=-100",
        Palestine:
          "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=500",
        GenZ: "https://images.unsplash.com/photo-1606518830255-5ee5b2f4e90c?w=500",
      },
    },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanc", "Noir"],
    patterns: ["Anime", "Palestine", "GenZ"],
    description: {
      fr: "Casquette édition limitée Marrakech",
      ar: "قبعة إصدار محدود مراكش",
    },
    featured: true,
    new: false,
  },
];

export const initialOrders = [
  {
    id: 1,
    customer: "Mohammed Ali",
    phone: "+212 6XX XXX XXX",
    email: "mohammed@example.com",
    address: "Rue XYZ, Casablanca",
    city: "Casablanca",
    items: [{ productId: 1, name: "T-Shirt Classic", quantity: 2, price: 199 }],
    total: 398,
    status: "pending",
    date: "2025-10-03",
    notes: "",
  },
  {
    id: 2,
    customer: "Fatima Zahra",
    phone: "+212 6YY YYY YYY",
    email: "fatima@example.com",
    address: "Avenue ABC, Rabat",
    city: "Rabat",
    items: [{ productId: 2, name: "Hoodie Premium", quantity: 1, price: 399 }],
    total: 399,
    status: "processing",
    date: "2025-10-02",
    notes: "Livraison urgente SVP",
  },
];

export const categories = [
  { id: "tshirt", name: { fr: "T-Shirts", ar: "تيشيرتات" } },
  { id: "hoodie", name: { fr: "Hoodies", ar: "هوديات" } },
  { id: "cap", name: { fr: "Casquettes", ar: "قبعات" } },
  { id: "jacket", name: { fr: "Vestes", ar: "جاكيتات" } },
];

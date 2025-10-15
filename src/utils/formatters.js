// ================================
// 24. src/utils/formatters.js
// ================================

// Formatter le prix
export function formatPrice(price, currency = "DH") {
  return `${price.toFixed(2)} ${currency}`;
}

// Formatter la date
export function formatDate(date, locale = "fr-FR") {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

// Formatter le numéro de téléphone
export function formatPhoneNumber(phone) {
  return phone.replace(/(\d{4})(\d{2})(\d{2})(\d{2})/, "+$1 $2 $3 $4");
}

// Slugifier du texte
export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Tronquer du texte
export function truncate(text, length = 100) {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

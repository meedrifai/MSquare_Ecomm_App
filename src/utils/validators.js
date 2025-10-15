// ================================
// 25. src/utils/validators.js
// ================================

// Valider un email
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Valider un numéro de téléphone marocain
export function isValidMoroccanPhone(phone) {
  const regex = /^(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}$/;
  return regex.test(phone);
}

// Valider un mot de passe
export function isValidPassword(password) {
  return password.length >= 8;
}

// Valider un formulaire
export function validateForm(data, rules) {
  const errors = {};

  for (const field in rules) {
    const value = data[field];
    const fieldRules = rules[field];

    if (fieldRules.required && !value) {
      errors[field] = "Ce champ est requis";
      continue;
    }

    if (fieldRules.email && value && !isValidEmail(value)) {
      errors[field] = "Email invalide";
    }

    if (fieldRules.phone && value && !isValidMoroccanPhone(value)) {
      errors[field] = "Numéro de téléphone invalide";
    }

    if (fieldRules.minLength && value && value.length < fieldRules.minLength) {
      errors[field] = `Minimum ${fieldRules.minLength} caractères`;
    }

    if (fieldRules.maxLength && value && value.length > fieldRules.maxLength) {
      errors[field] = `Maximum ${fieldRules.maxLength} caractères`;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

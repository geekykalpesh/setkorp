// Form validation schemas and utilities
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const contactFormValidation = {
  name: (value) => validateRequired(value) && value.length >= 2,
  email: (value) => validateRequired(value) && validateEmail(value),
  phone: (value) => !value || validatePhone(value), // Optional field
  message: (value) => validateRequired(value) && value.length >= 10,
};
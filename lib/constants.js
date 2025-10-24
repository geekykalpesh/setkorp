// Site configuration constants
export const SITE_CONFIG = {
  name: "Setkorp",
  description: "Expert business setup services in Dubai, UAE. Complete company formation and licensing solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://setkorp.com",
  ogImage: "/assets/og-image.jpg",
  location: "Dubai, UAE",
  links: {
    twitter: "https://twitter.com/setkorp",
    linkedin: "https://linkedin.com/company/setkorp",
  },
};

// Navigation menu items
export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#welcome" },
  { name: "Services", href: "#services" },
  { name: "Free Zones", href: "#features" },
  { name: "Success Stories", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

// API endpoints
export const API_ENDPOINTS = {
  contact: "/api/contact",
  newsletter: "/api/newsletter",
};
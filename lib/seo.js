export const generatePageMetadata = (title, description, path = '') => ({
  title,
  description,
  openGraph: {
    title,
    description,
    url: path,
  },
  twitter: {
    title,
    description,
  },
  alternates: {
    canonical: path,
  },
});

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Setkorp",
    "url": process.env.NEXT_PUBLIC_SITE_URL,
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/assets/logo.svg`,
    "description": "Expert business setup services in Dubai, UAE. Complete company formation, licensing, and business registration solutions.",
    "areaServed": {
      "@type": "Place",
      "name": "Dubai, UAE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic"]
    }
  },
  
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Setup in Dubai",
    "provider": {
      "@type": "Organization",
      "name": "Setkorp"
    },
    "description": "Complete business setup services in Dubai including company formation, trade license, visa processing, and PRO services",
    "areaServed": "Dubai, UAE",
    "serviceType": "Business Formation"
  }
};
// Server-side data fetching utilities
export async function getBusinessServices() {
  return [
    {
      id: 1,
      title: "Free Zone Company Setup",
      description: "100% foreign ownership with tax benefits",
      features: ["No corporate tax", "Full repatriation", "Easy setup"]
    },
    {
      id: 2,
      title: "Mainland Company Formation",
      description: "Trade anywhere in UAE with local sponsorship",
      features: ["UAE market access", "Government contracts", "Local presence"]
    },
    {
      id: 3,
      title: "Offshore Company Setup",
      description: "International business with privacy protection",
      features: ["Asset protection", "Tax optimization", "Confidentiality"]
    }
  ];
}

export async function getTestimonials() {
  return [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      company: "Tech Solutions LLC",
      text: "Setkorp made our Dubai business setup seamless and efficient."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "Global Trading FZE",
      text: "Professional service with complete guidance throughout the process."
    }
  ];
}
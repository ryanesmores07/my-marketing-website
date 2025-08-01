// Contact configuration - Update these values with your actual contact information
export const contactConfig = {
  // Formspree endpoint - Replace with your actual Formspree form ID
  formspreeEndpoint: "https://formspree.io/f/manogljy",

  // Direct messaging contact details
  line: {
    id: "@your-line-id", // Replace with your actual Line ID
    url: "https://line.me/R/ti/p/@your-line-id",
    qrCodePath: "/images/line-qr-code.png", // Add your LINE QR code image here
  },

  whatsapp: {
    number: "your-whatsapp-number", // Replace with your actual WhatsApp number (with country code, no +)
    url: "https://wa.me/your-whatsapp-number",
  },

  email: "mytokyowebdev@ernieryan.dev",

  // Response time promise
  responseTime: "24 hours",
};

// Pre-written messages for direct contact
export const directMessages = {
  en: "Hi! I'm interested in your web development services.",
  jp: "こんにちは！Web開発サービスについて興味があります。",
};

// Service types for dropdown
export const serviceTypes = {
  en: [
    "Shopify Development",
    "Multilingual SEO",
    "Multilingual Content Creation",
    "Web Design",
    "Custom Web Development",
    "Other",
  ],
  jp: [
    "Shopify開発",
    "多言語SEO",
    "多言語コンテンツ作成",
    "Webデザイン",
    "カスタムWeb開発",
    "その他",
  ],
};

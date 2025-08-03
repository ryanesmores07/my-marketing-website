// Contact configuration - Update these values with your actual contact information
export const contactConfig = {
  // Formspree endpoint - Replace with your actual Formspree form ID
  formspreeEndpoint: "https://formspree.io/f/manogljy",

  // Direct messaging contact details
  line: {
    id: "@g97kZgJz04", // Replace with your actual Line ID
    url: "https://line.me/ti/p/g97kZgJz04",
    mobileUrl: "line://ti/p/g97kZgJz04", // Mobile app URL
    qrCodePath: "/images/Line-QR.JPG", // Add your LINE QR code image here
  },

  whatsapp: {
    number: "818075750507", // Replace with your actual WhatsApp number (with country code, no +)
    url: "https://wa.me/818075750507",
  },

  email: "mytokyowebdev@ernieryan.dev",

  // Response time promise
  responseTime: "24 hours",

  // QR Code paths for desktop users
  qrCodes: {
    line: "/images/Line-QR.JPG",
    whatsapp: "/images/Whatsapp-QR.jpeg", // WhatsApp QR code
  },

  // Direct message templates
  messageTemplates: {
    en: "Hi! I'm interested in your web development services.",
    jp: "こんにちは！Web開発サービスについて興味があります。",
  },
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

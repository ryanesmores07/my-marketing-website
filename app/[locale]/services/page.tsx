import { ServicesGrid } from "@/components/services-grid";

interface ServicesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: ServicesPageProps) {
  const { locale } = await params;

  return {
    title: locale === "ja" ? "サービス | Ryan Esnes" : "Services | Ryan Esnes",
    description:
      locale === "ja"
        ? "日本企業の海外展開と海外企業の日本市場参入を専門にサポートするWebデザイン、SEO、コンテンツライティング、Eコマースサービス"
        : "Specialized web design, SEO, content writing, and e-commerce services for Japanese businesses expanding globally and international companies entering Japan",
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen">
      <ServicesGrid locale={locale} />
    </main>
  );
}

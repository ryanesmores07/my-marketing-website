import { fetchServices } from "@/lib/contentful";
import { ServicesGrid } from "@/components/services-grid";

interface ServicesSectionProps {
  locale: string;
}

export async function ServicesSection({ locale }: ServicesSectionProps) {
  const services = await fetchServices();

  return <ServicesGrid services={services} locale={locale} />;
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServicesGridProps {
  services: any[];
  locale?: string;
}

export const ServicesGrid = ({
  services,
  locale = "en",
}: ServicesGridProps) => {
  // Sort services by order field
  const sortedServices = services.sort(
    (a: any, b: any) => (a.fields.order || 0) - (b.fields.order || 0)
  );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sortedServices.map((service: any) => (
        <div
          key={service.sys.id}
          className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          {/* Service Icon */}
          {service.fields.icon?.fields?.file?.url ? (
            <Image
              src={`https:${service.fields.icon.fields.file.url}`}
              alt={service.fields.icon.fields.title || service.fields.title}
              width={96}
              height={96}
              className="w-24 h-24 mb-6 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="w-14 h-14 mb-6 bg-accent rounded-lg"></div>
          )}

          {/* Service Content */}
          <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
            {service.fields.title}
          </h3>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {service.fields.shortDescription}
          </p>

          {/* Service Link */}
          <Link
            href={`/${locale}/services/${service.fields.slug}`}
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm group-hover:translate-x-1 transition-all"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-muted rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity -z-10" />
        </div>
      ))}
    </div>
  );
};

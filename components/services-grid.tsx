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
              className="w-24 h-24 mb-6 object-contain transition-transform duration-300 group-hover:scale-110 "
            />
          ) : (
            <div className="w-14 h-14 mb-6 bg-accent rounded-lg"></div>
          )}

          {/* Service Content */}
          <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
            {service.fields.title}
          </h3>

          {/* Teaser as numbered list */}
          {service.fields.teaser && service.fields.teaser.length > 0 && (
            <ol className="text-muted-foreground mb-6 leading-relaxed space-y-2">
              {service.fields.teaser.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-primary bg-primary/10 rounded-full mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ol>
          )}

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-muted rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity -z-10" />
        </div>
      ))}
    </div>
  );
};

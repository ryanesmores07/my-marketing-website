import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProjectsGridProps {
  items: any[];
  locale?: string;
}

export const ProjectsGrid = ({ items, locale = "en" }: ProjectsGridProps) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Project Content */}
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.description ||
                "Cross-border project helping businesses expand their market reach."}
            </p>

            {/* Project Link */}
            <Link
              href={`/${locale}/projects/${project.slug || index}`}
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm group-hover:translate-x-1 transition-all"
            >
              View Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity -z-10" />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {items.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-gray-300 rounded-lg"></div>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No projects yet
          </h3>
          <p className="text-gray-600">
            Projects will appear here once added to Contentful.
          </p>
        </div>
      )}
    </>
  );
};

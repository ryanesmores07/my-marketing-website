import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectsGridProps {
  items: any[];
  locale?: string;
}

// Dummy project data matching the reference design
const dummyProjects = [
  {
    id: 1,
    title: "Battleship",
    description:
      "Used components of Javascript to implement basic data structures and algorithms. Used terminal to display ships and tracked where where ships hit or missed.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js"],
    image: "/images/battleship-preview.jpg",
    codePreview: `arr1 = location.split(",");
// arr1[0] = row, arr1[1] = col
for a location in string i.e., 'A7' from A-J and 1
to 10
Enter a location to strike i.e., 'A7' from A-J and 1
to 10
var result = model.fire(guess);
if (result === '*') {
  view.displayHit(guess);
  view.displayMessage(hit);
} else {
  view.displayMiss(guess);
}`,
    githubUrl: "https://github.com/ernieryan/battleship",
    liveUrl: "https://battleship-demo.netlify.app",
  },
  {
    id: 2,
    title: "Movie Titles API",
    description:
      "Uses a public movie API to build a collection movie list that sorts from A-Z and users can click on a movie to view more details about the container and adds user's favorite movies into another container.",
    technologies: ["HTML", "CSS", "Javascript", "API", "Version control"],
    image: "/images/movie-api-preview.jpg",
    githubUrl: "https://github.com/ernieryan/movie-api",
    liveUrl: "https://movie-titles-api.netlify.app",
  },
  {
    id: 3,
    title: "Javascript Calculator",
    description:
      "Uses simple javascript concepts in Javascript to provide an arithmetic result in a terminal.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js"],
    image: "/images/calculator-preview.jpg",
    codePreview: `console.log('the result is ' + (a / b));
if (prompt === '-') {
  console.log('the result is ' + (a - b));
}
if (prompt === '*') {
  console.log('the result is ' + (a * b));
}`,
    githubUrl: "https://github.com/ernieryan/js-calculator",
    liveUrl: "https://js-calculator-demo.netlify.app",
  },
  {
    id: 4,
    title: "SaaS Landing Page",
    description:
      "Modern landing page built using latest web technologies from and a basic checklist - it also used components of both React and Tailwind CSS to produce a landing page.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    image: "/images/saas-landing-preview.jpg",
    githubUrl: "https://github.com/ernieryan/saas-landing",
    liveUrl: "https://saas-landing-demo.netlify.app",
  },
];

export const ProjectsGrid = ({ items, locale = "en" }: ProjectsGridProps) => {
  // Use dummy data for now, will be replaced with Contentful data later
  const projects = items.length > 0 ? items : dummyProjects;

  return (
    <div className="space-y-16">
      {projects.map((project, index) => (
        <div
          key={project.id || index}
          className={`grid lg:grid-cols-2 gap-12 items-start ${
            index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Project Info */}
          <div
            className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-4">
                {project.title}
              </h3>

              {/* Technology Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies?.map(
                  (tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Code Preview (if available) */}
            {project.codePreview && (
              <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-card-foreground font-mono leading-relaxed">
                  <code>{project.codePreview}</code>
                </pre>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub
                  </Link>
                </Button>
              )}

              {project.liveUrl && (
                <Button asChild variant="outline" size="sm">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View project
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Project Image/Preview */}
          <div
            className={`${
              index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
            }`}
          >
            <div className="relative group">
              {/* Placeholder for project image */}
              <div className="relative bg-card border border-border rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 lg:h-80 bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-muted-foreground/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-muted-foreground/40" />
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Project Preview
                      </p>
                    </div>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-muted-foreground/20 rounded-lg"></div>
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            No projects yet
          </h3>
          <p className="text-muted-foreground">
            Projects will appear here once added to Contentful.
          </p>
        </div>
      )}
    </div>
  );
};

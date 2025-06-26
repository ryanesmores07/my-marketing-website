import { Code, Smartphone, Globe } from "lucide-react";

export const AboutMe = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content - Services */}
          <div className="space-y-8">
            {/* Service Items */}
            <div className="space-y-6">
              {/* Website Development */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Code className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">
                    Website Development
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Custom websites and web applications built with modern
                    technologies and best practices.
                  </p>
                </div>
              </div>

              {/* App Development */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Smartphone className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">
                    App Development
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Mobile and desktop applications designed for optimal user
                    experience and performance.
                  </p>
                </div>
              </div>

              {/* Cross-Border Solutions */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Globe className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">
                    Cross-Border Solutions
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Specialized in Japan ⇄ Global market expansion with cultural
                    expertise and localization.
                  </p>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="pt-8 border-t border-border">
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium">
                  HTML5
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium">
                  CSS
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium">
                  React
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium">
                  TypeScript
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - About & Stats */}
          <div className="space-y-8">
            {/* About Me Header */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-card-foreground mb-6">
                About me
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I started my software journey from photography. Through that, I
                learned to love the process of creating from scratch. Since then
                I have worked with software development as it fulfills my love
                for learning and building things.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-left">
                <div className="text-3xl lg:text-4xl font-black text-primary mb-2">
                  120<span className="text-accent">+</span>
                </div>
                <div className="text-sm text-muted-foreground leading-tight">
                  Completed
                  <br />
                  Projects
                </div>
              </div>

              <div className="text-left">
                <div className="text-3xl lg:text-4xl font-black text-primary mb-2">
                  95<span className="text-accent">%</span>
                </div>
                <div className="text-sm text-muted-foreground leading-tight">
                  Client
                  <br />
                  satisfaction
                </div>
              </div>

              <div className="text-left">
                <div className="text-3xl lg:text-4xl font-black text-primary mb-2">
                  10<span className="text-accent">+</span>
                </div>
                <div className="text-sm text-muted-foreground leading-tight">
                  Years of
                  <br />
                  experience
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Specializing in cross-border digital solutions between Japan and
                global markets. I combine technical expertise with cultural
                understanding to help businesses expand internationally with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

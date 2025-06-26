export function ServicesHeader() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-accent text-accent-foreground ring-1 ring-inset ring-border mb-6">
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        Cross-Border Digital Solutions
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
        Bridge Japan & Global Markets
      </h2>

      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Specialized services for Japanese businesses expanding globally and
        international companies entering Japan. From culturally-aware web design
        to multilingual SEO optimization.
      </p>
    </div>
  );
}

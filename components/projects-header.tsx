export function ProjectsHeader() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-purple-50 text-purple-700 ring-1 ring-inset ring-purple-700/10 mb-6">
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        Success Stories
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        Recent Projects
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Explore our latest cross-border success stories and see how we&apos;ve
        helped businesses expand between Japan and global markets.
      </p>
    </div>
  );
}

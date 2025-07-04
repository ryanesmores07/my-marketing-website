import { Skeleton } from "@/components/ui/skeleton";

export function ServicesLoading() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-card rounded-2xl p-8 border border-border"
        >
          {/* Icon Loading */}
          <Skeleton className="w-14 h-14 rounded-lg mb-6" />

          {/* Content Loading */}
          <Skeleton className="h-6 mb-4" />
          <div className="space-y-2 mb-6">
            <Skeleton className="h-4" />
            <Skeleton className="h-4" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-4 w-24" />
        </div>
      ))}
    </div>
  );
}

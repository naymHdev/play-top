import { Skeleton } from "@/components/ui/skeleton";

export default function PTBlogSkeleton() {
  return (
    <div className=" p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Skeleton Card 1 */}
        <div className="space-y-4">
          <Skeleton className="w-full h-48 rounded-lg bg-gray-800" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-3/4 bg-gray-800" />
            <Skeleton className="h-4 w-24 bg-gray-700" />
          </div>
        </div>

        {/* Skeleton Card 2 */}
        <div className="space-y-4">
          <Skeleton className="w-full h-48 rounded-lg bg-gray-800" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-4/5 bg-gray-800" />
            <Skeleton className="h-4 w-24 bg-gray-700" />
          </div>
        </div>

        {/* Skeleton Card 3 */}
        <div className="space-y-4">
          <Skeleton className="w-full h-48 rounded-lg bg-gray-800" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-2/3 bg-gray-800" />
            <Skeleton className="h-4 w-24 bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

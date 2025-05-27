import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function PTGameCardSkeleton() {
  return (
    <div className="bg-black text-white p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Games Section */}
          <div className="lg:col-span-2">
            <Skeleton className="h-12 w-80 mb-8 bg-gray-800" />

            <div className="space-y-4">
              {/* Game Item Skeletons */}
              {Array.from({ length: 5 }).map((_, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      {/* Game Image Skeleton */}
                      <Skeleton className="w-20 h-20 rounded-lg bg-gray-800" />

                      {/* Game Info */}
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-6 w-48 bg-gray-800" />
                        <div className="flex gap-2">
                          <Skeleton className="h-4 w-16 bg-gray-700" />
                          <Skeleton className="h-4 w-20 bg-gray-700" />
                        </div>
                        <div className="flex gap-2">
                          <Skeleton className="w-6 h-6 bg-gray-700" />
                          <Skeleton className="w-6 h-6 bg-gray-700" />
                          <Skeleton className="w-6 h-6 bg-gray-700" />
                          <Skeleton className="w-6 h-6 bg-gray-700" />
                        </div>
                      </div>

                      {/* Price and Actions */}
                      <div className="flex items-center gap-4">
                        <Skeleton className="h-8 w-20 bg-gray-800" />
                        <div className="flex gap-2">
                          <Skeleton className="w-8 h-8 bg-gray-700" />
                          <Skeleton className="w-8 h-8 bg-gray-700" />
                          <Skeleton className="w-8 h-8 bg-gray-700" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

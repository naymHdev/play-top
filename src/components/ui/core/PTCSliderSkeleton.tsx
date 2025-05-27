import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PTCSliderSkeleton() {
  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title Skeleton */}
        <Skeleton className="h-12 w-80 mb-8 bg-gray-800" />

        {/* Games Carousel Container */}
        <div className="relative">
          {/* Left Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white border border-gray-700"
            disabled
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Games Grid */}
          <div className="flex gap-6 overflow-hidden px-12">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex-shrink-0 w-72">
                {/* Game Card Container with Colored Border Skeleton */}
                <div className="relative">
                  {/* Colored Border Skeleton */}
                  <Skeleton className="h-48 w-full rounded-lg bg-gray-700 mb-4" />

                  {/* Game Image Skeleton */}
                  <div className="absolute inset-2">
                    <Skeleton className="h-full w-full rounded bg-gray-600" />
                  </div>
                </div>

                {/* Game Title Skeleton */}
                <Skeleton className="h-6 w-24 mb-2 bg-gray-700" />

                {/* Price Skeleton */}
                <Skeleton className="h-6 w-12 bg-gray-700" />
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white border border-gray-700"
            disabled
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}

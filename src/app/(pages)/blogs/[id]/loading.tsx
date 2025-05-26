import PTContainer from "@/components/ui/PTContainer";
import { Skeleton } from "@/components/ui/skeleton";

export default function Component() {
  return (
    <>
      <PTContainer>
        <div className="min-h-screen bg-black text-white p-6">
          <div className=" w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Main Title */}
                <Skeleton className="h-12 w-3/4 bg-gray-800" />

                {/* Author Section */}
                <div className="flex items-center space-x-3">
                  <Skeleton className="h-12 w-12 rounded-full bg-gray-800" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24 bg-gray-800" />
                    <Skeleton className="h-3 w-20 bg-gray-800" />
                  </div>
                </div>

                {/* Subtitle */}
                <Skeleton className="h-6 w-2/3 bg-gray-800" />

                {/* Hero Image */}
                <Skeleton className="h-80 w-full rounded-lg bg-gray-800" />

                {/* Description */}
                <Skeleton className="h-4 w-4/5 bg-gray-800" />
              </div>

              {/* Newsletter Sidebar */}
              <div className="lg:col-span-1">
                <div className=" p-6 space-y-4">
                  {/* Newsletter Icon and Header */}
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-5 w-5 bg-gray-700" />
                    <Skeleton className="h-4 w-32 bg-gray-700" />
                  </div>

                  {/* Main Newsletter Heading */}
                  <div className="space-y-2">
                    <Skeleton className="h-8 w-full bg-gray-700" />
                    <Skeleton className="h-8 w-20 bg-gray-700" />
                  </div>

                  {/* Description */}
                  <Skeleton className="h-4 w-3/4 bg-gray-700" />

                  {/* Email Input */}
                  <Skeleton className="h-12 w-full rounded-md bg-gray-700" />

                  {/* Subscribe Button */}
                  <Skeleton className="h-12 w-full rounded-full bg-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PTContainer>
    </>
  );
}

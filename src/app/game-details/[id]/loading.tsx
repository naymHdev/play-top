import { Skeleton } from "@/components/ui/skeleton"

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
        <Skeleton className="h-60 w-full bg-gray-800 mb-10" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Game Images */}
          <div className="space-y-4">
            {/* Main Game Image */}
            <Skeleton className="w-full h-96 rounded-lg bg-gray-800" />

            {/* Thumbnail Images */}
            <div className="flex space-x-3">
              <Skeleton className="w-20 h-20 rounded-md bg-gray-800" />
              <Skeleton className="w-20 h-20 rounded-md bg-gray-800" />
              <Skeleton className="w-20 h-20 rounded-md bg-gray-800" />
            </div>

            {/* Description Section */}
            <div className="space-y-4 mt-8">
              <Skeleton className="h-6 w-32 bg-gray-800" />
              <Skeleton className="h-4 w-full bg-gray-800" />

              {/* Comment Section */}
              <div className="space-y-3 mt-6">
                <Skeleton className="h-24 w-full rounded-md bg-gray-800" />
                <div className="flex justify-end">
                  <Skeleton className="h-10 w-20 rounded-md bg-gray-800" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Game Info */}
          <div className="space-y-6">
            {/* Posted By Section */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-24 bg-gray-700" />
              <Skeleton className="h-5 w-40 bg-gray-700" />
            </div>

            {/* Price Section */}
            <div className="space-y-3">
              <Skeleton className="h-4 w-12 bg-gray-700" />
              <Skeleton className="h-8 w-16 bg-green-800" />
              <Skeleton className="h-12 w-full rounded-full bg-green-700" />
            </div>

            {/* Rating Section */}
            <div className="bg-gray-900 rounded-lg p-4">
              <Skeleton className="h-8 w-20 bg-gray-700 mx-auto" />
            </div>

            {/* Categories Section */}
            <div className="bg-gray-900 rounded-lg p-4 space-y-3">
              <Skeleton className="h-4 w-24 bg-gray-700" />
              <div className="flex space-x-2">
                <Skeleton className="h-6 w-16 rounded-full bg-gray-700" />
                <Skeleton className="h-6 w-20 rounded-full bg-gray-700" />
              </div>

              {/* Platform Section */}
              <div className="space-y-3 mt-4">
                <Skeleton className="h-4 w-20 bg-gray-700" />
                <div className="flex space-x-3">
                  <Skeleton className="h-8 w-8 bg-gray-700" />
                  <Skeleton className="h-8 w-8 bg-gray-700" />
                  <Skeleton className="h-8 w-8 bg-gray-700" />
                  <Skeleton className="h-8 w-8 bg-gray-700" />
                </div>
              </div>

              {/* Links Section */}
              <div className="space-y-3 mt-4">
                <Skeleton className="h-4 w-12 bg-gray-700" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-6 w-6 bg-gray-700" />
                    <Skeleton className="h-4 w-16 bg-gray-700" />
                  </div>
                  <Skeleton className="h-4 w-4 bg-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

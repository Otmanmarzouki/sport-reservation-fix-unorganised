import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse w-full flex flex-col ">
      <div className="h-6 bg-gray-300 rounded w-1/3"></div>

      <div className="space-y-2">
        <div className="h-6 bg-gray-300 rounded w-2/3"></div>
        <div className="h-6 bg-gray-300 rounded w-2/4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      </div>

      <div className="space-y-2 pt-4">
        <div className="h-6 bg-gray-300 rounded w-2/4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
      </div>

      <div className="flex space-x-4 pt-8">
        <div className="h-8 bg-gray-300 rounded w-24"></div>
        <div className="h-8 bg-gray-300 rounded w-32"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;

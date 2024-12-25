import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-orange-400"></div>
        <p className="text-gray-600 mt-4">Chargement des informations...</p>
      </div>
    </div>
  );
};

export default SkeletonLoader;

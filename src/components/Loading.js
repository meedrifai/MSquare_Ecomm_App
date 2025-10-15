// ================================
// 1. src/components/Loading.js
// ================================
import React from "react";

export default function Loading({ size = "md", text = "" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`${sizeClasses[size]} border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin`}
      ></div>
      {text && <p className="text-gray-600 animate-pulse">{text}</p>}
    </div>
  );
}

import { memo } from "react";

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center gap-1">
      <div
        className="w-2 h-2 bg-white rounded-full animate-bounce"
        style={{
          animationDelay: "0ms",
          animationDuration: "600ms",
        }}
      />
      <div
        className="w-2 h-2 bg-white rounded-full animate-bounce"
        style={{
          animationDelay: "150ms",
          animationDuration: "600ms",
        }}
      />
      <div
        className="w-2 h-2 bg-white rounded-full animate-bounce"
        style={{
          animationDelay: "300ms",
          animationDuration: "600ms",
        }}
      />
    </div>
  );
}

export default memo(LoadingSpinner);

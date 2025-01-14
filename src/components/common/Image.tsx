import { useState, memo } from "react";
import { imageLoader } from "@/utils/image";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const Image = memo(function Image({
  src,
  alt,
  className = "",
  width,
  height,
  ...props
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  if (error) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={imageLoader(src)}
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-black/10 animate-pulse" />
      )}
    </div>
  );
});

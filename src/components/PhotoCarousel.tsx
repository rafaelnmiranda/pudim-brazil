"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

type PhotoCarouselProps = {
  images: Array<{
    src: string;
    alt: string;
  }>;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

export function PhotoCarousel({
  images,
  className,
  autoPlay = true,
  autoPlayInterval = 8000,
}: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className={cn("relative w-full flex flex-col items-center", className)}>
      <div className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-background shadow-2xl ring-1 ring-black/5">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Elegant overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 backdrop-blur-md p-3 text-foreground shadow-xl ring-1 ring-black/10 transition-all hover:bg-white hover:scale-110 active:scale-95"
            aria-label="Foto anterior"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 backdrop-blur-md p-3 text-foreground shadow-xl ring-1 ring-black/10 transition-all hover:bg-white hover:scale-110 active:scale-95"
            aria-label="Próxima foto"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="mt-6 flex justify-center gap-2.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "w-10 bg-gold shadow-md shadow-gold/30"
                  : "w-2.5 bg-border/60 hover:bg-gold/40 hover:w-3"
              )}
              aria-label={`Ir para foto ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

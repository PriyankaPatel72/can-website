'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

interface Photo {
  src: string;
  alt: string;
}

interface PhotoCarouselProps {
  photos: Photo[];
  className?: string;
}

export default function PhotoCarousel({ photos, className = '' }: PhotoCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const lastScrollTimeRef = useRef(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: photos.length > 2,
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setIsAnimating(true);

    window.setTimeout(() => {
      setIsAnimating(false);
    }, 220);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const goPrev = () => {
    emblaApi?.scrollPrev();
  };

  const goNext = () => {
    emblaApi?.scrollNext();
  };

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (event) => {
    const now = Date.now();
    if (now - lastScrollTimeRef.current < 250) {
      return;
    }

    const dominantDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (Math.abs(dominantDelta) < 10) {
      return;
    }

    event.preventDefault();
    lastScrollTimeRef.current = now;

    if (dominantDelta > 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  if (photos.length === 0) {
    return null;
  }

  return (
    <div
      className={`relative py-10 ${className}`}
      aria-label="Community photo carousel"
    >
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white/95 text-gray-700 shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:bg-white hover:shadow-md"
        aria-label="Previous photos"
      >
        <span aria-hidden="true">&#8592;</span>
      </button>

      <button
        type="button"
        onClick={goNext}
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white/95 text-gray-700 shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:bg-white hover:shadow-md"
        aria-label="Next photos"
      >
        <span aria-hidden="true">&#8594;</span>
      </button>

      <div className="overflow-hidden px-12 md:px-16 lg:px-20" onWheel={handleWheel}>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {photos.map((photo, index) => {
              const isSelected = index === selectedIndex;

              return (
                <div key={`${photo.src}-${index}`} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                  <div
                    className={`group relative aspect-[5/4] overflow-hidden bg-gray-100 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl ${
                      isSelected
                        ? 'rounded-[2rem] scale-[1.16] shadow-2xl z-10 opacity-100'
                        : 'rounded-2xl scale-[0.9] shadow-md opacity-85'
                    }`}
                    style={{ clipPath: isSelected ? 'inset(0 round 2rem)' : 'inset(0 round 1rem)' }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-contain rounded-[inherit] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

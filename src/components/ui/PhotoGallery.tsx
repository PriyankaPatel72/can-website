'use client';
import { useState } from 'react';
import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  columns?: 2 | 3 | 4;
  className?: string;
  showTitles?: boolean;
}

export default function PhotoGallery({ 
  photos, 
  columns = 3, 
  className = '',
  showTitles = false 
}: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <>
      <div className={`grid ${gridClasses[columns]} gap-6 ${className}`}>
        {photos.map((photo, index) => (
          <div 
            key={index}
            className="group cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            {showTitles && photo.title && (
              <div className="mt-3">
                <h3 className="text-sm font-medium text-gray-900">{photo.title}</h3>
                {photo.description && (
                  <p className="text-sm text-gray-600 mt-1">{photo.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal for enlarged photo view */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
              aria-label="Close photo"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-auto max-h-[80vh] overflow-hidden rounded-lg">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                width={800}
                height={600}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            {selectedPhoto.title && (
              <div className="mt-4 text-center">
                <h3 className="text-white text-lg font-medium">{selectedPhoto.title}</h3>
                {selectedPhoto.description && (
                  <p className="text-gray-300 mt-2">{selectedPhoto.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
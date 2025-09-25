'use client';

import { useState, useEffect } from 'react';

type ContrastMode = 'default' | 'white-black' | 'black-yellow' | 'green-black' | 'yellow-blue' | 'grayscale';

export default function AccessibilityControls() {
  const [contrastMode, setContrastMode] = useState<ContrastMode>('default');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved preference from localStorage
    const savedMode = localStorage.getItem('contrast-mode') as ContrastMode;
    if (savedMode) {
      setContrastMode(savedMode);
      applyContrastMode(savedMode);
    }
  }, []);

  const applyContrastMode = (mode: ContrastMode) => {
    const body = document.body;
    
    // Remove all contrast classes
    body.classList.remove('white-black', 'black-yellow', 'green-black', 'yellow-blue', 'grayscale');
    
    // Apply new contrast class
    if (mode !== 'default') {
      body.classList.add(mode);
    }
    
    // Save preference
    localStorage.setItem('contrast-mode', mode);
  };

  const handleContrastChange = (mode: ContrastMode) => {
    setContrastMode(mode);
    applyContrastMode(mode);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-[9999]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 border-2 border-white transform hover:scale-110 transition-all duration-200"
        aria-label="Accessibility Color Schemes"
        aria-expanded={isOpen}
        title="Click to change color scheme"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h2a2 2 0 012 2v12a4 4 0 01-4 4H7m2-16v16" />
        </svg>
        <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-black text-xs px-1 rounded-full font-bold">
          A11Y
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-20 right-0 bg-white rounded-lg shadow-2xl border-2 border-gray-300 p-6 min-w-80 max-w-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">🎨</span>
            Color Schemes
          </h3>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700">Color Schemes</h4>
            
            <button
              onClick={() => handleContrastChange('default')}
              className={`w-full text-left p-3 rounded border ${
                contrastMode === 'default' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="font-medium">Default</div>
              <div className="text-sm text-gray-600">Standard color scheme</div>
            </button>

            <button
              onClick={() => handleContrastChange('white-black')}
              className={`w-full text-left p-3 rounded border ${
                contrastMode === 'white-black' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="font-medium">White & Black</div>
              <div className="text-sm text-gray-600">Black text on white background</div>
            </button>

            <button
              onClick={() => handleContrastChange('black-yellow')}
              className={`w-full text-left p-3 rounded border ${
                contrastMode === 'black-yellow' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="font-medium">Black & Yellow</div>
              <div className="text-sm text-gray-600">Yellow text on black background</div>
            </button>

            <button
              onClick={() => handleContrastChange('green-black')}
              className={`w-full text-left p-3 rounded border ${
                contrastMode === 'green-black' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="font-medium">Green & Black</div>
              <div className="text-sm text-gray-600">Green text on black background</div>
            </button>

            <button
              onClick={() => handleContrastChange('yellow-blue')}
              className={`w-full text-left p-3 rounded border ${
                contrastMode === 'yellow-blue' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="font-medium">Yellow & Blue</div>
              <div className="text-sm text-gray-600">Yellow text on blue background</div>
            </button>

            <button
              onClick={() => handleContrastChange('grayscale')}
              className={`w-full text-left p-3 rounded border ${
                contrastMode === 'grayscale' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="font-medium">Grayscale</div>
              <div className="text-sm text-gray-600">Monochrome display for better focus</div>
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Color scheme options improve readability and reduce eye strain for users with visual impairments, light sensitivity, or visual processing differences.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
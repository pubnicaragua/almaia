'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';

interface Video {
  id: string;
  title: string;
}

export function VideoCarousel() {
  const videos: Video[] = [
    { id: 'vo6OhdCxnCM', title: 'AlmaIA Video 1' },
    { id: 'vo6OhdCxnCM', title: 'AlmaIA Video 2' },
    { id: 'vo6OhdCxnCM', title: 'AlmaIA Video 3' },
  ];

  const categories = ['Almie te guía','Lo nuevo de Almie','Almie te apoya'];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  // Effect for cycling through categories every 4 seconds
  useEffect(() => {
    // Only auto-cycle if user hasn't manually selected a category
    if (isUserInteracted) return;

    const interval = setInterval(() => {
      setActiveCategory((current) => {
        const currentIndex = categories.indexOf(current);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isUserInteracted, categories]);

  const goToPrevious = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleTooltip = (id: string) => {
    if (activeTooltip === id) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(id);
      // Auto-hide tooltip after 3 seconds
      setTimeout(() => {
        setActiveTooltip(null);
      }, 3000);
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setIsUserInteracted(true);

    // Reset auto-cycling after 30 seconds of inactivity
    setTimeout(() => {
      setIsUserInteracted(false);
    }, 30000);
  };

  return (
    <section className="bg-[#a9d4fb] py-16 relative">
      <div className="container mx-auto px-4">
        {/* Contact information header */}
        <div className="max-w-4xl mx-auto mb-10 border-dotted border-b border-t border-l border-r border-blue-300 rounded-lg overflow-hidden">
          <div className="flex flex-row text-white">
            <div className="flex-1 flex items-center justify-center py-3 px-2 border-r border-dotted border-blue-300 relative">
              <button
                onClick={() => toggleTooltip('email')}
                className="flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 mr-1 text-white" />
                <span className="text-sm hidden sm:inline">
                  Almora@almaia.cl
                </span>
              </button>
              {activeTooltip === 'email' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-blue-600 px-3 py-1 rounded-lg shadow-lg z-20 whitespace-nowrap">
                  Almora@almaia.cl
                </div>
              )}
            </div>
            <div className="flex-1 flex items-center justify-center py-3 px-2 border-r border-dotted border-blue-300 relative">
              <button
                onClick={() => toggleTooltip('location')}
                className="flex items-center justify-center"
                aria-label="Ubicación"
              >
                <MapPin className="w-5 h-5 mr-1 text-white" />
                <span className="text-sm hidden sm:inline">
                  Santiago de Chile
                </span>
              </button>
              {activeTooltip === 'location' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-blue-600 px-3 py-1 rounded-lg shadow-lg z-20 whitespace-nowrap">
                  Santiago de Chile
                </div>
              )}
            </div>
            <div className="flex-1 flex items-center justify-center py-3 px-2 relative">
              <button
                onClick={() => toggleTooltip('phone')}
                className="flex items-center justify-center"
                aria-label="Teléfono"
              >
                <Phone className="w-5 h-5 mr-1 text-white" />
                <span className="text-sm hidden sm:inline">
                  +56 942 305 343
                </span>
              </button>
              {activeTooltip === 'phone' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-blue-600 px-3 py-1 rounded-lg shadow-lg z-20 whitespace-nowrap">
                  +56 942 305 343
                </div>
              )}
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-6 text-center text-white">
          Nuestros Videos
        </h2>

        {/* Video category buttons */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'bg-blue-600/30 text-white hover:bg-blue-600/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Video container with navigation arrows */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl md:w-3/4 mx-auto">
            <iframe
              src={`https://www.youtube.com/embed/${videos[currentVideoIndex].id}?autoplay=0&rel=0`}
              title={videos[currentVideoIndex].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />

            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all z-10"
              aria-label="Video anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all z-10"
              aria-label="Video siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Social media links */}
          <div className="flex justify-center mt-8 space-x-24">
            <a
              href="https://twitter.com/almaia_cl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 transition-all"
              aria-label="X (Twitter)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/almaia.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 transition-all"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/almaia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 transition-all"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>

          {/* Video indicator dots */}
          <div className="flex justify-center mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${index === currentVideoIndex ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Ver video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

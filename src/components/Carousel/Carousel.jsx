import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

const Carousel = ({ items, renderItem, itemsPerView = 3, autoScroll = false, scrollDelay = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(autoScroll);
  const containerRef = useRef(null);
  const autoScrollRef = useRef(null);

  const itemCount = items.length;
  const maxIndex = Math.max(0, itemCount - itemsPerView);

  // Auto scroll effect
  useEffect(() => {
    if (!isAutoScroll || itemCount <= itemsPerView) return;

    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, scrollDelay);

    return () => clearInterval(autoScrollRef.current);
  }, [isAutoScroll, itemCount, itemsPerView, maxIndex, scrollDelay]);

  const handlePrev = () => {
    setIsAutoScroll(false);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAutoScroll(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setIsAutoScroll(false);
    setCurrentIndex(index);
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView);
  const totalDots = Math.ceil(itemCount / itemsPerView);

  return (
    <div className="carousel-wrapper" ref={containerRef}>
      {/* Carousel Container */}
      <div className="carousel-container">
        <div className="carousel-track">
          {visibleItems.map((item, idx) => (
            <div key={`${currentIndex}-${idx}`} className="carousel-item">
              {renderItem(item)}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {itemCount > itemsPerView && (
          <>
            <button
              onClick={handlePrev}
              className="carousel-nav carousel-nav-prev"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="carousel-nav carousel-nav-next"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {itemCount > itemsPerView && (
        <div className="carousel-dots">
          {Array.from({ length: totalDots }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx * itemsPerView)}
              className={`carousel-dot ${
                Math.floor(currentIndex / itemsPerView) === idx ? 'active' : ''
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Scroll Hint */}
      {itemCount > itemsPerView && (
        <div className="carousel-hint">
          <span>← Swipe or use arrows →</span>
        </div>
      )}
    </div>
  );
};

export default Carousel;

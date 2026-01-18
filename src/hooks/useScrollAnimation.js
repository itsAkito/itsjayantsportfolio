import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isElementVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isElementVisible);

        // Calculate scroll progress from top to bottom of element
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        let progress = (windowHeight - elementTop) / (windowHeight + elementHeight);
        progress = Math.max(0, Math.min(1, progress));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, isVisible, scrollProgress };
};

export default useScrollAnimation;

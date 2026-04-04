import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronUp } from 'lucide-react';

interface Page {
  id: string;
  title: string;
  color: string;
  icon: string;
}

const MobileAppSwitcher = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const navigateToPage = (sectionId: string) => {
    setIsMinimized(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (isMinimized) return;
    
    const touch = e.touches[0];
    const screenHeight = window.innerHeight;
    const startY = touch.clientY;

    // Trigger from bottom half of screen
    if (startY > screenHeight * 0.5) {
      setTouchStart(startY);
    }
  }, [isMinimized]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (touchStart === null) return;

    const touch = e.changedTouches[0];
    const endY = touch.clientY;
    const swipeDistance = touchStart - endY;

    // Swipe up to minimize
    if (swipeDistance > 100) {
      setIsMinimized(true);
    }

    setTouchStart(null);
  }, [touchStart]);

  const handleSwipeDown = useCallback((e: TouchEvent) => {
    if (!isMinimized) return;

    const touch = e.touches[0];
    const startY = touch.clientY;

    if (startY < window.innerHeight * 0.5) {
      setTouchStart(startY);
    }
  }, [isMinimized]);

  const handleSwipeDownEnd = useCallback((e: TouchEvent) => {
    if (!isMinimized || touchStart === null) return;

    const touch = e.changedTouches[0];
    const endY = touch.clientY;
    const swipeDistance = endY - touchStart;

    // Swipe down to expand
    if (swipeDistance > 100) {
      setIsMinimized(false);
    }

    setTouchStart(null);
  }, [isMinimized, touchStart]);

  useEffect(() => {
    const element = document.body;
    
    const touchStartHandler = (e: TouchEvent) => {
      if (isMinimized) {
        handleSwipeDown(e);
      } else {
        handleTouchStart(e);
      }
    };

    const touchEndHandler = (e: TouchEvent) => {
      if (isMinimized) {
        handleSwipeDownEnd(e);
      } else {
        handleTouchEnd(e);
      }
    };

    element.addEventListener('touchstart', touchStartHandler, false);
    element.addEventListener('touchend', touchEndHandler, false);

    return () => {
      element.removeEventListener('touchstart', touchStartHandler, false);
      element.removeEventListener('touchend', touchEndHandler, false);
    };
  }, [isMinimized, touchStart, handleSwipeDown, handleSwipeDownEnd, handleTouchEnd, handleTouchStart]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMinimized(false);
    }
  };

  return (
    <>
      {/* Minimized Panel - Bottom Card Navigation */}
      {isMinimized && (
        <>
          {/* Semi-transparent backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-all duration-300"
            onClick={handleBackdropClick}
          />

          {/* Minimized panel with page cards */}
          <div
            ref={containerRef}
            className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-gradient-to-t from-black/80 via-black/60 to-transparent pt-8 pb-6 px-4 rounded-t-3xl"
          >
            {/* Drag handle indicator */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/30 rounded-full mb-2" />
          </div>
        </>
      )}
    </>
  );
};

export default MobileAppSwitcher;

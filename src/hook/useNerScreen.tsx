import { useState, useEffect, useRef, RefObject } from "react";

interface UseNearScreenOptions {
  distance?: string;
  once?: boolean;
}

interface UseNearScreenResult {
  isNearScreen: boolean;
  elementRef: RefObject<HTMLElement>;
}

export function useNearScreen({
  distance = "100px",
  once = true,
}: UseNearScreenOptions = {}): UseNearScreenResult {
  const [isNearScreen, setIsNearScreen] = useState<boolean>(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Dynamic import of intersection-observer polyfill for older browsers
    const loadIntersectionObserver = async () => {
      if (typeof IntersectionObserver === "undefined") {
        await import("intersection-observer");
      }

      const observerOptions: IntersectionObserverInit = {
        rootMargin: distance,
        // Optionally add threshold if needed
        // threshold: [0.5, 1]
      };

      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setIsNearScreen(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsNearScreen(false);
        }
      }, observerOptions);

      observer.observe(element);

      return () => {
        observer.unobserve(element);
        observer.disconnect();
      };
    };

    const cleanup = loadIntersectionObserver();

    return () => {
      void cleanup.then((cleanupFn) => cleanupFn?.());
    };
  }, [distance, once]);

  return { isNearScreen, elementRef };
}

export default useNearScreen;

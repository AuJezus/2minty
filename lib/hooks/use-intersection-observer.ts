import { useEffect, useState } from "react";

export function useIntersectionObserver(
  elementId: string,
  options?: IntersectionObserverInit,
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px",
        ...options,
      },
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [elementId, options]);

  return isIntersecting;
}

import { useEffect, useRef } from "react";

export const MagicCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      trailRef.current.forEach((el, idx) => {
        const delay = idx * 40;
        setTimeout(() => {
          if (el) {
            el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
          }
        }, delay);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-[9999] w-4 h-4 rounded-full bg-blue-700 pointer-events-none transition-transform duration-75 mix-blend-difference"
      />
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            trailRef.current[i] = el!;
          }}
          className="fixed z-[9998] w-3 h-3 rounded-full bg-blue-500 opacity-30 blur-sm pointer-events-none transition-transform duration-100"
        />
      ))}

    </>
  );
};

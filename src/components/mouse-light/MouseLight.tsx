"use client";

import { useEffect } from "react";

export default function MouseLight() {
  useEffect(() => {
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
        document.documentElement.style.setProperty("--mouse-opacity", "1");
      });
    };

    const onMouseLeave = () => {
      document.documentElement.style.setProperty("--mouse-opacity", "0");
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Sin div en el DOM — cero interferencia con eventos
  return null;
}

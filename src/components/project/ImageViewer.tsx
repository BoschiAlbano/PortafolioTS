"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface ImageViewerProps {
  images: string[];
  index: number;
  onClose: () => void;
  onIndexChange: (newIndex: number) => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  index,
  onClose,
  onIndexChange,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Bloquear scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onIndexChange((index + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        onIndexChange((index - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, images.length, onClose, onIndexChange]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIndexChange((index + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIndexChange((index - 1 + images.length) % images.length);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999999] flex flex-col justify-center items-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white hover:text-[#c2cf09] transition-colors p-2"
          onClick={onClose}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="30px"
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute top-5 left-5 text-white font-bold text-xl bg-black/50 px-4 py-2 rounded-full">
          {index + 1} / {images.length}
        </div>

        {/* Previous Button */}
        <button
          className="absolute left-5 text-white hover:text-[#c2cf09] transition-colors p-4"
          onClick={handlePrev}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="40px"
            width="40px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </svg>
        </button>

        {/* Image Display */}
        <motion.img
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          src={images[index]}
          alt={`Imagen ${index + 1}`}
          className="max-w-[90vw] max-h-[90vh] object-contain select-none pointer-events-auto"
          onClick={(e) => e.stopPropagation()} // Prevent close when clicking on image
        />

        {/* Next Button */}
        <button
          className="absolute right-5 text-white hover:text-[#c2cf09] transition-colors p-4"
          onClick={handleNext}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="40px"
            width="40px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default ImageViewer;

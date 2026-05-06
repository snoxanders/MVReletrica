"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdClose,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

interface LightboxProps {
  open: boolean;
  images: string[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  title?: string;
  description?: string;
}

export default function Lightbox({
  open,
  images,
  index,
  onClose,
  onIndexChange,
  title,
  description,
}: LightboxProps) {
  const total = images.length;
  const hasMultiple = total > 1;

  const goPrev = useCallback(() => {
    if (!hasMultiple) return;
    onIndexChange((index - 1 + total) % total);
  }, [hasMultiple, index, total, onIndexChange]);

  const goNext = useCallback(() => {
    if (!hasMultiple) return;
    onIndexChange((index + 1) % total);
  }, [hasMultiple, index, total, onIndexChange]);

  // Keyboard: ESC to close, arrows to navigate
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, goPrev, goNext]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && images[index] && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title || "Imagem ampliada"}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm cursor-pointer"
            aria-label="Fechar"
          >
            <MdClose size={26} />
          </button>

          {/* Counter */}
          {hasMultiple && (
            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
              {index + 1} / {total}
            </div>
          )}

          {/* Prev button */}
          {hasMultiple && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 md:left-6 z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm cursor-pointer"
              aria-label="Imagem anterior"
            >
              <MdChevronLeft size={32} />
            </button>
          )}

          {/* Next button */}
          {hasMultiple && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 md:right-6 z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm cursor-pointer"
              aria-label="Imagem seguinte"
            >
              <MdChevronRight size={32} />
            </button>
          )}

          {/* Image container */}
          <motion.div
            key={images[index]}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4 md:mx-16 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={images[index]}
                alt={title || `Imagem ${index + 1}`}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Caption */}
          {(title || description) && (
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10 max-w-2xl text-center px-4">
              {title && (
                <h3 className="text-white font-semibold text-base md:text-lg drop-shadow">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-white/80 text-xs md:text-sm mt-1 drop-shadow">
                  {description}
                </p>
              )}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

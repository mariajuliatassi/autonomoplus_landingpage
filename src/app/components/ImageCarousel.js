"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Carrossel de imagens com autoplay, setas e indicadores (dots).
 *
 * images: [{ src: "/carousel/tela1.png", alt: "Descrição da tela 1" }, ...]
 * interval: tempo (ms) entre cada troca automática de slide
 */
export default function ImageCarousel({ images, interval = 2000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [paused, next, interval, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className="relative w-full max-w-3xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-slate-100/50 border border-slate-100 bg-slate-50 aspect-[16/10]">
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          {/* Seta esquerda */}
          <button
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-100 transition-colors"
          >
            ‹
          </button>

          {/* Seta direita */}
          <button
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-100 transition-colors"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para imagem ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-blue-600" : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
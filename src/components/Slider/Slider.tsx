"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Slider.module.css";
import type { StaticImageData } from "next/image";

interface Review {
  img1: StaticImageData;
  img2: StaticImageData;
  alt: string;
}

interface ReviewsSliderProps {
  reviews: Review[];
}

export default function ReviewsSlider({ reviews }: ReviewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
  }, [reviews.length]);

  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide]);

  const handlePointerDown = (e: React.PointerEvent) => {
    stopAutoSlide();
    startX.current = e.clientX;
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || startX.current === null) return;
    const delta = e.clientX - startX.current;
    dragDeltaX.current = delta;
    setOffset(delta);
  };

  const handlePointerUp = () => {
    if (!isDragging || startX.current === null) return;

    const containerWidth = sliderRef.current?.offsetWidth || 1;
    const draggedSlides = dragDeltaX.current / containerWidth;

    let nextIndex = currentIndex;
    if (draggedSlides > 0.2) {
      nextIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
    } else if (draggedSlides < -0.2) {
      nextIndex = (currentIndex + 1) % reviews.length;
    }

    setCurrentIndex(nextIndex);
    setOffset(0);
    setIsDragging(false);
    dragDeltaX.current = 0;
    startX.current = null;
    startAutoSlide();
  };

  const containerWidth = sliderRef.current?.offsetWidth || 1;
  const totalOffset = -currentIndex * 100 + (offset / containerWidth) * 100;

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderInner}
        ref={sliderRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{
          transform: `translateX(${totalOffset}%)`,
          transition: isDragging ? "none" : "transform 0.5s ease",
        }}
      >
        {reviews.map((review, idx) => (
          <div key={idx} className={styles.slide}>
            <Image
              src={review.img1}
              alt={`Фото ${review.alt}`}
              width={380}
              height={250}
              loading="lazy"
              draggable={false}
              className={styles.image}
            />
            <Image
              src={review.img2}
              alt={review.alt}
              width={380}
              height={310}
              loading="lazy"
              draggable={false}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {reviews.map((_, idx) => (
          <span
            key={idx}
            className={idx === currentIndex ? styles.dotActive : styles.dot}
            onClick={() => {
              stopAutoSlide();
              setCurrentIndex(idx);
              startAutoSlide();
            }}
          />
        ))}
      </div>
    </div>
  );
}

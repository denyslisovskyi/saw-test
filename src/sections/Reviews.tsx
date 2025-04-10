"use client";

import Image from "next/image";
import Container from "@/components/Container";

export default function Reviews() {
  return (
    <Container>
      <section className="reviews_section px-4 pb-12 pt-6 text-center">
        <h2 className="title text-xl md:text-2xl font-bold mb-4">
          Акумуляторна пила — відгуки покупців
        </h2>

        <div className="reviews_stats_block mb-4">
          <p className="text-lg font-semibold">
            <b className="text-green-600">98%</b> покупців рекомендують цей
            товар
          </p>
          <div className="line h-1 w-24 bg-green-600 mx-auto mt-2 rounded" />
        </div>

        <div className="slider-container relative overflow-hidden">
          <div className="simple-slider flex transition-transform duration-300 ease-in-out">
            {[
              {
                img1: "rev1.webp",
                img2: "1_vidguk.webp",
                alt: "Андрій Тарасенко",
              },
              {
                img1: "rev2.webp",
                img2: "2_vidguk.webp",
                alt: "Володимир Тарченко",
              },
              {
                img1: "rev3.webp",
                img2: "3_vidguk.webp",
                alt: "Відгук покупця",
              },
            ].map((review, idx) => (
              <div key={idx} className="review_item min-w-full p-4">
                <div className="text_block">
                  <Image
                    src={`/img/${review.img1}`}
                    alt={`Фото ${review.alt}`}
                    width={380}
                    height={250}
                    loading="lazy"
                    className="mx-auto mb-4 rounded shadow"
                  />
                  <Image
                    src={`/img/${review.img2}`}
                    alt={review.alt}
                    width={380}
                    height={310}
                    loading="lazy"
                    className="mx-auto rounded shadow"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Slider arrows */}
          <button
            className="slider-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full px-2 py-1 shadow"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            className="slider-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full px-2 py-1 shadow"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </section>
    </Container>
  );
}

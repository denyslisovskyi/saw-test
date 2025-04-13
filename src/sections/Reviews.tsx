"use client";

import Image from "next/image";
import Container from "@/components/Container";

import ImageRev1 from "@/assets/images/rev1.webp";
import ImageRev2 from "@/assets/images/rev2.webp";
import ImageRev3 from "@/assets/images/rev3.webp";
import ImageFeedback1 from "@/assets/images/1_vidguk.webp";
import ImageFeedback2 from "@/assets/images/2_vidguk.webp";
import ImageFeedback3 from "@/assets/images/3_vidguk.webp";

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
                img1: ImageRev1,
                img2: ImageFeedback1,
                alt: "Андрій Тарасенко",
              },
              {
                img1: ImageRev2,
                img2: ImageFeedback2,
                alt: "Володимир Тарченко",
              },
              {
                img1: ImageRev3,
                img2: ImageFeedback3,
                alt: "Відгук покупця",
              },
            ].map((review, idx) => (
              <div key={idx} className="review_item min-w-full p-4">
                <div className="text_block">
                  <Image
                    src={review.img1}
                    alt={`Фото ${review.alt}`}
                    width={380}
                    height={250}
                    loading="lazy"
                    className="mx-auto mb-4 rounded shadow"
                  />
                  <Image
                    src={review.img2}
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

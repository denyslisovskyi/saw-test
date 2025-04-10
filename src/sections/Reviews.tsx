// src/sections/Reviews.tsx
"use client";

import Image from "next/image";

export default function Reviews() {
  return (
    <section className="reviews4_section px-4 py-10 text-center">
      <h2 className="title text-xl font-bold mb-4">
        Акумуляторна пила - відгуки покупців
      </h2>

      <div className="reviews_stats_block mb-6">
        <p className="text-lg font-semibold">
          <b>98%</b> покупців рекомендують цей товар
        </p>
        <div className="line h-1 bg-gray-200 mt-2 w-full max-w-xs mx-auto"></div>
      </div>

      <div className="slider-container relative overflow-hidden">
        <div className="simple-slider flex transition-transform ease-in-out duration-300">
          <div className="review_item min-w-full px-2">
            <div className="text_block">
              <Image
                src="/img/rev1.webp"
                alt="Відгук покупця - фото пили від Андрій Тарасенко"
                width={380}
                height={250}
                loading="lazy"
              />
              <Image
                src="/img/1_vidguk.webp"
                alt="Відгук покупця - Андрій Тарасенко"
                width={380}
                height={310}
                loading="lazy"
              />
            </div>
          </div>

          <div className="review_item min-w-full px-2">
            <div className="text_block">
              <Image
                src="/img/rev2.webp"
                alt="Відгук покупця - фото пили від Михайло Степчишин"
                width={380}
                height={250}
                loading="lazy"
              />
              <Image
                src="/img/2_vidguk.webp"
                alt="Відгук покупця - Володимир Тарченко"
                width={380}
                height={310}
                loading="lazy"
              />
            </div>
          </div>

          <div className="review_item min-w-full px-2">
            <div className="text_block">
              <Image
                src="/img/rev3.webp"
                alt="Відгук покупця - фото пили від Михайло Степчишин"
                width={380}
                height={250}
                loading="lazy"
              />
              <Image
                src="/img/3_vidguk.webp"
                alt="Відгук покупця - Володимир Тарченко"
                width={380}
                height={310}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Стрілки */}
        <button className="slider-prev absolute left-2 top-1/2 -translate-y-1/2 text-2xl">
          ←
        </button>
        <button className="slider-next absolute right-2 top-1/2 -translate-y-1/2 text-2xl">
          →
        </button>
      </div>
    </section>
  );
}

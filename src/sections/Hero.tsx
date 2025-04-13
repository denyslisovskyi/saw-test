"use client";

import Image from "next/image";
import Container from "@/components/Container";
import ImageTopOffer from "@/assets/images/top-offer.webp";
import ImageMain from "@/assets/images/main-1-2-2.webp";

export default function Hero() {
  return (
    <Container>
      <header
        className="offer_section px-4 pt-10 pb-8 text-center bg-white"
        role="banner"
      >
        <div className="title_block mb-6">
          <h1 className="main_title text-2xl md:text-3xl font-bold leading-tight">
            Акумуляторна пила ланцюгова
          </h1>
          <p className="subtitle text-lg text-gray-600">
            з оновленою моделлю безщіткового двигуна
          </p>
        </div>
        <div className="image_block relative inline-block mb-6">
          <Image
            src={ImageTopOffer}
            alt="Акумуляторна пила ланцюгова – головна пропозиція"
            sizes="(max-width: 768px) 100vw, 600px"
            priority
            placeholder="blur"
            className="rounded-lg shadow"
            blurDataURL={ImageTopOffer.blurDataURL}
          />
          <div className="discount_block absolute top-2 right-2 bg-accent text-white px-3 py-1 rounded-full text-sm">
            <span className="value font-bold">-35%</span>
            <span className="ml-1">знижка</span>
          </div>
        </div>

        <ul className="benefits_list grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm font-medium text-gray-700">
          <li className="benefit_item">Зручність та якість</li>
          <li className="benefit_item">Швидка доставка</li>
          <li className="benefit_item">Оплата при отриманні</li>
        </ul>

        <a
          href="#order_form"
          className="button inline-block bg-accent text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
        >
          Замовити зі знижкою
        </a>
        <Image
          className="image mx-auto mt-8 rounded-lg shadow"
          src={ImageMain}
          alt="Акумуляторна пила знизу"
          sizes="(max-width: 768px) 100vw, 600px"
          placeholder="blur"
          loading="lazy"
          blurDataURL={ImageMain.blurDataURL}
        />
      </header>
    </Container>
  );
}

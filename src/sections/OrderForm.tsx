"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import ImageTopOffer from "@/assets/images/top-offer.webp";
import ImageLoading from "@/assets/images/loading.gif";

export default function OrderForm() {
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <section className="order_form_section px-4 pt-8 pb-16 text-center">
        <h2 className="title text-xl md:text-2xl font-bold mb-6">
          Пила акумуляторна ланцюгова
        </h2>
        <p className="subtitle text-base text-gray-700 mb-4">
          з 2 АКБ, 2 шинами та 2 ланцюгами в комплекті
        </p>

        <div className="image_block mx-auto mb-6">
          <Image
            src={ImageTopOffer}
            alt="Електропила акумуляторна"
            width={480}
            height={495}
            loading="lazy"
            className="mx-auto rounded-lg shadow"
          />
          <div className="discount_block mt-2 text-accent font-bold text-xl">
            -35% знижка
          </div>
        </div>

        <div className="price_block flex flex-col md:flex-row justify-center gap-8 mb-6">
          <div className="price_item text-gray-500">
            <div className="text-sm">Звичайна ціна:</div>
            <div className="value line-through text-lg">4585 грн</div>
          </div>
          <div className="price_item">
            <div className="text-sm text-green-600">Ціна зі знижкою:</div>
            <div className="value text-2xl font-bold text-green-700">
              2980 грн
            </div>
          </div>
        </div>

        <form
          id="order_form"
          action="thnks_saw30_HR2.php"
          method="post"
          className="order_form mx-auto max-w-md space-y-4"
          onSubmit={() => setLoading(true)}
        >
          <input
            className="field w-full border px-4 py-2 rounded-md shadow-sm"
            type="text"
            name="name"
            placeholder="Ваше ім'я"
            required
          />
          <input
            className="field w-full border px-4 py-2 rounded-md shadow-sm"
            type="tel"
            name="phone"
            placeholder="Ваш телефон"
            required
          />
          <div
            id="phone-error"
            style={{ display: "none" }}
            className="text-red-600 text-sm"
          >
            Некоректний номер телефону
          </div>

          {loading && (
            <Image
              src={ImageLoading}
              alt="Завантаження..."
              className="mx-auto w-6 h-6 animate-spin"
              loading="lazy"
            />
          )}

          <button
            className="button w-full bg-accent text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-red-700 transition"
            type="submit"
          >
            Оформити замовлення
          </button>
        </form>
      </section>
    </Container>
  );
}

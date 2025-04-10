"use client";

import { useState } from "react";

export default function OrderForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Симуляція надсилання форми (заміни на свою логіку або інтеграцію)
    setTimeout(() => {
      setLoading(false);
      alert("Форма відправлена!");
    }, 2000);
  };

  return (
    <section className="offer_section px-4 py-10 text-center">
      <div className="title_block">
        <h1 className="main_title text-2xl font-bold mb-2">
          Пила акумуляторна ланцюгова
        </h1>
        <p className="subtitle">з 2 АКБ, 2 шинами та 2 ланцюгами в комплекті</p>
      </div>

      <div className="image_block relative mx-auto mt-6 w-full max-w-xs">
        <img
          src="/img/top-offer.webp"
          alt="Електропила акумуляторна"
          width={480}
          height={495}
          loading="lazy"
        />
        <div className="discount_block absolute right-2 top-2 bg-red-600 text-white p-2 rounded">
          <div className="value text-2xl font-bold">-35%</div>
          <div className="text text-sm">знижка</div>
        </div>
      </div>

      <div className="benefits_list mt-4 flex flex-wrap justify-center gap-2 text-sm font-medium">
        <div className="benefit_item bg-gray-100 p-2 rounded">
          Зручність та якість
        </div>
        <div className="benefit_item bg-gray-100 p-2 rounded">
          Швидка доставка
        </div>
        <div className="benefit_item bg-gray-100 p-2 rounded">
          Оплата при отриманні
        </div>
      </div>

      <div className="price_block mt-6 flex flex-col items-center gap-4">
        <div className="price_item old text-gray-500 text-sm">
          <div className="text">Звичайна ціна:</div>
          <div className="value line-through">4584 грн</div>
        </div>
        <div className="price_item new text-lg font-bold text-blue-600">
          <div className="text">Ціна зі знижкою:</div>
          <div className="value">2980 грн</div>
        </div>
      </div>

      <div className="timer mt-4 text-sm">
        <p>Пропозиція діє:</p>
        <div className="timer_container flex justify-center gap-4 mt-2">
          <div className="timer_block text-center">
            <div className="count hours font-bold text-lg">00</div>
            <div className="text">годин</div>
          </div>
          <div className="timer_block text-center">
            <div className="count minutes font-bold text-lg">00</div>
            <div className="text">хвилин</div>
          </div>
          <div className="timer_block text-center">
            <div className="count seconds font-bold text-lg">00</div>
            <div className="text">секунд</div>
          </div>
        </div>
      </div>

      <form
        id="order_form"
        className="order_form mt-6 space-y-4 max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          className="field w-full border p-2 rounded"
          type="text"
          name="name"
          placeholder="Ваше ім'я"
          required
        />
        <input
          className="field w-full border p-2 rounded"
          type="tel"
          name="phone"
          placeholder="Ваш телефон"
          required
        />
        <div
          id="phone-error"
          style={{ color: "red", fontSize: 14, display: "none", marginTop: 5 }}
        ></div>

        {loading && (
          <img
            src="/img/loading.gif"
            alt="Загрузка..."
            className="img-loading mx-auto"
            width={32}
            height={32}
          />
        )}

        <button
          className="button bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          type="submit"
          disabled={loading}
        >
          Оформити замовлення
        </button>
      </form>
    </section>
  );
}

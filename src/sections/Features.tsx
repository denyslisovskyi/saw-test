"use client";

import Image from "next/image";

export default function Features() {
  return (
    <section className="offer_section px-4 py-10 text-center">
      <h2 className="title text-xl font-bold mb-6">
        Характеристики та комплекація
      </h2>

      <Image
        className="image mx-auto mb-6"
        src="/img/harak.webp"
        alt="Характеристики та комплектація акумуляторної пили"
        width={480}
        height={360}
        loading="lazy"
      />

      <ul className="characteristics__list text-left max-w-md mx-auto text-sm leading-relaxed">
        <li>
          <b>Напруга:</b> 36В
        </li>
        <li>
          <b>Джерело живлення:</b> літієвий акумулятор (входить 2шт до
          комплекту)
        </li>
        <li>
          <b>Місткість акумуляторів (опціонально):</b> 4-6Ah
        </li>
        <li>
          <b>Кількість акумуляторів:</b> 2 шт
        </li>
        <li>
          <b>Тип напрямної пластини:</b> зірочка
        </li>
        <li>
          <b>Шина 40 см (16&quot;):</b> 1 шт
        </li>
        <li>
          <b>Шина 30 см (12&quot;):</b> 1 шт
        </li>
        <li>
          <b>Ланцюг на шину 40 см:</b> 1 шт
        </li>
        <li>
          <b>Ланцюг на шину 30 см:</b> 1 шт
        </li>
        <li>
          <b>Натяг ланцюгу:</b> швидкорегулюємий механізм
        </li>
        <li>
          <b>Швидкість ланцюга:</b> 5 м/c
        </li>
        <li>
          <b>Швидкість холостого ходу:</b> 5500 об/хв
        </li>
        <li>
          <b>Об&apos;єм масляного бака:</b> 30 мл
        </li>
        <li>
          <b>Подання масла:</b> автоматично
        </li>
        <li>
          <b>Час підзарядки:</b> 2 години
        </li>
        <li>
          <b>Гарантія:</b> 365 днів
        </li>
        <li>
          <b>Країна виробник:</b> Чехія
        </li>
        <li>
          <b>Вага:</b> 1,75 кг (без акумулятора)
        </li>
        <li>
          <b>Комплектація:</b> Пила з шиною 40 см, ланцюг на шину 40 см, шина 30
          см, ланцюг на шину 30 см, акумулятори, зарядний пристрій, ключ,
          ємність для масла, кейс, інструкція з експлуатації, гарантійний талон.
        </li>
      </ul>

      <a
        href="#order_form"
        className="button mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded"
      >
        Замовити зі знижкою
      </a>
    </section>
  );
}

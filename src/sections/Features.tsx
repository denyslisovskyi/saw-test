"use client";

import Image from "next/image";
import Container from "@/components/Container";

export default function Features() {
  return (
    <Container>
      <section className="features_section px-4 pb-10 pt-6 text-center bg-muted">
        <h2 className="title text-xl md:text-2xl font-bold mb-6">
          ІННОВАЦІЙНА АКУМУЛЯТОРНА ПИЛА
        </h2>

        <div className="benefits_list3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="benefit_item bg-white p-4 rounded-lg shadow">
            <Image
              className="img mx-auto mb-4"
              src="/img/sh1.webp"
              alt="Потужна акумуляторна пила"
              width={144}
              height={144}
              loading="lazy"
              priority
            />
            <div className="text_block">
              <h4 className="text-lg font-semibold mb-2">ПОТУЖНІСТЬ</h4>
              <p className="text-sm text-gray-700">
                Завдяки невеликим габаритам та високій потужності пила має
                невеликі розміри та маленьку вагу, що дозволяє легко
                користуватися навіть у важкодоступних місцях.
              </p>
            </div>
          </div>

          <div className="benefit_item bg-white p-4 rounded-lg shadow">
            <Image
              className="img mx-auto mb-4"
              src="/img/sh2.webp"
              alt="2 надійні акумулятори для пили"
              width={144}
              height={144}
              loading="lazy"
              priority
            />
            <div className="text_block">
              <h4 className="text-lg font-semibold mb-2">
                НАДІЙНІ АКУМУЛЯТОРИ У КОМПЛЕКТІ
              </h4>
              <p className="text-sm text-gray-700">
                У комплекті 2 Li-ion батареї 36В, 4Ач (можна обрати 6Ah) із
                тривалим терміном служби.
              </p>
            </div>
          </div>

          <div className="benefit_item bg-white p-4 rounded-lg shadow">
            <Image
              className="img mx-auto mb-4"
              src="/img/sh3.webp"
              alt="Швидке заряджання акумулятора"
              width={144}
              height={144}
              loading="lazy"
              priority
            />
            <div className="text_block">
              <h4 className="text-lg font-semibold mb-2">ШВИДКА ЗАРЯДКА</h4>
              <p className="text-sm text-gray-700">
                Ви можете брати компактну пилку з собою куди завгодно, а завдяки
                технології швидкого заряджання акумулятор зарядиться за 2
                години.
              </p>
            </div>
          </div>

          <div className="benefit_item bg-white p-4 rounded-lg shadow">
            <Image
              className="img mx-auto mb-4"
              src="/img/maslo.jpg"
              alt="Автоматична подача масла в пилу"
              width={144}
              height={144}
              loading="lazy"
              priority
            />
            <div className="text_block">
              <h4 className="text-lg font-semibold mb-2">
                АВТОМАТИЧНА ПОДАЧА МАСЛА
              </h4>
              <p className="text-sm text-gray-700">
                Пила оснащена вбудованим масляним баком, що забезпечує
                автоматичне змащування ланцюга. Це зменшує тертя, підвищує
                плавність роботи та продовжує термін служби пиляльного
                механізму.
              </p>
            </div>
          </div>
        </div>

        <Image
          className="image mx-auto mb-8 rounded-lg shadow"
          src="/img/zbirka.webp"
          alt="Швидка та легка підготовка акумуляторної пили"
          width={480}
          height={480}
          loading="lazy"
          priority
        />

        <a
          href="#order_form"
          className="button inline-block bg-accent text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
        >
          Замовити зі знижкою
        </a>
      </section>
    </Container>
  );
}

"use client";

import Image from "next/image";
import Container from "@/components/Container";
import ImageSh1 from "@/assets/images/sh1.webp";
import ImageSh2 from "@/assets/images/sh2.webp";
import ImageSh3 from "@/assets/images/sh3.webp";
import ImageMaslo from "@/assets/images/maslo.webp";
import ImageZbirka from "@/assets/images/zbirka.webp";

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
              src={ImageSh1}
              alt="Потужна акумуляторна пила"
              width={144}
              height={144}
              loading="lazy"
            />
            <div className="text_block">
              <h3 className="text-lg font-semibold mb-2">ПОТУЖНІСТЬ</h3>
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
              src={ImageSh2}
              alt="2 надійні акумулятори для пили"
              width={144}
              height={144}
              loading="lazy"
            />
            <div className="text_block">
              <h3 className="text-lg font-semibold mb-2">
                НАДІЙНІ АКУМУЛЯТОРИ У КОМПЛЕКТІ
              </h3>
              <p className="text-sm text-gray-700">
                У комплекті 2 Li-ion батареї 36В, 4Ач (можна обрати 6Ah) із
                тривалим терміном служби.
              </p>
            </div>
          </div>

          <div className="benefit_item bg-white p-4 rounded-lg shadow">
            <Image
              className="img mx-auto mb-4"
              src={ImageSh3}
              alt="Швидке заряджання акумулятора"
              width={144}
              height={144}
              loading="lazy"
            />
            <div className="text_block">
              <h3 className="text-lg font-semibold mb-2">ШВИДКА ЗАРЯДКА</h3>
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
              src={ImageMaslo}
              alt="Автоматична подача масла в пилу"
              width={144}
              height={144}
              loading="lazy"
            />
            <div className="text_block">
              <h3 className="text-lg font-semibold mb-2">
                АВТОМАТИЧНА ПОДАЧА МАСЛА
              </h3>
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
          src={ImageZbirka}
          alt="Швидка та легка підготовка акумуляторної пили"
          width={480}
          height={480}
          loading="lazy"
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

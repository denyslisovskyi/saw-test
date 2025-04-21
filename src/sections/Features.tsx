"use client";

import Image from "next/image";
import Container from "@/components/Container";
import styles from "./Features.module.css";

import ImageSh1 from "@/assets/images/sh1.webp";
import ImageSh2 from "@/assets/images/sh2.webp";
import ImageSh3 from "@/assets/images/sh3.webp";
import ImageMaslo from "@/assets/images/maslo.webp";
import ImageZbirka from "@/assets/images/zbirka.webp";

export default function Features() {
  return (
    <Container>
      <section className={styles.benefitsSection}>
        <h2 className={styles.title}>ІННОВАЦІЙНА АКУМУЛЯТОРНА ПИЛА</h2>

        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>
            <Image
              className={styles.img}
              src={ImageSh1}
              alt="Фото потужної акумуляторної пилки"
              width={150}
              height={150}
              loading="lazy"
              style={{
                aspectRatio: "1 / 1",
              }}
            />
            <div className={styles.textBlock}>
              <h3 className={styles.itemHeading}>ПОТУЖНІСТЬ</h3>
              <p className={styles.itemText}>
                Завдяки невеликим габаритам та високій потужності пила має
                невеликі розміри та маленьку вагу, що дозволяє легко
                користуватися навіть у важкодоступних місцях.
              </p>
            </div>
          </div>

          <div className={styles.benefitItem}>
            <Image
              className={styles.img}
              src={ImageSh2}
              alt="Фото двох акумуляторів для пилки"
              width={150}
              height={150}
              loading="lazy"
              style={{
                aspectRatio: "1 / 1",
              }}
            />
            <div className={styles.textBlock}>
              <h3 className={styles.itemHeading}>
                НАДІЙНІ АКУМУЛЯТОРИ У КОМПЛЕКТІ
              </h3>
              <p className={styles.itemText}>
                У комплекті 2 Li-ion батареї 36В, 4Ач (можна обрати 6Ah) із
                тривалим терміном служби.
              </p>
            </div>
          </div>

          <div className={styles.benefitItem}>
            <Image
              className={styles.img}
              src={ImageSh3}
              alt="Фото процесу заряджання акумулятора"
              width={150}
              height={150}
              loading="lazy"
              style={{
                aspectRatio: "1 / 1",
              }}
            />
            <div className={styles.textBlock}>
              <h3 className={styles.itemHeading}>ШВИДКА ЗАРЯДКА</h3>
              <p className={styles.itemText}>
                Ви можете брати компактну пилку з собою куди завгодно, а завдяки
                технології швидкого заряджання акумулятор зарядиться за 2
                години.
              </p>
            </div>
          </div>

          <div className={styles.benefitItem}>
            <Image
              className={styles.img}
              src={ImageMaslo}
              alt="Іконка автоматичної подачі масла в пилу"
              width={150}
              height={150}
              loading="lazy"
              style={{
                aspectRatio: "1 / 1",
              }}
            />
            <div className={styles.textBlock}>
              <h3 className={styles.itemHeading}>АВТОМАТИЧНА ПОДАЧА МАСЛА</h3>
              <p className={styles.itemText}>
                Пила оснащена вбудованим масляним баком, що забезпечує
                автоматичне змащування ланцюга. Це зменшує тертя, підвищує
                плавність роботи та продовжує термін служби пиляльного
                механізму.
              </p>
            </div>
          </div>
        </div>

        <Image
          className={styles.image}
          src={ImageZbirka}
          alt="Фото підготовки пилки до роботи"
          width={480}
          height={480}
          loading="lazy"
          style={{
            aspectRatio: "1 / 1",
          }}
        />

        <a href="#order_form" className={styles.button}>
          Замовити зі знижкою
        </a>
      </section>
    </Container>
  );
}

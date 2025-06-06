"use client";

import Image from "next/image";
import Container from "@/components/Container";
import styles from "./Hero.module.css";
import ImageTopOffer from "@/assets/images/top-offer.webp";
import ImageOneP from "@/assets/images/1_p.webp";
import ImageTwoP from "@/assets/images/2_p.webp";
import ImageThreeP from "@/assets/images/3_p.webp";
import ImageBenefitFirst from "@/assets/images/offer3__benefit1_icon.webp";
import ImageBenefitSecond from "@/assets/images/offer3__benefit2_icon.webp";
import ImageBenefitThird from "@/assets/images/offer3__benefit3_icon.webp";

export default function Hero() {
  return (
    <Container>
      <div className={styles.titleBlock}>
        <h1 className={styles.mainTitle}>Акумуляторна пила ланцюгова</h1>
        <p className={styles.subtitle}>
          з оновленою моделлю безщіткового двигуна
        </p>
      </div>

      <div className={styles.imageBlock}>
        <Image
          src={ImageTopOffer}
          alt="Фото акумуляторної пилки на траві"
          width={500}
          height={500}
          sizes="(max-width: 768px) 100vw, 500px"
          priority
          className={styles.imageTop}
          style={{
            aspectRatio: "97 / 100",
          }}
        />
        <div className={styles.discount}>
          <span className={styles.discountValue}>-35%</span>
          <span className={styles.discountText}>знижка</span>
        </div>
      </div>

      <ul className={styles.benefitsList}>
        <li className={styles.benefitItem}>
          <Image
            src={ImageBenefitFirst}
            alt="Іконка з галочкою якості"
            width={34}
            height={34}
            style={{
              aspectRatio: "1 / 1",
            }}
          />
          <span>Зручність та якість</span>
        </li>
        <li className={styles.benefitItem}>
          <Image
            src={ImageBenefitSecond}
            alt="Іконка вантажівки доставки"
            width={34}
            height={34}
            style={{
              aspectRatio: "1 / 1",
            }}
          />
          <span>Швидка доставка</span>
        </li>
        <li className={styles.benefitItem}>
          <Image
            src={ImageBenefitThird}
            alt="Іконка грошей"
            width={34}
            height={34}
            style={{
              aspectRatio: "1 / 1",
            }}
          />
          <span>Оплата при отриманні</span>
        </li>
      </ul>

      <div className={styles.benefitsBlock}>
        <div className={styles.benefitItem}>
          <Image
            src={ImageOneP}
            alt="Фото пилки під час роботи"
            width={150}
            height={150}
          />
          <span>
            <b>Для будь-яких робіт</b> вдома, в саду чи на дачі!
          </span>
        </div>
        <div className={styles.benefitItem}>
          <Image
            src={ImageTwoP}
            alt="Іконка гарантії"
            width={150}
            height={150}
            sizes="(max-width: 768px) 150px"
            style={{
              aspectRatio: "1 / 1",
            }}
          />
          <span>
            <b>Гарантія 12 місяців</b> від виробника!
          </span>
        </div>
        <div className={styles.benefitItem}>
          <Image
            src={ImageThreeP}
            alt="Фото компактної акумуляторної пилки"
            width={150}
            height={150}
            style={{
              aspectRatio: "1 / 1",
            }}
          />
          <span>
            Безпечна, портативна та <b>потужна</b>
          </span>
        </div>
      </div>

      <div className={styles.priceBlock}>
        <div className={styles.priceItem}>
          <div className={styles.text}>Звичайна ціна:</div>
          <div className={styles.value}>4584 грн</div>
        </div>
        <div className={styles.priceItem}>
          <div className={styles.text}>Ціна зі знижкою:</div>
          <div className={styles.value}>2980 грн</div>
        </div>
      </div>
    </Container>
  );
}

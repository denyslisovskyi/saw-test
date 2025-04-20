"use client";

import Image from "next/image";
import Container from "@/components/Container";
import ImageTopOffer from "@/assets/images/top-offer.webp";
import ImageMain from "@/assets/images/main-1-2-2.webp";
import styles from "./Hero.module.css";
import ImageOneP from "@/assets/images/1_p.webp";
import ImageTwoP from "@/assets/images/2_p.webp";
import ImageThreeP from "@/assets/images/3_p.webp";
import ImageNP from "@/assets/images/np.webp";

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
          alt="Акумуляторна пила ланцюгова – головна пропозиція"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
          placeholder="blur"
          className={styles.imageTop}
          blurDataURL={ImageTopOffer.blurDataURL}
        />
        <div className={styles.discount}>
          <span className={styles.discountValue}>-35%</span>
          <span className={styles.discountText}>знижка</span>
        </div>
      </div>

      <ul className={styles.benefitsList}>
        <li className={styles.benefitItem}>Зручність та якість</li>
        <li className={styles.benefitItem}>Швидка доставка</li>
        <li className={styles.benefitItem}>Оплата при отриманні</li>
      </ul>

      <div className={styles.benefitsBlock}>
        <div className={styles.benefitItem}>
          <Image
            src={ImageOneP}
            alt="Пила в роботі – зручно та ефективно"
            width="150"
            height="150"
            priority
            placeholder="blur"
          />
          <span>
            <b>Для будь-яких робіт</b> вдома, в саду чи на дачі!
          </span>
        </div>
        <div className={styles.benefitItem}>
          <Image
            src={ImageTwoP}
            alt="Гарантія на пилку 12 місяців"
            width="150"
            height="150"
            priority
            placeholder="blur"
          />
          <span>
            <b>Гарантія 12 місяців</b> від виробника!
          </span>
        </div>
        <div className={styles.benefitItem}>
          <Image
            src={ImageThreeP}
            alt="Компактна та потужна акумуляторна пила"
            width="150"
            height="150"
            priority
            placeholder="blur"
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
        <Image
          src={ImageNP}
          alt="Розстрочка від Нової Пошти"
          width="478"
          height="129"
        />
      </div>
      <a href="#order_form" className={styles.button}>
        Замовити зі знижкою
      </a>

      <Image
        className={styles.imageBottom}
        src={ImageMain}
        alt="Акумуляторна пила знизу"
        sizes="(max-width: 768px) 100vw, 600px"
        placeholder="blur"
        loading="lazy"
        blurDataURL={ImageMain.blurDataURL}
      />
    </Container>
  );
}

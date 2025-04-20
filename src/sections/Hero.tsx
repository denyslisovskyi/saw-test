"use client";

import Image from "next/image";
import Container from "@/components/Container";
import styles from "./Hero.module.css";
import ImageTopOffer from "@/assets/images/top-offer.webp";

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
          width={500}
          height={516}
          sizes="(max-width: 768px) 100vw, 600px"
          priority
          className={styles.imageTop}
        />
        <div className={styles.discount}>
          <span className={styles.discountValue}>-35%</span>
          <span className={styles.discountText}>знижка</span>
        </div>
      </div>
    </Container>
  );
}

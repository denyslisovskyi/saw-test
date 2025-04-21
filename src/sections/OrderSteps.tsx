"use client";

import Container from "@/components/Container";
import styles from "./OrderSteps.module.css";
import Image from "next/image";
import ImageOrderStepOne from "@/assets/images/order_steps1__step1_icon.webp";
import ImageOrderStepTwo from "@/assets/images/order_steps1__step2_icon.webp";
import ImageOrderStepThree from "@/assets/images/order_steps1__step3_icon.webp";
import ImageOrderStepFour from "@/assets/images/order_steps1__step4_icon.webp";

export default function OrderSteps() {
  const steps = [
    {
      title: "Заявка",
      text: "Залишаєте заявку на нашому сайті",
      img: ImageOrderStepOne,
      alt: "лист бумаги",
    },
    {
      title: "Дзвінок",
      text: "Менеджер уточнює деталі замовлення",
      img: ImageOrderStepTwo,
      alt: "навушники з мікрофоном",
    },
    {
      title: "Відправка",
      text: "Новою Поштою протягом 1-3 днів",
      img: ImageOrderStepThree,
      alt: "коробка",
    },
    {
      title: "Отримання",
      text: "Оплачуєте при отриманні поштою",
      img: ImageOrderStepFour,
      alt: "мішок з грошима",
    },
  ];

  return (
    <Container>
      <section className={styles.orderStepsSection}>
        <h2 className={styles.title}>Як замовити?</h2>

        <div className={styles.orderStepsList}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepItem}>
              <div className={styles.titleWrapper}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <Image
                  src={step.img}
                  alt={`Фото ${step.alt}`}
                  width={32}
                  height={32}
                  loading="lazy"
                  className={styles.image}
                  style={{
                    aspectRatio: "1 / 1",
                  }}
                />
              </div>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}

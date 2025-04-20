"use client";

import Container from "@/components/Container";
import { Slider } from "@/components/Slider";
import styles from "./Reviews.module.css";

import ImageRev1 from "@/assets/images/rev1.webp";
import ImageRev2 from "@/assets/images/rev2.webp";
import ImageRev3 from "@/assets/images/rev3.webp";
import ImageFeedback1 from "@/assets/images/1_vidguk.webp";
import ImageFeedback2 from "@/assets/images/2_vidguk.webp";
import ImageFeedback3 from "@/assets/images/3_vidguk.webp";

const reviews = [
  {
    img1: ImageRev1,
    img2: ImageFeedback1,
    alt: "Андрій Тарасенко",
  },
  {
    img1: ImageRev2,
    img2: ImageFeedback2,
    alt: "Володимир Тарченко",
  },
  {
    img1: ImageRev3,
    img2: ImageFeedback3,
    alt: "Відгук покупця",
  },
];

export default function Reviews() {
  return (
    <Container>
      <section className={styles.reviewsSection}>
        <h2 className={styles.title}>Акумуляторна пила — відгуки покупців</h2>
        <Slider reviews={reviews} />
      </section>
    </Container>
  );
}

"use client";

import dynamic from "next/dynamic";

import Hero from "@/sections/Hero";
import Description from "@/sections/Description";
import Features from "@/sections/Features";
import styles from "./HomeContent.module.css";

const Offer = dynamic(() => import("@/sections/Offer"), {
  ssr: false,
  loading: () => <div>Завантаження пропозиції...</div>,
});

const Reviews = dynamic(() => import("@/sections/Reviews"), {
  ssr: false,
  loading: () => <div>Завантаження відгуків...</div>,
});

const OrderSteps = dynamic(() => import("@/sections/OrderSteps"), {
  ssr: false,
  loading: () => <div>Завантаження кроків замовлення...</div>,
});

const OrderForm = dynamic(() => import("@/sections/OrderForm"), {
  ssr: false,
  loading: () => <div>Завантаження форми замовлення...</div>,
});

export default function HomeContent() {
  return (
    <div className={styles.contentWrapper}>
      <Hero />
      <Offer />
      <Description />
      <Features />
      <Reviews />
      <OrderSteps />
      <Hero />
      <OrderForm />
    </div>
  );
}

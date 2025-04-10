import Hero from "@/sections/Hero";
import Description from "@/sections/Description";
import Features from "@/sections/Features";
import Reviews from "@/sections/Reviews";
import OrderSteps from "@/sections/OrderSteps";
import OrderForm from "@/sections/OrderForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Description />
      <Features />
      <Reviews />
      <OrderSteps />
      <OrderForm />
    </>
  );
}

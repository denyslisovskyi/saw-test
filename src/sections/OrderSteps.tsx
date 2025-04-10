"use client";

import Container from "@/components/Container";

export default function OrderSteps() {
  const steps = [
    { title: "Заявка", text: "Залишаєте заявку на нашому сайті" },
    { title: "Дзвінок", text: "Менеджер уточнює деталі замовлення" },
    { title: "Відправка", text: "Новою Поштою протягом 1-3 днів" },
    { title: "Отримання", text: "Оплачуєте при отриманні поштою" },
  ];

  return (
    <Container>
      <section className="order_steps_section px-4 pb-12 pt-6 text-center">
        <h2 className="title text-xl md:text-2xl font-bold mb-8">
          Як замовити?
        </h2>

        <div className="order_steps_list1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="step_item bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}

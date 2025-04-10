"use client";

export default function OrderSteps() {
  return (
    <section className="order_steps_section px-4 py-10 text-center">
      <h2 className="title text-xl font-bold mb-6">Як замовити?</h2>

      <div className="order_steps_list1 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        <div className="step_item bg-white shadow-md p-4 rounded w-[200px]">
          <h4 className="font-semibold text-lg mb-1">Заявка</h4>
          <p className="text-sm text-gray-700">
            Залишаєте заявку на нашому сайті
          </p>
        </div>

        <div className="step_item bg-white shadow-md p-4 rounded w-[200px]">
          <h4 className="font-semibold text-lg mb-1">Дзвінок</h4>
          <p className="text-sm text-gray-700">
            Менеджер уточнює деталі замовлення
          </p>
        </div>

        <div className="step_item bg-white shadow-md p-4 rounded w-[200px]">
          <h4 className="font-semibold text-lg mb-1">Відправка</h4>
          <p className="text-sm text-gray-700">
            Новою Поштою протягом 1-3 днів
          </p>
        </div>

        <div className="step_item bg-white shadow-md p-4 rounded w-[200px]">
          <h4 className="font-semibold text-lg mb-1">Отримання</h4>
          <p className="text-sm text-gray-700">
            Оплачуєте при отриманні поштою
          </p>
        </div>
      </div>
    </section>
  );
}

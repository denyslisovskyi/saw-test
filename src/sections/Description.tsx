// src/sections/Description.tsx
"use client";

import Image from "next/image";

export default function Description() {
  return (
    <section className="description_section px-4 py-10 text-center">
      <h2 className="title text-xl font-bold">
        <span className="block text-primary">
          ПОТУЖНІСТЬ ТА УНІВЕРСАЛЬНІСТЬ
        </span>{" "}
        ДЛЯ БУДЬ-ЯКИХ РОБІТ ВДОМА, В САДУ ТА НА ДАЧІ!
      </h2>

      <p className="text mt-4">
        <b>Надійна акумуляторна пила</b>, яка поєднує в собі портативність і
        потужність! Вона легко справляється як з обрізкою гілок у саду, так і{" "}
        <b>з розпилюванням великих колод</b>, що робить її незамінною для
        заготівлі дров.
      </p>

      <Image
        className="image my-4 mx-auto"
        src="/img/a1.webp"
        alt="Акумуляторна пила в роботі – обрізка гілок"
        width={480}
        height={360}
        loading="lazy"
      />

      <p className="text">
        Акумуляторна пила 36V з 2 АКБ та 2 шинами – <b> ідеальне рішення </b>{" "}
        для садових, будівельних і столярних робіт. <b>Зручна у використанні</b>{" "}
        як правою, так і лівою рукою, забезпечуючи максимальний комфорт під час
        роботи.
      </p>

      <Image
        className="image my-4 mx-auto"
        src="/img/use.webp"
        alt="Акумуляторна пила в роботі – заготівля дров"
        width={480}
        height={480}
        loading="lazy"
      />

      <p className="text">
        Ця <b>високопродуктивна пила</b> поєднує компактність, витривалість і
        мобільність. Ергономічний дизайн{" "}
        <b>дозволяє працювати довго без втоми</b>, незалежно від місця
        використання.
      </p>

      <p className="text">
        <b>Технологія точного різу</b> зменшує навантаження на мотор,
        забезпечуючи довговічність. Відмінно підходить для обрізки дерев,
        чагарників та{" "}
        <b>навіть для складних завдань, які зазвичай виконують бензопилами</b>.
      </p>

      <Image
        className="image my-4 mx-auto"
        src="/img/a3.webp"
        alt="Компактна акумуляторна пила в дії"
        width={480}
        height={274}
        loading="lazy"
      />

      <Image
        className="image my-4 mx-auto"
        src="/img/dvugyn.webp"
        alt="Оновлена модель двигуна акумуляторної пили"
        width={480}
        height={480}
        loading="lazy"
      />

      <a
        href="#order_form"
        className="button mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded"
      >
        Замовити зі знижкою
      </a>
    </section>
  );
}

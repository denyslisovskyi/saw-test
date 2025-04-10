"use client";

import Image from "next/image";
import Container from "@/components/Container";

export default function Description() {
  return (
    <Container>
      <section className="description_section px-4 pb-10 pt-6 text-center">
        <h2 className="title text-xl md:text-2xl font-bold mb-6">
          <span className="block">ПОТУЖНІСТЬ ТА УНІВЕРСАЛЬНІСТЬ</span>
          ДЛЯ БУДЬ-ЯКИХ РОБІТ ВДОМА, В САДУ ТА НА ДАЧІ!
        </h2>

        <p className="text-base leading-relaxed mb-6">
          <b>Надійна акумуляторна пила</b>, яка поєднує в собі портативність і
          потужність! Вона легко справляється як з обрізкою гілок у саду, так і{" "}
          <b>з розпилюванням великих колод</b>, що робить її незамінною для
          заготівлі дров.
        </p>

        <Image
          className="image mx-auto mb-6 rounded-lg shadow"
          src="/img/a1.webp"
          alt="Обрізка гілок"
          width={480}
          height={360}
          loading="lazy"
          priority
        />

        <p className="text-base leading-relaxed mb-6">
          Акумуляторна пила 36V з 2 АКБ та 2 шинами – <b> ідеальне рішення </b>{" "}
          для садових, будівельних і столярних робіт.{" "}
          <b>Зручна у використанні</b> як правою, так і лівою рукою,
          забезпечуючи максимальний комфорт під час роботи.
        </p>

        <Image
          className="image mx-auto mb-6 rounded-lg shadow"
          src="/img/use.webp"
          alt="Заготівля дров"
          width={480}
          height={480}
          loading="lazy"
          priority
        />

        <p className="text-base leading-relaxed mb-6">
          Ця <b>високопродуктивна пила</b> поєднує компактність, витривалість і
          мобільність. Ергономічний дизайн{" "}
          <b>дозволяє працювати довго без втоми</b>, незалежно від місця
          використання.
        </p>

        <p className="text-base leading-relaxed mb-6">
          <b>Технологія точного різу</b> зменшує навантаження на мотор,
          забезпечуючи довговічність. Відмінно підходить для обрізки дерев,
          чагарників та{" "}
          <b>навіть для складних завдань, які зазвичай виконують бензопилами</b>
          .
        </p>

        <Image
          className="image mx-auto mb-6 rounded-lg shadow"
          src="/img/a3.webp"
          alt="Компактна пила"
          width={480}
          height={274}
          loading="lazy"
          priority
        />

        <Image
          className="image mx-auto mb-8 rounded-lg shadow"
          src="/img/dvugyn.webp"
          alt="Оновлена модель двигуна"
          width={480}
          height={480}
          loading="lazy"
          priority
        />

        <a
          href="#order_form"
          className="button inline-block bg-accent text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
        >
          Замовити зі знижкою
        </a>
      </section>
    </Container>
  );
}

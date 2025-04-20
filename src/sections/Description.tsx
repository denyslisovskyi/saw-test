"use client";

import Image from "next/image";
import Container from "@/components/Container";
import styles from "./Description.module.css"; // 👈 підключаємо CSS-модуль

import ImageA1 from "@/assets/images/a1.webp";
import ImageUse from "@/assets/images/use.webp";
import ImageA3 from "@/assets/images/a3.webp";
import ImageDvugyn from "@/assets/images/dvugyn.webp";
import ImageMain from "@/assets/images/main-1-2-2.webp";

export default function Description() {
  return (
    <Container>
      <section>
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
      </section>
      <section className={styles.descriptionSection}>
        <h2 className={styles.title}>
          <span className={styles.block}>ПОТУЖНІСТЬ ТА УНІВЕРСАЛЬНІСТЬ</span>
          ДЛЯ БУДЬ-ЯКИХ РОБІТ ВДОМА, В САДУ ТА НА ДАЧІ!
        </h2>

        <p className={styles.text}>
          <b>Надійна акумуляторна пила</b>, яка поєднує в собі портативність і
          потужність! Вона легко справляється як з обрізкою гілок у саду, так і{" "}
          <b>з розпилюванням великих колод</b>, що робить її незамінною для
          заготівлі дров.
        </p>

        <Image
          className={styles.image}
          src={ImageA1}
          alt="Обрізка гілок"
          width={480}
          height={360}
          loading="lazy"
        />

        <p className={styles.text}>
          Акумуляторна пила 36V з 2 АКБ та 2 шинами – <b> ідеальне рішення </b>{" "}
          для садових, будівельних і столярних робіт.{" "}
          <b>Зручна у використанні</b> як правою, так і лівою рукою,
          забезпечуючи максимальний комфорт під час роботи.
        </p>

        <Image
          className={styles.image}
          src={ImageUse}
          alt="Заготівля дров"
          width={480}
          height={480}
          loading="lazy"
        />

        <p className={styles.text}>
          Ця <b>високопродуктивна пила</b> поєднує компактність, витривалість і
          мобільність. Ергономічний дизайн{" "}
          <b>дозволяє працювати довго без втоми</b>, незалежно від місця
          використання.
        </p>

        <p className={styles.text}>
          <b>Технологія точного різу</b> зменшує навантаження на мотор,
          забезпечуючи довговічність. Відмінно підходить для обрізки дерев,
          чагарників та{" "}
          <b>навіть для складних завдань, які зазвичай виконують бензопилами</b>
          .
        </p>

        <Image
          className={styles.image}
          src={ImageA3}
          alt="Компактна пила"
          width={480}
          height={274}
          loading="lazy"
        />

        <Image
          className={styles.image}
          src={ImageDvugyn}
          alt="Оновлена модель двигуна"
          width={480}
          height={480}
          loading="lazy"
        />

        <a href="#order_form" className={styles.button}>
          Замовити зі знижкою
        </a>
      </section>
    </Container>
  );
}

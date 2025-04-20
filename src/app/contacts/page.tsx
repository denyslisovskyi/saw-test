"use client";

import styles from "./page.module.css";

export default function ContactsPage() {
  return (
    <main className={styles.mainWrapper}>
      <section className={styles.contentWrapper}>
        <section className={styles.blueTheme}>
          <h2 className={styles.title}>КОНТАКТИ</h2>
        </section>

        <section>
          <div className={styles.container}>
            <p>ФОП Герман Р.</p>
            <p>ЄДРПОУ 3542402800</p>
            <p>
              вул. Князів Коріатовичів, 25/7, Кам&apos;янець-Подільський,
              Хмельницька область, індекс 32303
            </p>
            <p>
              © 2017–2025 E-mail:{" "}
              <a href="mailto:office@miydim.shop" className={styles.link}>
                office@miydim.shop
              </a>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

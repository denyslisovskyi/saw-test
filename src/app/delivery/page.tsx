"use client";

import styles from "./page.module.css";

export default function DeliveryPage() {
  return (
    <main className={styles.mainWrapper}>
      <section className={styles.contentWrapper}>
        <section className={styles.blueTheme}>
          <h2 className={styles.title}>Доставка та оплата</h2>
        </section>

        <section>
          <div className={styles.container}>
            <p>Варіанти доставки:</p>
            <ul className={styles.list}>
              <li>
                <strong>Доставка товару &quot;Укрпошта&quot;</strong>
                <p>
                  <a href="https://www.ukrposhta.ua/" target="_blank">
                    ukrposhta.ua
                  </a>
                </p>
                <p>
                  Наша компанія здійснює відправлення через національного
                  оператора поштового зв’язку &quot;Укрпошта&quot; по всій
                  території України. Вартість доставки згідно з тарифами
                  перевізника:
                </p>
                <p>- у відділення по Україні – від 70 грн.</p>
              </li>

              <li>
                <strong>Доставка товару &quot;Нова Пошта&quot;</strong>
                <p>
                  <a href="https://novaposhta.ua/basic_tariffs" target="_blank">
                    novaposhta.ua
                  </a>
                </p>
                <p>
                  Наша компанія здійснює відправлення через транспортну компанію
                  &quot;Нова Пошта&quot; по всій території України. Вартість
                  доставки згідно з тарифами перевізника:
                </p>
                <p>- у поштомат – від 65 грн.</p>
                <p>- у відділення по Україні – від 80 грн.</p>
                <p>- кур&apos;єром – від 115 грн.</p>
              </li>
            </ul>

            <p>Терміни доставки:</p>
            <ul className={styles.list}>
              <li>
                Якщо товар є на складі в Одесі, і замовлення оформлене до 11:00,
                відправка товару зазвичай здійснюється того ж дня. Після 11:00 —
                наступного дня.
              </li>
              <li>
                Якщо товар відсутній на одеському складі, менеджери повідомлять
                термін поставки, який зазвичай становить 1–3 дні.
              </li>
            </ul>

            <p>
              Оплата товару здійснюється лише в національній валюті. Оплата
              готівкою можлива на відділенні пошти або кур&apos;єру під час
              отримання замовлення. <br />У зв&apos;язку з нестабільністю ринку
              і коливанням курсу валют, кінцеву ціну та наявність товару
              уточнюйте у наших співробітників.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

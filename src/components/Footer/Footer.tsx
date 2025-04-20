"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="w-full text-center text-sm text-gray-600 py-6 px-4 border-t">
      <div>Інтернет-магазин miydim.shop</div>
      <div>ФОП Герман Р.С.</div>
      <div className="mt-1">© 2017–{new Date().getFullYear()}</div>
      <div>
        E-mail:{" "}
        <a href="mailto:shop@miydim.shop" className="text-blue-600 underline">
          shop@miydim.shop
        </a>
      </div>

      <div className={styles.footerLinksRow}>
        <Link
          href="/about-us"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Про нас
        </Link>
        <span className={styles.footerSeparator}>|</span>
        <Link
          href="/delivery"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Доставка та оплата
        </Link>
        <span className={styles.footerSeparator}>|</span>
        <Link
          href="/contacts"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Контакти
        </Link>
      </div>

      <div className={styles.footerBottom}>
        <Link
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Політика конфіденційності
        </Link>

        <Link
          href="/returns"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Повернення і обмін
        </Link>
      </div>
    </footer>
  );
}

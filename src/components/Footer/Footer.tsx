"use client";

import Link from "next/link";

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

      <div className="mt-2 flex flex-wrap justify-center gap-x-3 text-gray-700">
        <Link href="/about-us" target="_blank" rel="noopener noreferrer">
          Про нас
        </Link>
        <span>|</span>
        <Link href="/delivery" target="_blank" rel="noopener noreferrer">
          Доставка та оплата
        </Link>
        <span>|</span>
        <Link href="/contacts" target="_blank" rel="noopener noreferrer">
          Контакти
        </Link>
      </div>

      <div className="mt-1">
        <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">
          Політика конфіденційності
        </Link>
      </div>

      <div>
        <Link href="/returns" target="_blank" rel="noopener noreferrer">
          Повернення і обмін
        </Link>
      </div>
    </footer>
  );
}

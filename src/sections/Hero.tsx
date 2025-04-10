import Image from "next/image";

export default function Hero() {
  return (
    <header className="bg-white pt-6 pb-10 text-center">
      <div className="max-w-xl mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold leading-tight">
            Акумуляторна пила ланцюгова
          </h1>
          <p className="text-lg text-gray-700">
            з оновленою моделлю безщіткового двигуна
          </p>
        </div>

        <div className="relative w-full max-w-xs mx-auto mb-4">
          <Image
            src="/img/top-offer.webp"
            alt="Акумуляторна пила ланцюгова – головна пропозиція"
            width={480}
            height={495}
            priority
          />
          <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full shadow text-sm">
            -35% знижка
          </div>
        </div>

        <div className="flex justify-center gap-3 text-sm text-gray-800 font-medium mb-6 flex-wrap">
          <div className="bg-gray-100 px-3 py-2 rounded">
            Зручність та якість
          </div>
          <div className="bg-gray-100 px-3 py-2 rounded">Швидка доставка</div>
          <div className="bg-gray-100 px-3 py-2 rounded">
            Оплата при отриманні
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="text-sm">
            <Image
              src="/img/1_p.jpg"
              alt="Пила в роботі – зручно та ефективно"
              width={150}
              height={150}
              loading="lazy"
            />
            <p>
              <strong>Для будь-яких робіт</strong> вдома, в саду чи на дачі!
            </p>
          </div>
          <div className="text-sm">
            <Image
              src="/img/2_p.jpg"
              alt="Гарантія на пилку 12 місяців"
              width={150}
              height={150}
              loading="lazy"
            />
            <p>
              <strong>Гарантія 12 місяців</strong> від виробника!
            </p>
          </div>
          <div className="text-sm">
            <Image
              src="/img/3_p.jpg"
              alt="Компактна та потужна акумуляторна пила"
              width={150}
              height={150}
              loading="lazy"
            />
            <p>
              Безпечна, портативна та <strong>потужна</strong>
            </p>
          </div>
        </div>

        <div className="bg-gray-100 rounded p-4 mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Звичайна ціна:</span>
            <span className="line-through">4585 грн</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-primary">
            <span>Ціна зі знижкою:</span>
            <span>2980 грн</span>
          </div>
        </div>

        <Image
          src="/img/np.webp"
          alt="Розстрочка від Нової Пошти"
          width={478}
          height={129}
          loading="lazy"
        />

        <div className="mt-6">
          <a
            href="#order_form"
            className="inline-block bg-primary text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
            Замовити зі знижкою
          </a>
        </div>

        <div className="mt-8">
          <Image
            src="/img/main-1-2-2.webp"
            alt="акумуляторна пила ланцюгова"
            width={480}
            height={617}
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
}

"use client";
import { useEffect, useState } from "react";

export default function OrderForm() {
  const [utmData, setUtmData] = useState({
    utm_source: "",
    utm_medium: "",
    utm_term: "",
    utm_content: "",
    utm_campaign: "",
    gclid: "",
    wbraid: "",
    gbraid: "",
  });

  useEffect(() => {
    const getParam = (key: string) => localStorage.getItem(key) || "";
    setUtmData({
      utm_source: getParam("utm_source"),
      utm_medium: getParam("utm_medium"),
      utm_term: getParam("utm_term"),
      utm_content: getParam("utm_content"),
      utm_campaign: getParam("utm_campaign"),
      gclid: getParam("gclid"),
      wbraid: getParam("wbraid"),
      gbraid: getParam("gbraid"),
    });
  }, []);

  return (
    <form
      className="space-y-4 max-w-md mx-auto"
      action="/api/submit" // Змінити на свою ручку або обробник
      method="post"
    >
      <input
        type="text"
        name="name"
        placeholder="Ваше ім'я"
        required
        className="w-full p-2 border"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Ваш телефон"
        required
        className="w-full p-2 border"
      />

      {/* Hidden fields for UTM tracking */}
      {Object.entries(utmData).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value} />
      ))}

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Оформити замовлення
      </button>
    </form>
  );
}

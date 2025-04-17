"use client";

import { useEffect, useState } from "react";

interface IUtmData {
  utm_source: string;
  utm_medium: string;
  utm_term: string;
  utm_content: string;
  utm_campaign: string;
  gclid: string;
  wbraid: string;
  gbraid: string;
  fbp: string;
  fbc: string;
}

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [utmData, setUtmData] = useState<IUtmData>({
    utm_source: "",
    utm_medium: "",
    utm_term: "",
    utm_content: "",
    utm_campaign: "",
    gclid: "",
    wbraid: "",
    gbraid: "",
    fbp: "",
    fbc: "",
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
      fbc: getCookie("_fbc"),
      fbp: getCookie("_fbp"),
    });
  }, []);

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.length === 2 ? parts.pop()?.split(";").shift() || "" : "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/send-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        ...utmData,
        userAgent: navigator.userAgent,
      }),
    });

    if (res.ok) {
      console.log(res, "FORM SENT SUCCESSFULLY!");
    } else {
      console.error("error while sending form data");
    }
  };

  return (
    <form className="space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Ваше ім'я"
        required
        className="w-full p-2 border"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Ваш телефон"
        required
        className="w-full p-2 border"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Оформити замовлення
      </button>
    </form>
  );
}

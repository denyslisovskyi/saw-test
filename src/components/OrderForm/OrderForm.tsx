"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./OrderForm.module.css";
import ImageUserName from "@/assets/images/offer__name_icon.webp";
import ImageUserPhone from "@/assets/images/offer__phone_icon.webp";

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

const validOperators = [
  "039",
  "050",
  "063",
  "066",
  "067",
  "068",
  "091",
  "092",
  "093",
  "094",
  "095",
  "096",
  "097",
  "098",
  "099",
];

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [isOperatorValid, setIsOperatorValid] = useState(true);
  const [isValidForm, setIsValidForm] = useState(false);

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

  const phoneInputRef = useRef<HTMLInputElement>(null);

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

  const formatPhone = (digits: string) => {
    if (digits.length === 0) return "";
    let formatted = "+38";

    const operator = digits.slice(0, 3);
    const first = digits.slice(3, 6);
    const second = digits.slice(6, 10);

    if (operator) formatted += ` (${operator}`;
    if (operator.length === 3) formatted += ")";
    if (first) formatted += ` ${first}`;
    if (second) formatted += ` ${second}`;

    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const rawValue = input.value;
    const inputType = (e.nativeEvent as InputEvent).inputType;
    const cursorPosition = input.selectionStart ?? rawValue.length;

    let digits = rawValue.replace(/\D/g, "").replace(/^38/, "").slice(0, 10);

    const leftRaw = rawValue.slice(0, cursorPosition);
    let leftDigits = leftRaw.replace(/\D/g, "").replace(/^38/, "").slice(0, 10);

    if (
      inputType === "deleteContentBackward" &&
      cursorPosition > 0 &&
      /\D/.test(rawValue[cursorPosition - 1])
    ) {
      leftDigits = leftDigits.slice(0, -1);
    }

    const rightRaw = rawValue.slice(cursorPosition);
    const rightDigits = rightRaw
      .replace(/\D/g, "")
      .slice(0, 10 - leftDigits.length);
    digits = (leftDigits + rightDigits).slice(0, 10);

    const formatted = digits.length > 0 ? formatPhone(digits) : "";
    const newCursor = formatPhone(leftDigits).length;

    setFormData((prev) => ({ ...prev, phone: formatted }));

    const isOperatorOk =
      digits.length < 3 || validOperators.includes(digits.slice(0, 3));
    setIsOperatorValid(isOperatorOk);
    setIsValidForm(
      isOperatorOk && digits.length === 10 && formData.name.trim().length > 0,
    );

    requestAnimationFrame(() => {
      if (phoneInputRef.current) {
        phoneInputRef.current.setSelectionRange(newCursor, newCursor);
      }
    });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setFormData((prev) => ({ ...prev, name }));
    const digits = formData.phone.replace(/\D/g, "").replace(/^38/, "");
    setIsValidForm(
      isOperatorValid && digits.length === 10 && name.trim().length > 0,
    );
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
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.inputWrapper}>
        <Image
          src={ImageUserName}
          alt="іконка людини"
          className={styles.icon}
          loading="lazy"
          width={24}
          height={24}
          style={{
            aspectRatio: "1 / 1",
          }}
        />
        <input
          type="text"
          name="name"
          placeholder="Ваше ім'я"
          required
          className={styles.input}
          value={formData.name}
          onChange={handleNameChange}
        />
      </div>

      <div
        className={`${styles.inputWrapper} ${!isOperatorValid ? styles.invalid : ""}`}
      >
        <Image
          src={ImageUserPhone}
          alt="іконка телефона"
          className={styles.icon}
          loading="lazy"
          width={24}
          height={24}
          style={{
            aspectRatio: "1 / 1",
          }}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Ваш телефон"
          required
          className={styles.input}
          ref={phoneInputRef}
          value={formData.phone}
          onChange={handlePhoneChange}
        />
        {!isOperatorValid && (
          <div className={styles.validationMessage}>
            Введено некоректний код мобільного оператора
          </div>
        )}
      </div>

      <button type="submit" className={styles.button} disabled={!isValidForm}>
        Оформити замовлення
      </button>
    </form>
  );
}

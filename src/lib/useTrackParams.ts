"use client";

import { useEffect } from "react";

export function useTrackParams() {
  useEffect(() => {
    const url = new URL(window.location.href);
    const keys = [
      "gclid",
      "wbraid",
      "gbraid",
      "utm_source",
      "utm_medium",
      "utm_term",
      "utm_content",
      "utm_campaign",
    ];

    keys.forEach((key) => {
      const value = url.searchParams.get(key);
      if (value) {
        localStorage.setItem(key, value);
        // 👇 додатково зберігаємо в cookie на 30 днів
        const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/`;
      }
    });
  }, []);
}

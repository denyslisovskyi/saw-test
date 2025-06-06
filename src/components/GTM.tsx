"use client";

import { useEffect } from "react";

export default function GTM() {
  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P5DBN4S2');
    `;

    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        document.head.appendChild(scriptTag);
      });
    } else {
      setTimeout(() => {
        document.head.appendChild(scriptTag);
      }, 3000);
    }
  }, []);

  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-P5DBN4S2"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

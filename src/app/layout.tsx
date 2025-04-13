import "./globals.css";
import Footer from "@/components/Footer";
import TrackParams from "@/components/TrackParams";
import { inter } from "@/lib/fonts";
import type { Metadata } from "next";
import { defaultMeta } from "@/lib/seo";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://saw-test-denys-projects-9a46b281.vercel.app"),
  title: defaultMeta.title,
  description: defaultMeta.description,
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [defaultMeta.ogImage],
  },
  viewport: "width=device-width, initial-scale=1",
  robots:
    process.env.VERCEL_ENV === "production"
      ? "index,follow"
      : "noindex,nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P5DBN4S2');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} min-h-screen flex flex-col`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P5DBN4S2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <TrackParams />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

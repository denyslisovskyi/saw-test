import "./globals.css";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import TrackParams from "@/components/TrackParams";
import { inter } from "@/lib/fonts";
import type { Metadata } from "next";
import { defaultMeta } from "@/lib/seo";
import Head from "next/head";

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
      <Head>
        <Analytics />
      </Head>
      <body className={`${inter.variable} min-h-screen flex flex-col`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P5DBN4S2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <TrackParams />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

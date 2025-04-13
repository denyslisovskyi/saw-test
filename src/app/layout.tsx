import "./globals.css";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import TrackParams from "@/components/TrackParams";
import { inter } from "@/lib/fonts";
import type { Metadata } from "next";
import { defaultMeta } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://vashvubir.ua"),
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
      <body className={`${inter.variable} min-h-screen flex flex-col`}>
        <Analytics />
        <TrackParams />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

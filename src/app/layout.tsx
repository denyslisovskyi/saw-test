import "./globals.css";
import { Footer } from "@/components/Footer";
import TrackParams from "@/components/TrackParams";
import type { Metadata } from "next";
import { defaultMeta } from "@/lib/seo";
import GTM from "@/components/GTM";

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
      <body>
        <GTM />
        <TrackParams />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

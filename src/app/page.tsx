import HomeContent from "@/components/HomeContent";

export const revalidate = 60;

export const dynamic = "force-static";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Акумуляторна пила ланцюгова",
    image:
      "https://saw-test-denys-projects-9a46b281.vercel.app/img/top-offer.webp",
    description: "Потужна, компактна пила на 2 АКБ для дому та саду.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}

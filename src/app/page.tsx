import HomeContent from "@/components/HomeContent";

export const revalidate = 60;

export default function Page() {
  console.log("🔥 Page re-rendered");

  return <HomeContent />;
}

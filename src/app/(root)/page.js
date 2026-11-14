import { Hero } from "@/app/sections/Hero";
import { AboutUs } from "@/app/sections/AboutUs";
import { Gallery } from "@/app/sections/Gallery";
import { Counting } from "@/app/sections/Counting";
import { Services } from "@/app/sections/Services";
import { BaseLayout } from "@/app/components/BaseLayout";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Counting />
      <AboutUs />
      <Services />
      <Gallery />
    </BaseLayout>
  );
}

"use client";

import { Hero } from "../sections/Hero";
import { AboutUs } from "../sections/AboutUs";
import { Gallery } from "../sections/Gallery";
import { Counting } from "../sections/Counting";
import { Services } from "../sections/Services";
import BaseLayout from "@/app/components/BaseLayout";

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

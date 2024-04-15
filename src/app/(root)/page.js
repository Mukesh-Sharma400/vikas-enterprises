"use client";

import { Hero } from "../sections/Hero";
import { AboutUs } from "../sections/AboutUs";
import { Counting } from "../sections/Counting";
import BaseLayout from "@/app/components/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Counting />
      <AboutUs />
    </BaseLayout>
  );
}

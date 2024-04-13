"use client";

import { Hero } from "../sections/Hero";
import { Counting } from "../sections/Counting";
import BaseLayout from "@/app/components/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Counting />
    </BaseLayout>
  );
}

import { BaseLayout } from "@/app/components/BaseLayout";
import { WorkInProgress } from "@/app/sections/WorkInProgress";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Vikas Enterprises, an interior design and renovation firm serving Navi Mumbai since 2001.",
  alternates: { canonical: "/about-us" },
};

export default function AboutUs() {
  return (
    <BaseLayout>
      <WorkInProgress />
    </BaseLayout>
  );
}

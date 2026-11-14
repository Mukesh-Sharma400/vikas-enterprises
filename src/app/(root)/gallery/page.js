import { BaseLayout } from "@/app/components/BaseLayout";
import { WorkInProgress } from "@/app/sections/WorkInProgress";

export const metadata = {
  title: "Gallery",
  description:
    "Photos of interiors, kitchens, ceilings and renovations completed by Vikas Enterprises in Navi Mumbai.",
  alternates: { canonical: "/gallery" },
};

export default function Gallery() {
  return (
    <BaseLayout>
      <WorkInProgress />
    </BaseLayout>
  );
}

import { BaseLayout } from "@/app/components/BaseLayout";
import { WorkInProgress } from "@/app/sections/WorkInProgress";

export const metadata = {
  title: "Projects",
  description:
    "Recent interior design and renovation projects by Vikas Enterprises across Navi Mumbai.",
  alternates: { canonical: "/projects" },
};

export default function Projects() {
  return (
    <BaseLayout>
      <WorkInProgress />
    </BaseLayout>
  );
}

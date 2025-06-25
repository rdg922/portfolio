import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROHIT DASGUPTA | Edu Africa Experience",
  description: "My experience working on the Edu Africa project - Educational technology development, team collaboration, and impactful solutions for African education systems.",
  openGraph: {
    title: "ROHIT DASGUPTA | Edu Africa Experience",
    description: "Experience working on the Edu Africa project - Educational technology development and team collaboration",
  },
};

export default function EduAfricaExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROHIT DASGUPTA | Edu Africa Project Details",
  description:
    "Detailed overview of the Edu Africa project by Rohit Dasgupta - Technical implementation, features, and impact of educational technology solutions for Africa.",
  openGraph: {
    title: "ROHIT DASGUPTA | Edu Africa Project Details",
    description:
      "Detailed overview of the Edu Africa project - Technical implementation and educational technology solutions",
  },
};

export default function EduAfricaProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

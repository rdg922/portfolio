import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROHIT DASGUPTA | Edu Africa Project",
  description:
    "Edu Africa project by Rohit Dasgupta - Educational technology solutions focused on improving access to quality education in Africa through innovative web development.",
  openGraph: {
    title: "ROHIT DASGUPTA | Edu Africa Project",
    description:
      "Edu Africa project by Rohit Dasgupta - Educational technology solutions for improving access to quality education",
  },
};

export default function EduAfricaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROHIT DASGUPTA | SwampHacks 2025 Project",
  description: "SwampHacks 2025 hackathon project by Rohit Dasgupta - Innovative solutions and collaborative development showcased at University of Florida's premier hackathon.",
  openGraph: {
    title: "ROHIT DASGUPTA | SwampHacks 2025 Project",
    description: "SwampHacks 2025 hackathon project by Rohit Dasgupta - Innovative solutions and collaborative development",
  },
};

export default function SwampHacks2025Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

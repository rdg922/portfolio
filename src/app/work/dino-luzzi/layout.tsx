import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROHIT DASGUPTA | Dino Luzzi Project",
  description:
    "Dino Luzzi project by Rohit Dasgupta - An interactive web game featuring retro gaming elements and modern web development techniques.",
  openGraph: {
    title: "ROHIT DASGUPTA | Dino Luzzi Project",
    description:
      "Dino Luzzi project by Rohit Dasgupta - An interactive web game featuring retro gaming elements",
  },
};

export default function DinoLuzziLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

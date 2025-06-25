import Footer from "@/components/Footer";
import WorkPage from "@/components/Works";
import PageTransition, { TransitionOverlay } from "@/components/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROHIT DASGUPTA | Work & Projects",
  description:
    "Explore the portfolio of work and projects by Rohit Dasgupta - Full Stack Developer. See my latest web development projects, technical skills, and creative solutions.",
  openGraph: {
    title: "ROHIT DASGUPTA | Work & Projects",
    description:
      "Explore the portfolio of work and projects by Rohit Dasgupta - Full Stack Developer",
  },
};

function WorkPageRoute() {
  return (
    <>
      <TransitionOverlay />
      <PageTransition backgroundColor="bg-gray-50">
        <WorkPage />
      </PageTransition>
      <Footer />
    </>
  );
}

export default WorkPageRoute;

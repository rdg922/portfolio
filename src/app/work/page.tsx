import Footer from "@/components/Footer";
import WorkPage from "@/components/Works";
import Navbar from "@/components/Navbar";
import PageTransition, { TransitionOverlay } from "@/components/PageTransition";
export default function () {
  return (
    <>
      <TransitionOverlay />
      <Navbar />
      <PageTransition backgroundColor="bg-gray-50">
        <WorkPage />
      </PageTransition>
      <Footer />
    </>
  );
}

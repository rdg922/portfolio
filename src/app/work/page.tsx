import Footer from "@/components/Footer";
import WorkPage from "@/components/Works";
import PageTransition, { TransitionOverlay } from "@/components/PageTransition";
export default function () {
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

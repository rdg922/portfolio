import Footer from "@/components/Footer";
import WorkPage from "@/components/Works";
import PageTransition, { TransitionOverlay } from "@/components/PageTransition";

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

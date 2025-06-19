"use client";
import Navbar from "../components/Navbar";
import InteractiveBackground from "../components/InteractiveBackground";
import PageTransition, {
  TransitionOverlay,
  triggerPageTransition,
} from "../components/PageTransition";

export default function Home() {
  const handleExploreClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const target = event.currentTarget;
    triggerPageTransition("/about", target, "#a3e635"); // lime-400
  };

  return (
    <>
      <TransitionOverlay />
      <div className="min-h-screen">
        <Navbar />
        <PageTransition backgroundColor="bg-gradient-to-br from-yellow-300 via-pink-300 to-cyan-300">
          {/* Hero Section */}
          <InteractiveBackground>
            <div className="text-center px-4 relative z-10">
              <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1 mb-8 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:transform hover:-rotate-2 transition-all duration-300">
                <h1 className="text-6xl md:text-8xl font-black text-black mb-6 uppercase tracking-tight transform rotate-1">
                  ROHIT
                  <br />
                  <span className="text-red-500 hover:text-blue-500 transition-colors duration-300">
                    DASGUPTA
                  </span>
                </h1>
                <div className="w-full h-2 bg-black mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-500 animate-pulse"></div>
                </div>
                <p className="text-xl md:text-2xl font-bold text-black mb-8 uppercase tracking-wide">
                  ⚡ MOVE YOUR MOUSE ⚡<br />
                  <span className="text-purple-600">CLICK THE SHAPES!</span>
                </p>
              </div>
              <button
                onClick={handleExploreClick}
                className="bg-purple-500 hover:bg-black text-white hover:text-purple-500 px-12 py-6 font-black text-xl uppercase tracking-wide border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transform rotate-1 hover:rotate-3 hover:scale-105"
              >
                🔥 EXPLORE NOW 🔥
              </button>
            </div>
          </InteractiveBackground>
        </PageTransition>
      </div>
    </>
  );
}

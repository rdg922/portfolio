"use client";
import Navbar from "../components/Navbar";
import InteractiveBackground from "../components/InteractiveBackground";
import {
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
      <div className="min-h-screen bg-yellow-300">
        <Navbar />

        {/* Hero Section */}
        <InteractiveBackground>
          <div className="text-center px-4 relative z-10">
            <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1 mb-8 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:transform hover:-rotate-2 transition-all duration-300">
              <h1 className="text-6xl md:text-8xl font-black text-black mb-6 uppercase tracking-tight transform rotate-1">
                BRUTAL
                <br />
                <span className="text-red-500 hover:text-blue-500 transition-colors duration-300">
                  PORTFOLIO
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

        {/* Footer */}
        <footer className="bg-black text-white py-12 border-t-4 border-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-2 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className={`${
                    i % 3 === 0
                      ? "bg-yellow-400"
                      : i % 3 === 1
                      ? "bg-red-500"
                      : "bg-blue-500"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="bg-white text-black border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] p-6 transform rotate-1 inline-block">
              <p className="font-black text-lg uppercase tracking-wide">
                © 2025 BRUTAL PORTFOLIO
                <br />
                <span className="text-sm">
                  BUILT WITH NEXT.JS & GSAP POWER!
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

"use client";
import Navbar from "../../components/Navbar";
import PageTransition, {
  TransitionOverlay,
} from "../../components/PageTransition";

export default function About() {
  return (
    <>
      <TransitionOverlay />
      <Navbar />
      <PageTransition backgroundColor="bg-lime-400">
        {/* Hero Section */}
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1 mb-8">
              <h1 className="text-6xl md:text-8xl font-black text-black mb-6 uppercase tracking-tight transform rotate-1">
                💀 ABOUT ME 💀
              </h1>
              <div className="w-full h-2 bg-black mb-6"></div>
              <p className="text-xl md:text-2xl font-bold text-black uppercase tracking-wide">
                ⚡ GET TO KNOW THE DEVELOPER ⚡
              </p>
            </div>
          </div>
        </div>

        {/* About Content */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 border-2 border-black transform rotate-45"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 border-2 border-black transform rotate-12"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="bg-pink-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 transform -rotate-1">
                  <p className="text-lg font-bold text-black uppercase tracking-wide">
                    🚀 PASSIONATE DEVELOPER WHO LOVES CREATING BRUTAL AND
                    FUNCTIONAL WEB EXPERIENCES!
                  </p>
                </div>
                <div className="bg-cyan-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 transform rotate-1">
                  <p className="text-lg font-bold text-black uppercase tracking-wide">
                    ⚡ EXPERT IN REACT, NEXT.JS, AND GSAP ANIMATIONS THAT
                    ACTUALLY WORK!
                  </p>
                </div>
                <div className="bg-yellow-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 transform -rotate-1">
                  <p className="text-lg font-bold text-black uppercase tracking-wide">
                    💀 5+ YEARS OF CRUSHING CODE AND BUILDING DIGITAL
                    EXPERIENCES!
                  </p>
                </div>
              </div>
              <div className="bg-orange-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-80 flex items-center justify-center transform rotate-2">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <span className="text-2xl font-black text-black uppercase">
                    DEVELOPER FACE
                  </span>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-12 transform rotate-1">
              <h2 className="text-4xl font-black text-black mb-8 uppercase tracking-tight transform -rotate-1">
                🔥 MY BRUTAL SKILLS 🔥
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { skill: "REACT", color: "bg-blue-500" },
                  { skill: "NEXT.JS", color: "bg-black" },
                  { skill: "TYPESCRIPT", color: "bg-blue-600" },
                  { skill: "GSAP", color: "bg-green-500" },
                  { skill: "TAILWIND", color: "bg-cyan-500" },
                  { skill: "NODE.JS", color: "bg-green-600" },
                  { skill: "PYTHON", color: "bg-yellow-500" },
                  { skill: "DESIGN", color: "bg-purple-500" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${item.color} border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-4 text-center transform hover:rotate-3 transition-all duration-200`}
                  >
                    <span className="font-black text-white uppercase text-sm">
                      {item.skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="bg-purple-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1">
              <h2 className="text-4xl font-black text-black mb-8 uppercase tracking-tight">
                ⚡ MY JOURNEY ⚡
              </h2>
              <div className="space-y-6">
                {[
                  {
                    year: "2024",
                    title: "SENIOR DEVELOPER",
                    desc: "BUILDING BRUTAL EXPERIENCES",
                  },
                  {
                    year: "2022",
                    title: "FULL-STACK DEV",
                    desc: "MASTERING THE STACK",
                  },
                  {
                    year: "2020",
                    title: "FRONTEND NINJA",
                    desc: "LEARNING THE ROPES",
                  },
                  {
                    year: "2019",
                    title: "CODE NEWBIE",
                    desc: "FIRST HELLO WORLD",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-black text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-4 py-2 font-black">
                      {item.year}
                    </div>
                    <div className="bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-4 flex-1">
                      <h3 className="font-black text-black uppercase">
                        {item.title}
                      </h3>
                      <p className="font-bold text-black text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-12 border-t-4 border-white relative overflow-hidden">
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
      </PageTransition>
    </>
  );
}

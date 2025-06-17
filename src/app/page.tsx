"use client";
import Navbar from "../components/Navbar";
import InteractiveBackground from "../components/InteractiveBackground";

export default function Home() {
  return (
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
          <button className="bg-purple-500 hover:bg-black text-white hover:text-purple-500 px-12 py-6 font-black text-xl uppercase tracking-wide border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transform rotate-1 hover:rotate-3 hover:scale-105">
            🔥 EXPLORE NOW 🔥
          </button>
        </div>
      </InteractiveBackground>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-lime-400 border-t-4 border-b-4 border-black relative"
      >
        <div className="max-w-4xl mx-auto px-4 relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 border-2 border-black transform rotate-45"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 border-2 border-black transform rotate-12"></div>

          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-12 transform rotate-1">
            <h2 className="text-5xl font-black text-black mb-8 uppercase tracking-tight transform -rotate-1">
              💀 ABOUT ME 💀
            </h2>
            <div className="w-full h-1 bg-black mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-pink-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 transform -rotate-1">
                <p className="text-lg font-bold text-black uppercase tracking-wide">
                  🚀 PASSIONATE DEVELOPER WHO LOVES CREATING BRUTAL AND
                  FUNCTIONAL WEB EXPERIENCES!
                </p>
              </div>
              <div className="bg-cyan-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 transform rotate-1">
                <p className="text-lg font-bold text-black uppercase tracking-wide">
                  ⚡ EXPERT IN REACT, NEXT.JS, AND GSAP ANIMATIONS THAT ACTUALLY
                  WORK!
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
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-purple-400 relative overflow-hidden"
      >
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-4 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="bg-black"></div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-12 transform -rotate-1 text-center">
            <h2 className="text-5xl font-black text-black mb-4 uppercase tracking-tight">
              🔥 MY BRUTAL WORK 🔥
            </h2>
            <div className="w-full h-2 bg-black"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { bg: "bg-red-500", emoji: "💥", title: "EXPLOSIVE PROJECT" },
              { bg: "bg-blue-500", emoji: "⚡", title: "ELECTRIC WORK" },
              { bg: "bg-green-500", emoji: "🚀", title: "ROCKET SPEED" },
              { bg: "bg-pink-500", emoji: "💀", title: "KILLER APP" },
              { bg: "bg-orange-500", emoji: "🔥", title: "HOT STUFF" },
              { bg: "bg-cyan-500", emoji: "💎", title: "DIAMOND CODE" },
            ].map((project, index) => (
              <div key={index} className="group">
                <div
                  className={`${project.bg} border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden transform hover:rotate-2 transition-all duration-200 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]`}
                >
                  <div className="h-48 bg-white border-b-4 border-black flex items-center justify-center">
                    <span className="text-6xl">{project.emoji}</span>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-black text-black mb-2 uppercase tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-black font-bold mb-4 uppercase text-sm">
                      MODERN WEB DEV WITH BRUTAL DESIGN!
                    </p>
                    <button className="bg-black text-white hover:bg-yellow-400 hover:text-black px-4 py-2 font-black text-sm uppercase border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]">
                      VIEW →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-red-400 border-t-4 border-black relative"
      >
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-10 w-6 h-6 bg-yellow-400 border-2 border-black transform rotate-45"></div>
          <div className="absolute top-10 right-10 w-8 h-8 bg-blue-500 border-2 border-black transform -rotate-12"></div>
          <div className="absolute bottom-0 left-1/3 w-4 h-4 bg-green-500 border-2 border-black"></div>

          <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 mb-8 transform rotate-1">
            <h2 className="text-5xl font-black text-black mb-4 uppercase tracking-tight transform -rotate-1">
              🤝 LET'S WORK!
            </h2>
            <div className="w-full h-2 bg-black mb-6"></div>
            <p className="text-xl font-bold text-black mb-8 uppercase tracking-wide">
              READY TO CREATE SOMETHING ABSOLUTELY BRUTAL?
            </p>
          </div>

          <button className="bg-yellow-400 hover:bg-black text-black hover:text-yellow-400 px-16 py-8 font-black text-2xl uppercase tracking-wide border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] transform -rotate-2">
            💌 CONTACT ME NOW! 💌
          </button>
        </div>
      </section>

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
              <span className="text-sm">BUILT WITH NEXT.JS & GSAP POWER!</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

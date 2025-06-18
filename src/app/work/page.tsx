"use client";
import Navbar from "../../components/Navbar";
import PageTransition, {
  TransitionOverlay,
} from "../../components/PageTransition";

export default function Work() {
  return (
    <>
      <TransitionOverlay />
      <Navbar />
      <PageTransition backgroundColor="bg-purple-400">
        {/* Hero Section */}
        <div className="pt-32 pb-20 px-4 relative overflow-hidden">
          {/* Background patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 gap-4 h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="bg-black"></div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="bg-yellow-400 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1 mb-8">
              <h1 className="text-6xl md:text-8xl font-black text-black mb-6 uppercase tracking-tight transform rotate-1">
                🔥 MY BRUTAL WORK 🔥
              </h1>
              <div className="w-full h-2 bg-black mb-6"></div>
              <p className="text-xl md:text-2xl font-bold text-black uppercase tracking-wide">
                ⚡ PROJECTS THAT ACTUALLY WORK ⚡
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <section className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  bg: "bg-red-500",
                  emoji: "💥",
                  title: "EXPLOSIVE PROJECT",
                  desc: "A BRUTAL E-COMMERCE PLATFORM",
                  tech: "REACT • NEXT.JS • STRIPE",
                },
                {
                  bg: "bg-blue-500",
                  emoji: "⚡",
                  title: "ELECTRIC WORK",
                  desc: "LIGHTNING-FAST PORTFOLIO SITE",
                  tech: "GSAP • TAILWIND • TYPESCRIPT",
                },
                {
                  bg: "bg-green-500",
                  emoji: "🚀",
                  title: "ROCKET SPEED",
                  desc: "PERFORMANCE DASHBOARD APP",
                  tech: "REACT • D3.JS • NODE.JS",
                },
                {
                  bg: "bg-pink-500",
                  emoji: "💀",
                  title: "KILLER APP",
                  desc: "SOCIAL MEDIA MANAGEMENT TOOL",
                  tech: "NEXT.JS • PRISMA • POSTGRESQL",
                },
                {
                  bg: "bg-orange-500",
                  emoji: "🔥",
                  title: "HOT STUFF",
                  desc: "REAL-TIME CHAT APPLICATION",
                  tech: "SOCKET.IO • REACT • EXPRESS",
                },
                {
                  bg: "bg-cyan-500",
                  emoji: "💎",
                  title: "DIAMOND CODE",
                  desc: "CRYPTOCURRENCY TRACKER",
                  tech: "REACT • CHARTS.JS • API",
                },
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
                      <p className="text-black font-bold mb-2 uppercase text-sm">
                        {project.desc}
                      </p>
                      <p className="text-gray-600 font-bold mb-4 text-xs">
                        {project.tech}
                      </p>
                      <div className="flex space-x-2">
                        <button className="bg-black text-white hover:bg-yellow-400 hover:text-black px-4 py-2 font-black text-sm uppercase border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]">
                          VIEW →
                        </button>
                        <button className="bg-purple-400 text-black hover:bg-black hover:text-purple-400 px-4 py-2 font-black text-sm uppercase border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]">
                          CODE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Project */}
            <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-1">
              <h2 className="text-4xl font-black text-black mb-8 uppercase tracking-tight transform -rotate-1 text-center">
                🌟 FEATURED PROJECT 🌟
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-64 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-8xl mb-4">🏆</div>
                    <span className="text-2xl font-black uppercase">
                      AWARD WINNER
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-black uppercase">
                    BRUTAL CMS PLATFORM
                  </h3>
                  <p className="text-lg font-bold text-black">
                    A CONTENT MANAGEMENT SYSTEM THAT DOESN'T SUCK! BUILT WITH
                    MODERN TECH AND BRUTAL DESIGN PRINCIPLES.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "NEXT.JS",
                      "TYPESCRIPT",
                      "PRISMA",
                      "POSTGRESQL",
                      "TAILWIND",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="bg-black text-white px-3 py-1 font-black text-xs uppercase border-2 border-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button className="bg-red-500 text-white hover:bg-black hover:text-red-500 px-6 py-3 font-black text-sm uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]">
                      LIVE DEMO
                    </button>
                    <button className="bg-cyan-400 text-black hover:bg-black hover:text-cyan-400 px-6 py-3 font-black text-sm uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]">
                      VIEW CODE
                    </button>
                  </div>
                </div>
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

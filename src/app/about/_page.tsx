// Commented out for now
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
            <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1">
              <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tight transform rotate-1">
                ABOUT ME
              </h1>
            </div>
          </div>
        </div>

        {/* About Content */}
        <section className="py-10 relative">
          <div className="max-w-4xl mx-auto px-4 relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 border-2 border-black transform rotate-45"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 border-2 border-black transform rotate-12"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="bg-pink-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 transform -rotate-1">
                  <p className="text-lg font-bold text-black uppercase tracking-wide">
                    🚀 A FULL-STACK DEVELOPER BUILDING IMPACTFUL, AI-READY
                    APPLICATIONS.
                  </p>
                </div>
                <div className="bg-cyan-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 transform rotate-1">
                  <p className="text-lg font-bold text-black uppercase tracking-wide">
                    ⚡ SKILLED IN PYTHON, JAVASCRIPT, AND AWS, I AUTOMATE
                    DEPLOYMENTS AND ENGINEER ROBUST SOLUTIONS.
                  </p>
                </div>
                <div className="bg-yellow-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 transform -rotate-1">
                  <p className="text-lg font-bold text-black uppercase tracking-wide">
                    💀 AWARD-WINNING HACKATHON COMPETITOR AND OPEN SOURCE TECH
                    LEAD.
                  </p>
                </div>
              </div>
              <div className="bg-orange-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-80 flex items-center justify-center transform rotate-2">
                <div className="text-center">
                  <div className="text-6xl mb-4">🐊</div>
                  <span className="text-2xl font-black text-black uppercase">
                    GATOR DEVELOPER
                  </span>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-12 transform rotate-1">
              <h2 className="text-4xl font-black text-black mb-8 uppercase tracking-tight transform -rotate-1">
                🔥 MY SKILLSET 🔥
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { skill: "PYTHON", color: "bg-blue-500" },
                  { skill: "JAVASCRIPT", color: "bg-yellow-400" },
                  { skill: "NEXT.JS", color: "bg-black" },
                  { skill: "REACT", color: "bg-blue-600" },
                  { skill: "AWS", color: "bg-orange-500" },
                  { skill: "SQL", color: "bg-cyan-500" },
                  { skill: "DOCKER", color: "bg-blue-700" },
                  { skill: "GIT", color: "bg-red-500" },
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
                    title: "JUNIOR DEVELOPER, EMERGENCY VENTURES",
                    desc: "ATTRACTED $10K IN INVESTMENTS VIA AN MVP. AUTOMATED DEPLOYMENT WITH CI/CD, REDUCING RELEASE TIME BY 80%.",
                  },
                  {
                    year: "2025",
                    title: "TECH LEAD, UF OPEN SOURCE CLUB",
                    desc: "MENTORED 8 MEMBERS AND ENHANCED CODE STABILITY WITH NEW GIT WORKFLOWS.",
                  },
                  {
                    year: "2023",
                    title: "1ST PLACE, LOCKHEED MARTIN'S CODEQUEST",
                    desc: "SECURED TOP HONORS IN A STATE-WIDE PROGRAMMING COMPETITION.",
                  },
                  {
                    year: "2027",
                    title: "B.S. IN COMP SCI & MATH, UNIV. OF FLORIDA",
                    desc: "NATIONAL MERIT FINALIST ON A FULL-RIDE SCHOLARSHIP.",
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
                © 2025 ROHIT DASGUPTA
                <br />
                <span className="text-sm">
                  BUILT WITH NEXT.JS, REACT, & TAILWIND CSS
                </span>
              </p>
            </div>
          </div>
        </footer>
      </PageTransition>
    </>
  );
}

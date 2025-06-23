"use client";
import Navbar from "../../components/Navbar";
import PageTransition, {
  TransitionOverlay,
} from "../../components/PageTransition";

export default function Contact() {
  return (
    <>
      <TransitionOverlay />
      <Navbar />
      <PageTransition backgroundColor="bg-cyan-400">
        {/* Hero Section */}
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1 mb-8">
              <h1 className="text-6xl md:text-8xl font-black text-black mb-6 uppercase tracking-tight transform rotate-1">
                🤝 LET'S WORK!
              </h1>
              <div className="w-full h-2 bg-black mb-6"></div>
              <p className="text-xl md:text-2xl font-bold text-black uppercase tracking-wide">
                ⚡ READY TO CREATE SOMETHING BRUTAL? ⚡
              </p>
            </div>
          </div>
        </div>

        {/* Contact Content */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-10 w-6 h-6 bg-yellow-400 border-2 border-black transform rotate-45"></div>
            <div className="absolute top-10 right-10 w-8 h-8 bg-blue-500 border-2 border-black transform -rotate-12"></div>
            <div className="absolute bottom-0 left-1/3 w-4 h-4 bg-green-500 border-2 border-black"></div>

            <div className="grid gap-12">
              {/* Contact Form */}
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-yellow-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 transform rotate-1">
                  <h3 className="text-2xl font-black text-black mb-4 uppercase">
                    📧 EMAIL ME
                  </h3>
                  <p className="text-lg font-bold text-black uppercase">
                    R.DASGUPTA@UFL.EDU
                  </p>
                </div>

                <div className="bg-purple-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 transform rotate-2">
                  <h3 className="text-2xl font-black text-black mb-4 uppercase">
                    💬 SOCIAL MEDIA
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="https://linkedin.com/in/dasgupta-rohit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg font-bold text-black uppercase hover:text-white transition-colors"
                    >
                      LINKEDIN: /IN/DASGUPTA-ROHIT
                    </a>
                    <a
                      href="https://github.com/rdg922"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg font-bold text-black uppercase hover:text-white transition-colors"
                    >
                      GITHUB: /RDG922
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1">
                <h2 className="text-3xl font-black text-black mb-6 uppercase tracking-tight">
                  💌 SEND A MESSAGE
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-black font-black uppercase text-sm mb-2">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold uppercase focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all duration-150"
                      placeholder="JOHN BRUTAL"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-black uppercase text-sm mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      className="w-full p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold uppercase focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all duration-150"
                      placeholder="JOHN@BRUTAL.COM"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-black uppercase text-sm mb-2">
                      PROJECT DETAILS
                    </label>
                    <textarea
                      rows={5}
                      className="w-full p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold uppercase focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all duration-150 resize-none"
                      placeholder="TELL ME ABOUT YOUR BRUTAL PROJECT..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-black text-white hover:text-red-500 px-8 py-4 font-black text-lg uppercase tracking-wide border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px]"
                  >
                    🚀 SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <button className="bg-orange-500 hover:bg-black text-black hover:text-orange-500 px-16 py-8 font-black text-2xl uppercase tracking-wide border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] transform -rotate-2">
                💌 CONTACT ME NOW! 💌
              </button>
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

"use client";
import Navbar from "../components/Navbar";
import InteractiveBackground from "../components/InteractiveBackground";
import PageTransition, {
  TransitionOverlay,
  triggerPageTransition,
} from "../components/PageTransition";

export default function Home() {
  const handleConnectClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const target = event.currentTarget;
    triggerPageTransition("/contact", target, "bg-cyan-400"); // cyan-400
  };

  const handleResumeDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Text version for now
    link.download = "Rohit-Dasgupta-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                  Full Stack Developer
                  <br />
                  <span className="text-purple-600">
                    CS + Math @ the University of Florida{" "}
                  </span>
                </p>
              </div>

              {/* Action Buttons Section */}
              <div className="max-w-4xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform -rotate-1">
                    <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">
                      📄 GET MY RESUME
                    </h3>
                    <p className="text-lg font-bold text-black mb-6 uppercase tracking-wide">
                      Download my latest resume with all experience and skills
                    </p>
                    <button
                      onClick={handleResumeDownload}
                      className="bg-green-500 hover:bg-black text-white hover:text-green-500 px-8 py-4 font-black text-lg uppercase tracking-wide border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] w-full"
                    >
                      📥 DOWNLOAD RESUME
                    </button>
                  </div>

                  <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-1">
                    <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">
                      💬 LET'S CONNECT
                    </h3>
                    <p className="text-lg font-bold text-black mb-6 uppercase tracking-wide">
                      Ready to discuss opportunities or collaborate?
                    </p>
                    <button
                      onClick={handleConnectClick}
                      className="bg-cyan-500 hover:bg-black text-white hover:text-cyan-500 px-8 py-4 font-black text-lg uppercase tracking-wide border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] w-full"
                    >
                      🤝 GET IN TOUCH
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </InteractiveBackground>
        </PageTransition>
      </div>
    </>
  );
}

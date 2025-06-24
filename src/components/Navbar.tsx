"use client";
import { useNavbar } from "../contexts/NavbarContext";

export default function Navbar() {
  const { isScrolled, handleNavigation, navbarRefs, config } = useNavbar();
  const { container, leftContentRef, rightContentRef } = navbarRefs;
  const { TRANSITION_DURATION } = config;

  return (
    <nav
      ref={container}
      className={`fixed left-1/2 transform -translate-x-1/2 z-[10000] transition-all ease-out ${
        isScrolled
          ? "top-4 w-full bg-yellow-400 outline-4 outline-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg backdrop-blur-sm"
          : "top-0 w-full pt-4 bg-lime-300 outline-b-4 outline-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      }`}
      style={{
        transitionDuration: `${TRANSITION_DURATION}s`,
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Left Content */}
          <div ref={leftContentRef} className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-black text-black uppercase tracking-tight transform -rotate-1">
                <a
                  href="/"
                  onClick={(e) =>
                    handleNavigation(
                      "/",
                      "bg-gradient-to-br from-yellow-300 via-pink-300 to-cyan-300",
                      e
                    )
                  }
                  className=" bg-yellow-300 px-4 py-2 tracking-wide outline-2 outline-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  ROHIT
                </a>
              </h1>
            </div>
          </div>

          {/* Center Content (always visible) */}
          {/* <div
            ref={centerContentRef}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="hidden md:block">
              <div className="ml-6 flex items-baseline space-x-2">
                <a
                  href="/"
                  onClick={(e) =>
                    handleNavigation(
                      "/",
                      "bg-gradient-to-br from-yellow-300 via-pink-300 to-cyan-300",
                      e
                    )
                  }
                  className="bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 px-4 py-2 font-bold text-sm uppercase tracking-wide outline-2 outline-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  HOME
                </a>
              </div>
            </div>
          </div> */}

          {/* Right Content */}
          <div ref={rightContentRef} className="flex items-center space-x-3">
            <a
              href="https://github.com/rdg922"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-black text-white hover:text-gray-300 px-4 py-2 font-black text-sm uppercase tracking-wide outline-2 outline-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transform -rotate-1"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/dasgupta-rohit/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-black text-white hover:text-blue-400 px-4 py-2 font-black text-sm uppercase tracking-wide outline-2 outline-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transform rotate-1"
            >
              LINKEDIN
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="bg-orange-400 text-black hover:bg-black hover:text-orange-400 p-3 font-bold outline-2 outline-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

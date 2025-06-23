"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { triggerPageTransition } from "./PageTransition";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const container = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);

  // ===== NAVBAR CONFIGURATION =====
  const SCROLL_THRESHOLD = 20; // Pixels to scroll before switching states
  const TRANSITION_DURATION = 0.6; // Animation duration in seconds (smoother at 0.8)
  // ================================

  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavigation = (
    url: string,
    backgroundColor: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    const target = event.currentTarget;
    triggerPageTransition(url, target, backgroundColor);
  };

  const handleContactClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const target = event.currentTarget;
    triggerPageTransition("/contact", target, "bg-cyan-400"); // cyan-400
  };

  useGSAP(
    () => {
      const navContainer = container.current;
      const leftContent = leftContentRef.current;
      const rightContent = rightContentRef.current;
      const centerContent = centerContentRef.current;

      if (!navContainer || !leftContent || !rightContent || !centerContent)
        return;

      // Get full screen width for proper animation
      let initialWidth = window.innerWidth;

      // Function to update widths and timeline
      const updateWidths = () => {
        initialWidth = window.innerWidth;

        // Check current scroll position to determine width
        const currentScrollY = window.scrollY;
        const shouldBeScrolled = currentScrollY > SCROLL_THRESHOLD;

        // Set width based on scroll state
        if (shouldBeScrolled) {
          gsap.set(navContainer, { width: initialWidth * 0.5 });
        } else {
          gsap.set(navContainer, { width: initialWidth });
        }
      };

      // Set initial state - content spread out when at top
      gsap.set(leftContent, { x: 0, scale: 1 });
      gsap.set(rightContent, { x: 0, scale: 1 });
      gsap.set(centerContent, { scale: 1, opacity: 1 });
      gsap.set(navContainer, { width: initialWidth });

      // Add resize event listener
      const handleResize = (e: UIEvent) => {
        console.log(e);
        updateWidths();
      };

      window.addEventListener("resize", handleResize);

      // Create ScrollTrigger for binary switch
      ScrollTrigger.create({
        trigger: "body",
        start: `${SCROLL_THRESHOLD}px top`,
        onEnter: () => {
          // Animate to current screen width * 0.5
          gsap.to(navContainer, {
            width: window.innerWidth * 0.5,
            duration: TRANSITION_DURATION,
            ease: "power2.out",
          });
          // Delay the state change to allow outline to animate properly
          gsap.delayedCall(0, () => setIsScrolled(true));
        },
        onLeaveBack: () => {
          // Keep outline visible until animation completes
          gsap.delayedCall(TRANSITION_DURATION, () => setIsScrolled(false));
          // Animate to current screen width
          gsap.to(navContainer, {
            width: window.innerWidth,
            duration: TRANSITION_DURATION,
            ease: "power2.out",
          });
        },
      });

      // Cleanup function
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: container }
  );

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
                ⚡ ROHIT
              </h1>
            </div>
          </div>

          {/* Center Content (always visible) */}
          <div
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
                {/* <a
                  href="/about"
                  onClick={(e) => handleNavigation("/about", "bg-lime-400", e)}
                  className="bg-lime-400 text-black hover:bg-black hover:text-lime-400 px-4 py-2 font-bold text-sm uppercase tracking-wide outline-2 outline-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  ABOUT
                </a> */}
                <a
                  href="/work"
                  onClick={(e) => handleNavigation("/work", "bg-gray-100", e)}
                  className="bg-gray-100 text-black hover:bg-black hover:text-gray-100 px-4 py-2 font-bold text-sm uppercase tracking-wide outline-2 outline-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  WORK
                </a>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div ref={rightContentRef} className="flex items-center space-x-3">
            <button
              onClick={handleContactClick}
              className="bg-cyan-500 hover:bg-black text-white hover:text-cyan-500 px-6 py-3 font-black text-sm uppercase tracking-wide outline-2 outline-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transform -rotate-1"
            >
              CONTACT
            </button>
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

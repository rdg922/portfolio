"use client";
import { createContext, useContext, useRef, useState, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { triggerPageTransition } from "../components/PageTransition";

gsap.registerPlugin(ScrollTrigger);

// ===== NAVBAR CONFIGURATION =====
const SCROLL_THRESHOLD = 20; // Pixels to scroll before switching states
const TRANSITION_DURATION = 0.6; // Animation duration in seconds
const MOBILE_BREAKPOINT = 768; // Mobile breakpoint in pixels
// ================================

interface NavbarContextType {
  isScrolled: boolean;
  handleNavigation: (
    url: string,
    backgroundColor: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => void;
  navbarRefs: {
    container: React.RefObject<HTMLDivElement | null>;
    leftContentRef: React.RefObject<HTMLDivElement | null>;
    rightContentRef: React.RefObject<HTMLDivElement | null>;
  };
  config: {
    SCROLL_THRESHOLD: number;
    TRANSITION_DURATION: number;
  };
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};

interface NavbarProviderProps {
  children: ReactNode;
}

export const NavbarProvider = ({ children }: NavbarProviderProps) => {
  const container = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

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

  useGSAP(
    () => {
      const navContainer = container.current;
      const leftContent = leftContentRef.current;
      const rightContent = rightContentRef.current;

      if (!navContainer || !leftContent || !rightContent) return;

      // Get full screen width for proper animation
      let initialWidth = window.innerWidth;

      // Function to update widths and timeline
      const updateWidths = () => {
        initialWidth = window.innerWidth;
        const currentIsMobile = window.innerWidth < MOBILE_BREAKPOINT;

        // Check current scroll position to determine width
        const currentScrollY = window.scrollY;
        const shouldBeScrolled =
          currentScrollY > SCROLL_THRESHOLD && !currentIsMobile;

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
      gsap.set(navContainer, { width: initialWidth });

      // Set initial mobile state
      // const initialIsMobile = window.innerWidth < MOBILE_BREAKPOINT;

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
          // Only animate and set scrolled state if not mobile
          if (window.innerWidth >= MOBILE_BREAKPOINT) {
            // Animate to current screen width * 0.5
            gsap.to(navContainer, {
              width: window.innerWidth * 0.5,
              duration: TRANSITION_DURATION,
              ease: "power2.out",
            });
            // Delay the state change to allow outline to animate properly
            gsap.delayedCall(0, () => setIsScrolled(true));
          }
        },
        onLeaveBack: () => {
          // Only animate and set scrolled state if not mobile
          if (window.innerWidth >= MOBILE_BREAKPOINT) {
            // Keep outline visible until animation completes
            gsap.delayedCall(TRANSITION_DURATION, () => setIsScrolled(false));
            // Animate to current screen width
            gsap.to(navContainer, {
              width: window.innerWidth,
              duration: TRANSITION_DURATION,
              ease: "power2.out",
            });
          }
        },
      });

      // Cleanup function
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: container }
  );

  const contextValue: NavbarContextType = {
    isScrolled: isScrolled, // Always false on mobile
    handleNavigation,
    navbarRefs: {
      container,
      leftContentRef,
      rightContentRef,
    },
    config: {
      SCROLL_THRESHOLD,
      TRANSITION_DURATION,
    },
  };

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
};

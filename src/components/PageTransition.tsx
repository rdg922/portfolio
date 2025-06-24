"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PageTransitionProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function PageTransition({
  children,
  backgroundColor = "bg-yellow-300",
}: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate content in when component mounts
      const container = containerRef.current;
      if (!container) return;

      // Set initial state immediately to prevent flash
      gsap.set(container, { opacity: 1 });
      gsap.set(container.children, { opacity: 0, y: 30 });

      // Animate content in
      gsap.to(container.children, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.3,
        stagger: 0.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <div className={`min-h-screen ${backgroundColor}`}>
      <div ref={containerRef} style={{ opacity: 0 }}>
        {children}
      </div>
    </div>
  );
}

// Global transition overlay component
export function TransitionOverlay() {
  useEffect(() => {
    // Create transition overlay element if it doesn't exist
    if (!document.getElementById("transition-overlay")) {
      const overlay = document.createElement("div");
      overlay.id = "transition-overlay";
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        pointer-events: none;
        clip-path: circle(0px at 50% 50%);
      `;
      document.body.appendChild(overlay);
    }
  }, []);

  return null;
}

// Transition trigger function
export function triggerPageTransition(
  targetUrl: string,
  buttonElement: HTMLElement,
  backgroundColor: string = "bg-yellow-300"
) {
  const overlay = document.getElementById("transition-overlay");

  if (!overlay || !buttonElement) return;

  // Get button position and dimensions
  const buttonRect = buttonElement.getBoundingClientRect();
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  // Calculate exact radius needed to cover screen from button position
  const maxDistance = Math.max(
    Math.sqrt(buttonCenterX ** 2 + buttonCenterY ** 2),
    Math.sqrt((window.innerWidth - buttonCenterX) ** 2 + buttonCenterY ** 2),
    Math.sqrt(buttonCenterX ** 2 + (window.innerHeight - buttonCenterY) ** 2),
    Math.sqrt(
      (window.innerWidth - buttonCenterX) ** 2 +
        (window.innerHeight - buttonCenterY) ** 2
    )
  );

  // Set overlay to full screen with clipping mask
  overlay.className = `fixed top-0 left-0 w-screen h-screen z-[9999] pointer-events-auto ${backgroundColor}`;
  overlay.style.clipPath = `circle(0px at ${buttonCenterX}px ${buttonCenterY}px)`;
  overlay.style.pointerEvents = "all";

  // Animate clipping mask expansion
  gsap.to(overlay, {
    clipPath: `circle(${maxDistance}px at ${buttonCenterX}px ${buttonCenterY}px)`,
    duration: 0.8,
    ease: "power2.inOut",
    onComplete: () => {
      // Navigate to new page
      window.location.href = targetUrl;
    },
  });
}

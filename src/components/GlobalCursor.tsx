"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

export default function GlobalCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    // Hide default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Position dot at exact mouse position
      gsap.to(cursorDot, {
        x: clientX - 3, // Half of 8px (w-2) to center the dot
        y: clientY - 3, // Half of 8px (h-2) to center the dot
        duration: 0.05,
      });
      // // Center the square cursor on the dot position
      gsap.to(cursor, {
        x: clientX - 16, // Half of 32px (w-8) to center the square
        y: clientY - 16, // Half of 32px (h-8) to center the square
        duration: 0.15,
        ease: "none",
      });

      // Ensure no transition-all affects positioning
      cursorDot.style.transition = "none";
      cursor.style.transition = "none";
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1,
      });
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      gsap.to(cursor, {
        scale: isHovering ? 1.5 : 1,
        duration: 0.2,
      });
    };

    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement;

      // Check if hovering over interactive elements
      if (
        target.matches(
          'button, a, input, textarea, [role="button"], .cursor-pointer, .floating-shape'
        ) ||
        target.closest(
          'button, a, input, textarea, [role="button"], .cursor-pointer, .floating-shape'
        )
      ) {
        setIsHovering(true);
        gsap.to(cursor, {
          scale: 1.5,
          duration: 0.3,
        });
        gsap.to(cursorDot, {
          scale: 0.5,
          duration: 0.2,
        });

        // Create hover particles
        createCursorParticle(
          cursor.getBoundingClientRect().left + cursor.offsetWidth / 2,
          cursor.getBoundingClientRect().top + cursor.offsetHeight / 2
        );
      } else {
        setIsHovering(false);
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
        gsap.to(cursorDot, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleElementHover);

    // Cleanup
    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleElementHover);
    };
  }, [isHovering]);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed w-8 h-8 pointer-events-none z-[99999] mix-blend-difference transition-colors duration-300 ${
          isClicking
            ? "bg-red-500 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
            : isHovering
            ? "bg-yellow-400 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            : "bg-black border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
        }`}
      >
        {/* Inner pattern */}
        <div className="w-full h-full relative overflow-hidden">
          {isHovering && (
            <div className="absolute inset-0 bg-black opacity-20">
              <div className="grid grid-cols-2 gap-0.5 h-full p-0.5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="bg-white animate-pulse"></div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cursor dot - follows faster */}
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-white border border-black pointer-events-none z-[9998] mix-blend-difference"
      ></div>

      {/* Cursor trail particles */}
      <div
        id="cursor-particles"
        className="fixed pointer-events-none z-[9997]"
      ></div>
    </>
  );
}

// Utility function to create cursor particles
export function createCursorParticle(x: number, y: number) {
  const particle = document.createElement("div");
  particle.className =
    "absolute w-1 h-1 bg-black border border-white pointer-events-none";
  particle.style.left = x + "px";
  particle.style.top = y + "px";
  particle.style.transform = "translate(-50%, -50%)";

  const container = document.getElementById("cursor-particles");
  if (container) {
    container.appendChild(particle);

    // Animate particle
    gsap.to(particle, {
      x: `random(-30, 30)`,
      y: `random(-30, 30)`,
      rotation: `random(0, 360)`,
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => particle.remove(),
    });
  }
}

"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { createCursorParticle } from "./GlobalCursor";

interface InteractiveBackgroundProps {
  children: React.ReactNode;
}

export default function InteractiveBackground({
  children,
}: InteractiveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Create floating shapes data
  const shapes = [
    {
      id: 1,
      size: "w-16 h-16",
      color: "bg-red-500",
      rotation: 12,
      x: 10,
      y: 10,
    },
    {
      id: 2,
      size: "w-12 h-12",
      color: "bg-blue-500",
      rotation: -15,
      x: 80,
      y: 15,
    },
    {
      id: 3,
      size: "w-20 h-20",
      color: "bg-green-500",
      rotation: 25,
      x: 15,
      y: 70,
    },
    {
      id: 4,
      size: "w-14 h-14",
      color: "bg-purple-500",
      rotation: -8,
      x: 75,
      y: 80,
    },
    {
      id: 5,
      size: "w-10 h-10",
      color: "bg-orange-500",
      rotation: 45,
      x: 50,
      y: 20,
    },
    {
      id: 6,
      size: "w-18 h-18",
      color: "bg-pink-500",
      rotation: -20,
      x: 20,
      y: 45,
    },
    {
      id: 7,
      size: "w-8 h-8",
      color: "bg-cyan-500",
      rotation: 30,
      x: 85,
      y: 50,
    },
    {
      id: 8,
      size: "w-24 h-6",
      color: "bg-yellow-500",
      rotation: -5,
      x: 60,
      y: 85,
    },
  ];

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      // Animate all shapes on load
      gsap.fromTo(
        ".floating-shape",
        {
          scale: 0,
          rotation: 0,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: (i) => shapes[i]?.rotation || 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.5,
        }
      );

      // Continuous floating animation
      gsap.to(".floating-shape", {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        rotation: "+=random(-10, 10)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: {
          each: 0.2,
          from: "random",
        },
      });
    },
    { scope: containerRef }
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      setMousePosition({ x: clientX, y: clientY });

      const mouseX = (clientX / innerWidth - 0.5) * 2;
      const mouseY = (clientY / innerHeight - 0.5) * 2;

      // Move shapes based on mouse position
      gsap.to(".floating-shape", {
        x: (i) => mouseX * (10 + i * 5),
        y: (i) => mouseY * (8 + i * 3),
        duration: 2,
        ease: "power2.out",
        stagger: 0.02,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle shape clicks
  const handleShapeClick = (shapeId: number, e: React.MouseEvent) => {
    e.stopPropagation();

    gsap.to(`.shape-${shapeId}`, {
      scale: 1.5,
      rotation: "+=360",
      duration: 0.6,
      ease: "back.out(1.7)",
      yoyo: true,
      repeat: 1,
    });

    // Create explosion effect
    gsap.fromTo(
      `.shape-${shapeId}`,
      {
        boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
      },
      {
        boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      }
    );

    // Add cursor particles at click position
    createCursorParticle(e.clientX, e.clientY);
  };

  // Handle background clicks for particle explosion
  const handleBackgroundClick = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create temporary particles and cursor particles
    const particles = Array.from({ length: 8 }).map((_, i) => {
      const particle = document.createElement("div");
      particle.className =
        "absolute w-4 h-4 bg-black border-2 border-white pointer-events-none";
      particle.style.left = x + "px";
      particle.style.top = y + "px";
      particle.style.transform = "translate(-50%, -50%)";
      containerRef.current?.appendChild(particle);

      // Animate particle
      gsap.to(particle, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        rotation: `random(0, 360)`,
        scale: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => particle.remove(),
      });

      return particle;
    });

    // Add cursor particles at click position
    createCursorParticle(e.clientX, e.clientY);
  };

  return (
    <section
      ref={containerRef}
      className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 via-pink-300 to-cyan-300 relative overflow-hidden"
      onClick={handleBackgroundClick}
    >
      {/* Interactive floating shapes */}
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`floating-shape shape-${shape.id} absolute ${shape.size} ${shape.color} border-4 border-black cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            transform: `rotate(${shape.rotation}deg)`,
            boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
          }}
          onClick={(e) => handleShapeClick(shape.id, e)}
        >
          {/* Add pattern inside shapes */}
          <div className="w-full h-full relative overflow-hidden">
            {shape.id % 3 === 0 && (
              <div className="absolute inset-0 bg-black opacity-20">
                <div className="grid grid-cols-3 gap-1 h-full p-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="bg-white"></div>
                  ))}
                </div>
              </div>
            )}
            {shape.id % 3 === 1 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-1/2 border-2 border-black bg-white"></div>
              </div>
            )}
            {shape.id % 3 === 2 && (
              <div className="absolute inset-0">
                <div className="w-full h-1/2 bg-black opacity-30"></div>
                <div className="w-full h-1/2 bg-white opacity-30"></div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-20 gap-1 h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="bg-black"></div>
          ))}
        </div>
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-1 bg-black opacity-20 animate-pulse"></div>
        <div
          className="absolute top-3/4 left-0 w-full h-1 bg-black opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute left-1/4 top-0 w-1 h-full bg-black opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute left-3/4 top-0 w-1 h-full bg-black opacity-20 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Glitch effect squares */}
      <div className="absolute top-20 right-10 w-6 h-6 bg-red-500 border-2 border-black animate-ping"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-blue-500 border-2 border-black animate-bounce"></div>
      <div className="absolute top-40 left-1/3 w-5 h-5 bg-green-500 border-2 border-black animate-pulse"></div>

      {children}
    </section>
  );
}

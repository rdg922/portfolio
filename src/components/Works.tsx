"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import PageTransition, { TransitionOverlay } from "./PageTransition";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  year: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "swamphacks-2025",
    title: "SwampHacks 2025 Submission",
    description:
      "24-hour hackathon submission focused on sustainability - food waste prevention app with barcode scanning and recipe generation",
    technologies: ["React Native", "OpenAI API", "OpenFoodFacts", "Tailwind"],
    link: "/work/swamphacks-2025",
    year: "2025",
    image: "/images/swamphacks/image.png",
  },
  {
    id: "edu-africa",
    title: "Safe Cities Project Management",
    description:
      "Project Management platform for Safe Cities, as part of an internship with EDU Africa",
    technologies: ["NextJS", "TRPC", "Drizzle", "Postgres", "Tailwind"],
    link: "/work/edu-africa",
    year: "2025",
    image: "/images/2025-05-17-007.jpg",
  },
  {
    id: "dino-luzzi",
    title: "Dino Luzzi E-Commerce Site",
    description:
      "Won Open Source Club Hackathon with interactive 3D elements in NextJS, TailwindCSS, and Three.js",
    technologies: ["NextJS", "Three.js", "TailwindCSS", "React"],
    link: "/work/dino-luzzi",
    year: "2024",
    image: "/images/dino-luzzi/Dino Page 2.webp",
  },
];

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animations
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          y: -100,
          opacity: 0,
          skewY: 2,
        },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
        }
      );
    }

    // Project card animations with scroll triggers
    projectsRef.current.forEach((project, index) => {
      if (!project) return;

      // Initial state - slightly rotated and scaled down
      gsap.set(project, {
        rotation: (index % 2 === 0 ? 1 : -1) * (Math.random() * 3 + 1),
        scale: 0.95,
        y: 50,
        opacity: 0,
      });

      // Scroll trigger animation
      ScrollTrigger.create({
        trigger: project,
        start: "top 80%",
        end: "bottom 20%",
        animation: gsap.to(project, {
          rotation: 0,
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.1,
        }),
        toggleActions: "play none none reverse",
      });

      // Hover animations for tech stack reveal
      const techStack = project.querySelector(".tech-stack");
      const projectImage = project.querySelector(".project-image");

      if (techStack && projectImage) {
        // Set initial state for tech stack - hidden with neobrutalist transform
        gsap.set(techStack, {
          scale: 0,
          opacity: 0,
          rotation: -5,
          transformOrigin: "top right",
        });

        project.addEventListener("mouseenter", () => {
          // Reveal tech stack with bouncy scale animation
          gsap.to(techStack, {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.4,
            ease: "back.out(2)",
          });

          // Slight image zoom
          gsap.to(projectImage, {
            scale: 1.05,
            duration: 0.3,
            ease: "power1.out",
          });

          // Project card subtle lift
          gsap.to(project, {
            y: -8,
            rotation: index % 3 === 0 ? 0.8 : -0.8,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        project.addEventListener("mouseleave", () => {
          gsap.to(techStack, {
            scale: 0,
            opacity: 0,
            rotation: -5,
            duration: 0.3,
            ease: "power2.in",
          });

          gsap.to(projectImage, {
            scale: 1,
            duration: 0.3,
            ease: "power1.out",
          });

          gsap.to(project, {
            y: 0,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      }
    });

    // Floating mathematical symbols animation
    const mathSymbols = document.querySelectorAll(".math-symbol");
    mathSymbols.forEach((symbol, index) => {
      gsap.to(symbol, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-180, 180)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5,
      });
    });

    // Interactive neobrutalist shapes animation
    const neoBrutalistShapes = document.querySelectorAll(".neo-shape");
    neoBrutalistShapes.forEach((shape, index) => {
      // Continuous floating animation
      gsap.to(shape, {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.3,
      });

      // Hover interaction for mouse proximity
      const handleMouseMove = (e: MouseEvent) => {
        const rect = (shape as HTMLElement).getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );

        if (distance < 200) {
          const repelStrength = (200 - distance) / 200;
          const deltaX = (centerX - e.clientX) * repelStrength * 0.5;
          const deltaY = (centerY - e.clientY) * repelStrength * 0.5;

          gsap.to(shape, {
            x: deltaX,
            y: deltaY,
            scale: 1 + repelStrength * 0.2,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(shape, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      };

      document.addEventListener("mousemove", handleMouseMove);
    });

    // Corner icons hover effects
    const cornerIcons = document.querySelectorAll(".corner-icon");
    cornerIcons.forEach((icon) => {
      gsap.to(icon, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Mathematical symbols for decoration
  const mathSymbols = [
    "∑",
    "∫",
    "∆",
    "∞",
    "π",
    "√",
    "≈",
    "≠",
    "±",
    "∂",
    "Ω",
    "α",
    "β",
    "γ",
    "θ",
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">
        {/* Mathematical background grid */}
        <div className="fixed inset-0 opacity-10 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 35px, #000 35px, #000 36px),
                  repeating-linear-gradient(90deg, transparent, transparent 35px, #000 35px, #000 36px)
                `,
            }}
          />
        </div>

        {/* Neobrutalist floating shapes with shadows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Large geometric shapes */}
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-yellow-400 border-4 border-black rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] opacity-80 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-red-500 border-4 border-black -rotate-45 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] opacity-70"></div>
          <div className="absolute bottom-1/4 left-12 w-40 h-20 bg-blue-500 border-4 border-black rotate-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] opacity-60"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-500 border-4 border-black -rotate-12 shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] opacity-75 rounded-full"></div>

          {/* Medium shapes */}
          <div className="absolute top-1/2 left-8 w-16 h-16 bg-purple-500 border-3 border-black rotate-45 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-50"></div>
          <div className="absolute top-3/4 right-8 w-20 h-12 bg-orange-500 border-3 border-black -rotate-30 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] opacity-65"></div>
          <div className="absolute top-16 right-16 w-14 h-14 bg-pink-500 border-3 border-black rotate-90 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] opacity-55 rounded-full"></div>

          {/* Small accent shapes */}
          <div className="absolute top-40 left-1/2 w-8 h-8 bg-cyan-500 border-2 border-black rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] opacity-60"></div>
          <div className="absolute bottom-40 left-1/3 w-12 h-6 bg-indigo-500 border-2 border-black -rotate-45 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] opacity-45"></div>
          <div className="absolute top-2/3 right-1/2 w-10 h-10 bg-teal-500 border-2 border-black rotate-60 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] opacity-50 rounded-full"></div>
        </div>

        {/* Floating mathematical symbols */}
        {mathSymbols.map((symbol, index) => (
          <div
            key={index}
            className="math-symbol fixed pointer-events-none text-2xl font-bold opacity-10 select-none"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 23 + 17) % 100}%`,
              color:
                index % 3 === 0
                  ? "#000"
                  : index % 3 === 1
                  ? "#ef4444"
                  : "#3b82f6",
            }}
          >
            {symbol}
          </div>
        ))}

        {/* Random corner icons with neobrutalist style */}
        <div className="corner-icon fixed top-8 right-8 text-3xl opacity-20 rotate-12 bg-yellow-300 w-16 h-16 flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          ⚡
        </div>
        <div className="corner-icon fixed top-1/4 left-8 text-2xl opacity-15 -rotate-12 bg-red-300 w-12 h-12 flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          ∞
        </div>
        <div className="corner-icon fixed bottom-1/3 right-12 text-xl opacity-25 rotate-45 bg-blue-300 w-10 h-10 flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          ◊
        </div>
        <div className="corner-icon fixed bottom-8 left-1/4 text-2xl opacity-20 -rotate-6 bg-green-300 w-14 h-14 flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          ※
        </div>

        {/* Header */}
        <div ref={headerRef} className="relative z-10 pt-32 pb-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-8 items-end">
              <div className="col-span-8 relative">
                <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none relative">
                  <span className="block">MY</span>
                  <span className="block text-red-500 ml-12">WORK</span>
                </h1>
                <div className="w-32 h-1 bg-black mt-4 ml-12"></div>
              </div>
              <div className="col-span-4 relative">
                <div className="border-2 border-dotted border-gray-400 p-6 bg-white/50 relative z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-sm font-mono leading-relaxed">
                    Some of my top projects...,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="relative z-10 px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => {
                    if (el) projectsRef.current[index] = el;
                  }}
                  className="group relative"
                >
                  {/* Project number annotation */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 border-2 border-black font-black text-lg flex items-center justify-center z-20 rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Main project container */}
                  <div className="relative border-2 border-dotted border-gray-400 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                    {/* Background accent shape */}
                    {/* <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 border-2 border-black -z-10 rotate-1"></div> */}
                    {/* Cinematic aspect ratio image container */}
                    <div
                      className="project-image relative w-full overflow-hidden border-b-2 border-dotted border-gray-400"
                      style={{ aspectRatio: "2.39/1" }}
                    >
                      {/* Project Image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Image overlay for better text readability */}
                      <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>

                      {/* Project title overlay */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <div className="font-mono text-sm bg-white/90 px-3 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] backdrop-blur-sm">
                          {project.title.replace(/\s+/g, "_")}
                        </div>
                      </div>

                      {/* Tech stack overlay - neobrutalist badges */}
                      <div className="tech-stack absolute top-3 right-3 bg-yellow-400 border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <div className="grid grid-cols-2 gap-1 w-32">
                          {project.technologies
                            .slice(0, 4)
                            .map((tech, techIndex) => (
                              <div
                                key={tech}
                                className="text-[8px] font-black bg-white border border-black px-1 py-0.5 text-center leading-none uppercase tracking-tight shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                                style={
                                  {
                                    // writingMode:
                                    //   tech.length > 6
                                    //     ? "vertical-rl"
                                    //     : "horizontal-tb",
                                    // textOrientation:
                                    //   tech.length > 6 ? "mixed" : "initial",
                                  }
                                }
                              >
                                {tech}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>

                    {/* Project details */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <h3 className="text-2xl font-black leading-tight max-w-xs">
                          {project.title}
                        </h3>
                        <div className="text-right">
                          <div className="font-mono text-sm bg-gray-100 px-3 py-1 border border-gray-300">
                            {project.year}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-8 font-light">
                        {project.description}
                      </p>

                      {/* Action area */}
                      <div className="flex items-center justify-between">
                        <a
                          href={project.link}
                          className="group inline-flex items-center space-x-2 text-black hover:text-red-500 transition-colors duration-300 bg-yellow-300 px-4 py-2 border-2 border-black font-black uppercase text-sm tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200"
                        >
                          <span className="font-mono text-sm uppercase tracking-wider">
                            View Project
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  {/* <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-500 border border-black rotate-45 opacity-80 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div> */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 border-2 border-black rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
                  <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-green-500 border border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
                  {/* {index % 3 === 0 && (
                      <div className="absolute -top-2 right-8 text-xl opacity-30 rotate-12 bg-pink-300 w-8 h-8 flex items-center justify-center border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        ✦
                      </div>
                    )} */}
                  {index % 2 === 0 && (
                    <div className="absolute top-4 -left-3 w-3 h-8 bg-orange-400 border border-black rotate-45 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

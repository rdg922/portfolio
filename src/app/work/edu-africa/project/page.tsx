"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import PageTransition, {
  TransitionOverlay,
  triggerPageTransition,
} from "../../../../components/PageTransition";

gsap.registerPlugin(ScrollTrigger);

interface ProjectSection {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
}

const projectSections: ProjectSection[] = [
  {
    id: "platform-overview",
    title: "Notion-Inspired Workspace",
    description:
      "A comprehensive project management platform combining Notion's content editing capabilities with collaboration features tailored for Safe Cities South Africa. Built with Next.js 14, TypeScript, and Supabase to streamline programme coordination and team collaboration.",
    imageAlt: "Platform Dashboard",
  },
  {
    id: "hierarchical-structure",
    title: "Programme Organization",
    description:
      "Hierarchical programme structure that organizes projects and pages in nested structures. Teams can create programmes, sub-programmes, and individual pages with clear parent-child relationships, enabling efficient navigation and content management.",
    imageAlt: "Programme Hierarchy",
  },
  {
    id: "real-time-collaboration",
    title: "Live Collaboration Engine",
    description:
      "Real-time collaborative editing with conflict resolution powered by Supabase's real-time capabilities. Multiple team members can edit content simultaneously, with live cursors, change highlighting, and automatic conflict resolution.",
    imageAlt: "Real-time Collaboration",
  },
  {
    id: "wysiwyg-editor",
    title: "Rich Text Editor",
    description:
      "WYSIWYG markdown editor with keyboard shortcuts and drag-and-drop functionality. Supports rich formatting, embedded media, tables, and custom blocks. Built for non-technical users with intuitive editing tools.",
    imageAlt: "Content Editor",
  },
  {
    id: "permissions-system",
    title: "Granular Access Control",
    description:
      "Per-page permissions system with View, Comment, and Edit access levels. Role-based permissions ensure sensitive programme information stays secure while enabling appropriate collaboration across teams.",
    imageAlt: "Permissions Management",
  },
  {
    id: "communication-hub",
    title: "Integrated Chat System",
    description:
      "Page-level chat rooms with @mention functionality and a global chat hub for centralized communication. Real-time notifications for mentions, comments, and permission changes keep teams connected and informed.",
    imageAlt: "Chat Interface",
  },
  {
    id: "tech-stack",
    title: "Modern Tech Foundation",
    description:
      "Built on Next.js 14 with TypeScript for type safety, Tailwind CSS for responsive design, tRPC for end-to-end type-safe APIs, Drizzle ORM with Supabase PostgreSQL, and Clerk for authentication. Deployed with modern DevOps practices.",
    imageAlt: "Technology Architecture",
  },
];

export default function ProjectPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectSectionsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // Project sections scroll animations
    projectSectionsRef.current.forEach((section, index) => {
      if (!section) return;

      const isEven = index % 2 === 0;
      const animationType = index % 4;

      // Set different initial states based on layout type
      if (animationType === 0) {
        gsap.set(section, {
          scale: 0.8,
          opacity: 0,
          rotation: isEven ? -5 : 5,
          y: 100,
        });
      } else if (animationType === 1) {
        gsap.set(section, {
          x: isEven ? -150 : 150,
          opacity: 0,
          rotation: isEven ? -3 : 3,
          skewX: isEven ? -5 : 5,
        });
      } else if (animationType === 2) {
        gsap.set(section, {
          scale: 0.6,
          opacity: 0,
          rotation: Math.random() * 40 - 20,
          y: 150,
        });
      } else {
        gsap.set(section, {
          x: isEven ? -200 : 200,
          opacity: 0,
          rotation: isEven ? -8 : 8,
          scale: 0.9,
        });
      }

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        animation: gsap.to(section, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          rotation: 0,
          skewX: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.1,
        }),
        toggleActions: "play none none reverse",
      });

      // Add hover animations for each section
      section.addEventListener("mouseenter", () => {
        gsap.to(section, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      section.addEventListener("mouseleave", () => {
        gsap.to(section, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <TransitionOverlay />
      <Navbar />
      <PageTransition backgroundColor="bg-gray-50">
        <div className="min-h-screen bg-gray-50 text-gray-900 relative">
          {/* Hero Section */}
          <div className="relative pt-32 pb-20 px-8 bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-8">
                  <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
                    <span className="block text-gray-900">Safe Cities</span>
                    <span className="block text-green-600 ml-16">
                      Project Platform
                    </span>
                  </h1>
                  <div className="w-40 h-2 bg-green-600 ml-16 mb-8"></div>
                  <p className="text-xl text-gray-700 max-w-lg ml-16 leading-relaxed mb-8">
                    Building a comprehensive project management platform for
                    Safe Cities South Africa—a Notion-inspired workspace that
                    streamlines programme coordination and enhances team
                    collaboration for community impact.
                  </p>

                  {/* Navigation Links */}
                  <div className="ml-16 flex flex-wrap gap-4">
                    <button
                      onClick={(e) =>
                        triggerPageTransition(
                          "/work",
                          e.currentTarget,
                          "bg-gray-900",
                          "#ffffff"
                        )
                      }
                      className="group inline-flex items-center space-x-2 bg-white border-2 border-gray-900 px-6 py-3 hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                      <span className="font-mono text-sm uppercase tracking-wider">
                        See more works
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>

                    <button
                      onClick={(e) =>
                        triggerPageTransition(
                          "/work/edu-africa/experience",
                          e.currentTarget,
                          "bg-green-600",
                          "#ffffff"
                        )
                      }
                      className="group inline-flex items-center space-x-2 bg-green-600 border-2 border-green-600 px-6 py-3 text-white hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                      <span className="font-mono text-sm uppercase tracking-wider">
                        View Experience
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="relative">
                    <Image
                      src={"/images/2025-05-17-007.jpg"}
                      alt="Safe Cities South Africa team working on the project management platform"
                      width={500}
                      height={400}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Sections */}
          <div className="py-20 px-8">
            <div className="max-w-7xl mx-auto space-y-32">
              {projectSections.map((section, index) => {
                // Define color schemes for each section
                const colorSchemes = [
                  {
                    bg: "bg-yellow-400",
                    accent: "bg-black",
                    text: "text-black",
                    border: "border-black",
                    shadow: "shadow-[8px_8px_0px_0px_#000000]",
                  },
                  {
                    bg: "bg-cyan-400",
                    accent: "bg-purple-600",
                    text: "text-purple-900",
                    border: "border-purple-600",
                    shadow: "shadow-[8px_8px_0px_0px_#7c3aed]",
                  },
                  {
                    bg: "bg-lime-300",
                    accent: "bg-red-500",
                    text: "text-red-900",
                    border: "border-red-500",
                    shadow: "shadow-[8px_8px_0px_0px_#ef4444]",
                  },
                  {
                    bg: "bg-pink-400",
                    accent: "bg-green-700",
                    text: "text-green-900",
                    border: "border-green-700",
                    shadow: "shadow-[8px_8px_0px_0px_#15803d]",
                  },
                  {
                    bg: "bg-orange-400",
                    accent: "bg-blue-800",
                    text: "text-blue-900",
                    border: "border-blue-800",
                    shadow: "shadow-[8px_8px_0px_0px_#1e40af]",
                  },
                  {
                    bg: "bg-emerald-400",
                    accent: "bg-purple-800",
                    text: "text-purple-900",
                    border: "border-purple-800",
                    shadow: "shadow-[8px_8px_0px_0px_#6b21a8]",
                  },
                  {
                    bg: "bg-rose-400",
                    accent: "bg-gray-900",
                    text: "text-gray-900",
                    border: "border-gray-900",
                    shadow: "shadow-[8px_8px_0px_0px_#111827]",
                  },
                ];

                const colors = colorSchemes[index % colorSchemes.length];
                const layoutType = index % 4;

                if (layoutType === 0) {
                  // Asymmetric hero layout with bold geometric shapes
                  return (
                    <div
                      key={section.id}
                      ref={(el) => {
                        if (el) projectSectionsRef.current[index] = el;
                      }}
                      className="relative"
                    >
                      <div
                        className={`${colors.bg} ${colors.border} border-8 p-16 transform -rotate-1 hover:rotate-0 transition-transform duration-500`}
                      >
                        <div className="grid grid-cols-12 gap-8 items-center">
                          <div className="col-span-7">
                            <div className="space-y-8">
                              <div className="flex items-center space-x-6">
                                <div
                                  className={`w-16 h-16 ${colors.accent} flex items-center justify-center`}
                                >
                                  <span className="text-white font-black text-2xl">
                                    {String(index + 1).padStart(2, "0")}
                                  </span>
                                </div>
                                <span
                                  className={`font-mono text-lg ${colors.text} uppercase tracking-widest font-bold`}
                                >
                                  Core Feature
                                </span>
                              </div>

                              <h3
                                className={`text-6xl font-black leading-none ${colors.text} transform hover:scale-105 transition-transform cursor-default`}
                              >
                                {section.title.split(" ").map((word, i) => (
                                  <span
                                    key={i}
                                    className="block"
                                    style={{ marginLeft: i * 20 }}
                                  >
                                    {word}
                                  </span>
                                ))}
                              </h3>

                              <p
                                className={`text-xl leading-relaxed ${colors.text} max-w-2xl font-medium`}
                              >
                                {section.description}
                              </p>

                              <div className="flex space-x-4">
                                <div
                                  className={`w-20 h-4 ${colors.accent}`}
                                ></div>
                                <div
                                  className={`w-12 h-4 ${colors.accent} opacity-70`}
                                ></div>
                                <div
                                  className={`w-8 h-4 ${colors.accent} opacity-40`}
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-span-5">
                            <div className="relative">
                              <div
                                className={`w-full h-80 ${colors.accent} border-4 ${colors.border} flex items-center justify-center transform rotate-3 hover:-rotate-1 transition-transform duration-300`}
                              >
                                <div className="text-center">
                                  <div className="text-6xl mb-4 text-white opacity-80">
                                    ⚡
                                  </div>
                                  <div className="font-mono text-sm text-white uppercase tracking-wider">
                                    {section.imageAlt}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`absolute -top-4 -right-4 w-12 h-12 ${colors.bg} ${colors.border} border-4 transform rotate-45`}
                              ></div>
                              <div
                                className={`absolute -bottom-4 -left-4 w-8 h-8 ${colors.accent} transform -rotate-12`}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else if (layoutType === 1) {
                  // Stacked brutalist cards
                  return (
                    <div
                      key={section.id}
                      ref={(el) => {
                        if (el) projectSectionsRef.current[index] = el;
                      }}
                      className="relative max-w-4xl mx-auto"
                    >
                      <div
                        className={`${colors.bg} ${colors.border} border-6 p-12 transform rotate-1 hover:-rotate-1 transition-all duration-500 hover:scale-105`}
                      >
                        <div className="space-y-8">
                          <div className="flex justify-between items-start">
                            <div className="space-y-4">
                              <div
                                className={`inline-flex items-center space-x-3 ${colors.accent} px-6 py-3`}
                              >
                                <span className="text-white font-black text-lg">
                                  {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="text-white font-mono uppercase tracking-widest">
                                  Feature
                                </span>
                              </div>
                              <h3
                                className={`text-5xl font-black ${colors.text} leading-tight max-w-lg`}
                              >
                                {section.title}
                              </h3>
                            </div>

                            <div
                              className={`w-24 h-24 ${colors.accent} ${colors.border} border-4 flex items-center justify-center transform -rotate-12 hover:rotate-12 transition-transform`}
                            >
                              <span className="text-white text-3xl">🚀</span>
                            </div>
                          </div>

                          <div
                            className={`h-48 ${colors.accent} ${colors.border} border-4 flex items-center justify-center transform -skew-x-3 hover:skew-x-0 transition-transform`}
                          >
                            <div className="text-center transform skew-x-3 hover:skew-x-0 transition-transform">
                              <div className="text-4xl mb-4 text-white">💻</div>
                              <div className="font-mono text-white uppercase tracking-wider">
                                {section.imageAlt}
                              </div>
                            </div>
                          </div>

                          <p
                            className={`text-xl ${colors.text} leading-relaxed font-medium`}
                          >
                            {section.description}
                          </p>

                          <div className="flex justify-end">
                            <div
                              className={`w-32 h-6 ${colors.accent} transform skew-x-12`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else if (layoutType === 2) {
                  // Grid-based explosive layout
                  return (
                    <div
                      key={section.id}
                      ref={(el) => {
                        if (el) projectSectionsRef.current[index] = el;
                      }}
                      className="grid grid-cols-3 gap-8"
                    >
                      <div
                        className={`col-span-1 ${colors.accent} ${colors.border} border-6 p-8 transform -rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110`}
                      >
                        <div className="text-center space-y-4">
                          <div
                            className={`w-16 h-16 ${colors.bg} mx-auto flex items-center justify-center`}
                          >
                            <span
                              className={`font-black text-2xl ${colors.text}`}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div className="text-white text-4xl">⚙️</div>
                          <p className="text-white font-mono uppercase text-sm tracking-wider">
                            {section.imageAlt}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`col-span-2 ${colors.bg} ${colors.border} border-6 p-12 transform rotate-1 hover:-rotate-1 transition-all duration-500`}
                      >
                        <div className="space-y-6">
                          <div className="space-y-4">
                            <span
                              className={`font-mono text-lg ${colors.text} uppercase tracking-widest font-bold`}
                            >
                              Technical Implementation
                            </span>
                            <h3
                              className={`text-4xl font-black ${colors.text} leading-tight`}
                            >
                              {section.title}
                            </h3>
                          </div>

                          <p
                            className={`text-lg ${colors.text} leading-relaxed font-medium`}
                          >
                            {section.description}
                          </p>

                          <div className="flex space-x-3">
                            <div
                              className={`px-4 py-2 ${colors.accent} text-white font-mono text-sm uppercase transform -skew-x-12`}
                            >
                              Next.js
                            </div>
                            <div
                              className={`px-4 py-2 ${colors.accent} text-white font-mono text-sm uppercase transform skew-x-12`}
                            >
                              TypeScript
                            </div>
                            <div
                              className={`px-4 py-2 ${colors.accent} text-white font-mono text-sm uppercase`}
                            >
                              Supabase
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  // Split diagonal layout
                  return (
                    <div
                      key={section.id}
                      ref={(el) => {
                        if (el) projectSectionsRef.current[index] = el;
                      }}
                      className="relative"
                    >
                      <div className="grid grid-cols-2 gap-12 items-stretch">
                        <div
                          className={`${colors.bg} ${colors.border} border-6 p-12 transform rotate-2 hover:-rotate-1 transition-all duration-500 order-2`}
                        >
                          <div className="space-y-8">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-3 h-3 ${colors.accent} transform rotate-45`}
                              ></div>
                              <span
                                className={`font-mono text-lg ${colors.text} uppercase tracking-widest font-bold`}
                              >
                                Feature {String(index + 1).padStart(2, "0")}
                              </span>
                            </div>

                            <h3
                              className={`text-4xl font-black ${colors.text} leading-tight`}
                            >
                              {section.title}
                            </h3>

                            <p
                              className={`text-lg ${colors.text} leading-relaxed font-medium`}
                            >
                              {section.description}
                            </p>

                            <div className="space-y-3">
                              <div
                                className={`w-full h-2 ${colors.accent}`}
                              ></div>
                              <div
                                className={`w-3/4 h-2 ${colors.accent} opacity-70`}
                              ></div>
                              <div
                                className={`w-1/2 h-2 ${colors.accent} opacity-40`}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`${colors.accent} ${colors.border} border-6 p-16 transform -rotate-2 hover:rotate-1 transition-all duration-500 order-1 flex items-center justify-center`}
                        >
                          <div className="text-center space-y-6">
                            <div className="text-6xl text-white">🔧</div>
                            <div className="font-mono text-white uppercase tracking-wider text-lg">
                              {section.imageAlt}
                            </div>
                            <div
                              className={`w-16 h-1 ${colors.bg} mx-auto`}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Floating decorative elements */}
                      <div
                        className={`absolute -top-6 left-1/2 w-8 h-8 ${colors.bg} ${colors.border} border-4 transform rotate-45 -translate-x-1/2`}
                      ></div>
                      <div
                        className={`absolute -bottom-6 right-1/4 w-6 h-6 ${colors.accent} transform -rotate-12`}
                      ></div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="py-16 px-8 border-t-2 border-dotted border-gray-300 bg-white">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <a
                href="/work"
                className="group flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
              >
                <span className="group-hover:-translate-x-1 transition-transform">
                  ←
                </span>
                <span className="font-mono text-sm uppercase">
                  Back to Work
                </span>
              </a>

              <div className="flex space-x-8">
                <a
                  href="/work/edu-africa/experience"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  View Experience
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Live Site
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Case Study
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}

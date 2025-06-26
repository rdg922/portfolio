"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PageTransition, {
  TransitionOverlay,
  triggerPageTransition,
} from "../../../components/PageTransition";
import { SiDevpost, SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function SwampHacks2025Page() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridItemsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          y: -100,
          opacity: 0,
          rotation: -3,
        },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
        }
      );
    }

    // Grid items staggered animation
    gridItemsRef.current.forEach((item, index) => {
      if (!item) return;

      gsap.set(item, {
        y: 60,
        opacity: 0,
        scale: 0.9,
        rotation: (index % 2 === 0 ? 1 : -1) * 2,
      });

      ScrollTrigger.create({
        trigger: item,
        start: "top 85%",
        animation: gsap.to(item, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
          delay: index * 0.1,
        }),
        toggleActions: "play none none reverse",
      });

      // Hover effects for grid items
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.02,
          y: -4,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Floating shapes animation - enhanced
    const floatingShapes = document.querySelectorAll(".floating-shape");
    floatingShapes.forEach((shape, index) => {
      // More dynamic random movement
      gsap.to(shape, {
        y: "random(-40, 40)",
        x: "random(-30, 30)",
        rotation: "random(-30, 30)",
        scale: "random(0.8, 1.2)",
        duration: "random(3, 7)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.3,
      });

      // Additional rotation animation
      gsap.to(shape, {
        rotation: "+=360",
        duration: "random(15, 25)",
        repeat: -1,
        ease: "none",
        delay: index * 0.5,
      });
    });

    // Parallax effect for background grid
    const gridBackground = document.querySelector(".grid-background");
    if (gridBackground) {
      gsap.to(gridBackground, {
        backgroundPosition: "100px 100px",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const techStack = [
    { name: "React Native", color: "bg-blue-400" },
    { name: "OpenAI API", color: "bg-green-400" },
    { name: "OpenFoodFacts", color: "bg-orange-400" },
    { name: "Tailwind CSS", color: "bg-purple-400" },
  ];

  const features = [
    {
      title: "Barcode Scanning",
      description:
        "Real-time product scanning using device camera with instant sustainability data",
      icon: "🔍",
      color: "bg-yellow-300",
    },
    {
      title: "Sustainability Score",
      description:
        "Comprehensive scoring based on production methods and environmental impact",
      icon: "🌱",
      color: "bg-green-300",
    },
    {
      title: "Expiration Tracking",
      description:
        "Smart notifications to prevent food waste with personalized reminders",
      icon: "⏰",
      color: "bg-red-300",
    },
    {
      title: "Recipe Generation",
      description:
        "AI-powered recipe suggestions using your soon-to-expire ingredients",
      icon: "👨‍🍳",
      color: "bg-blue-300",
    },
  ];

  return (
    <>
      <TransitionOverlay />
      <PageTransition backgroundColor="bg-yellow-50">
        <div className="min-h-screen bg-yellow-50 text-gray-900 relative overflow-hidden">
          {/* Grid background pattern */}
          <div className="grid-background fixed inset-0 opacity-10 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 40px, #000 40px, #000 42px),
                  repeating-linear-gradient(90deg, transparent, transparent 40px, #000 40px, #000 42px)
                `,
              }}
            />
          </div>

          {/* Floating geometric shapes */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="floating-shape absolute top-20 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-pink-400 border-2 sm:border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] opacity-40 sm:opacity-60"></div>
            <div className="floating-shape absolute top-1/3 right-1/4 w-20 h-12 sm:w-32 sm:h-20 bg-cyan-400 border-2 sm:border-4 border-black rounded-2xl sm:rounded-3xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] opacity-30 sm:opacity-50"></div>
            <div className="floating-shape absolute bottom-1/4 left-12 w-18 h-18 sm:w-28 sm:h-28 bg-lime-400 border-2 sm:border-4 border-black rounded-xl sm:rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] opacity-25 sm:opacity-40"></div>
            <div className="floating-shape absolute bottom-20 right-1/3 w-12 h-24 sm:w-20 sm:h-36 bg-orange-400 border-2 sm:border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] opacity-35 sm:opacity-55"></div>
            <div className="floating-shape absolute top-1/2 left-8 w-10 h-10 sm:w-16 sm:h-16 bg-indigo-400 border-2 sm:border-3 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-30 sm:opacity-45"></div>
            {/* Additional floating shapes for more animation - hidden on mobile */}
            <div className="floating-shape hidden sm:block absolute top-3/4 left-1/3 w-12 h-20 bg-purple-400 border-3 border-black rounded-xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] opacity-35"></div>
            <div className="floating-shape hidden sm:block absolute top-10 right-12 w-18 h-18 bg-yellow-400 border-3 border-black rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] opacity-50"></div>
            <div className="floating-shape hidden sm:block absolute bottom-1/3 right-8 w-14 h-26 bg-teal-400 border-3 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-40"></div>
            <div className="floating-shape hidden sm:block absolute top-2/3 right-1/2 w-22 h-14 bg-red-400 border-3 border-black rounded-lg shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] opacity-45"></div>
            <div className="floating-shape hidden sm:block absolute bottom-1/2 left-1/4 w-10 h-24 bg-blue-400 border-2 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] opacity-30"></div>
          </div>

          {/* Header Section */}
          <div
            ref={headerRef}
            className="relative z-10 pt-20 sm:pt-32 pb-8 sm:pb-16 px-4 sm:px-8"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="col-span-1 lg:col-span-8">
                  <div className="bg-white border-4 border-black rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
                    <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-red-400 border-3 border-black rounded-full w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                      🏆
                    </div>
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight mb-4">
                      SWAMPHACKS
                      <br />
                      <span className="text-green-500">2025</span>
                    </h1>
                    <div className="w-16 sm:w-24 h-1 bg-black rounded-full mb-4 sm:mb-6"></div>
                    <p className="text-base sm:text-xl font-medium text-gray-700 leading-relaxed">
                      24-hour hackathon submission focused on sustainability and
                      food waste prevention
                    </p>
                  </div>
                </div>

                {/* Technology Stack - moved to header */}
                <div className="col-span-1 lg:col-span-4 h-full">
                  <div className="flex flex-col lg:place-content-between gap-4 sm:gap-8 h-full">
                    <div className="bg-purple-100 border-4 border-black rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <h2 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-center">
                        TECH STACK
                      </h2>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {techStack.map((tech) => (
                          <div
                            key={tech.name}
                            className={`${tech.color} border-2 border-black rounded-lg sm:rounded-xl p-2 sm:p-3 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300`}
                          >
                            <h3 className="font-black text-xs sm:text-sm">
                              {tech.name}
                            </h3>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className="bg-purple-100 border-4 border-black rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-black text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all text-center cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        triggerPageTransition(
                          "/#my-work",
                          e.currentTarget,
                          "bg-gray-50"
                        );
                      }}
                    >
                      ← Back to work
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="relative z-10 px-4 sm:px-8 pb-12 sm:pb-20">
            <div className="max-w-7xl mx-auto">
              {/* Project Overview */}
              <div
                ref={(el) => {
                  if (el) gridItemsRef.current[0] = el;
                }}
                className="mb-8 sm:mb-16"
              >
                <div className="bg-white border-4 border-black rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl sm:text-4xl font-black mb-4 sm:mb-6 text-center">
                    PROJECT OVERVIEW
                  </h2>
                  <div>
                    <div className="space-y-4 sm:space-y-6">
                      <p className="text-sm sm:text-lg leading-relaxed text-gray-700">
                        For the 2025 SwampHacks 24-hour hackathon, two of my
                        friends and I were tasked with creating an app to
                        promote sustainability. We decided to tackle the problem
                        of food waste by creating an app that allows users to
                        scan barcodes at the store and get information about how
                        sustainably produced the product is.
                        <br />
                        <br />
                        After scanning the barcode, the app would pull
                        information about the food using the OpenFoodFacts API.
                        <br />
                        <br />
                        However, we also wanted to prevent food waste after it
                        has been purchased, so the app keeps track of the
                        expiration date of products and notifies the user when
                        their food is about to expire.
                        <br />
                        <br />
                        The user can then select the items that they want to use
                        and the app will generate a recipe using the selected
                        items, preventing any food from going to waste.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                ref={(el) => {
                  if (el) gridItemsRef.current[1] = el;
                }}
                className="mb-8 sm:mb-16"
              >
                <div className="bg-yellow-300 border-4 border-black rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl sm:text-4xl font-black mb-4 sm:mb-6 text-center">
                    DEMO VIDEO
                  </h2>
                  <div
                    className="relative w-full mx-auto"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/6tzbO22YZks"
                      title="Introducing EcoScan"
                      className="absolute inset-0 w-full h-full rounded-lg sm:rounded-xl border-2 border-black"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Key Features Grid */}
              <div
                ref={(el) => {
                  if (el) gridItemsRef.current[2] = el;
                }}
                className="mb-8 sm:mb-16"
              >
                <div className="bg-blue-100 border-4 border-black rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl sm:text-4xl font-black mb-4 sm:mb-8 text-center">
                    KEY FEATURES
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                    {features.map((feature) => (
                      <div
                        key={feature.title}
                        className={`${feature.color} border-3 border-black rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300`}
                      >
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="text-2xl sm:text-3xl bg-white border-2 border-black rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
                            {feature.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-black text-lg sm:text-xl mb-1 sm:mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div
                ref={(el) => {
                  if (el) gridItemsRef.current[3] = el;
                }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-yellow-300 to-orange-300 border-4 border-black rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl sm:text-4xl font-black mb-3 sm:mb-6">
                    SEE IT IN ACTION
                  </h2>
                  <p className="text-base sm:text-xl mb-6 sm:mb-8 text-gray-700">
                    Check out our complete app demonstration and walkthrough
                  </p>
                  <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                      <Link
                        href="https://github.com/rdg922/swamphacks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 justify-center bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-black text-base sm:text-lg hover:bg-gray-800 transition-colors duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                      >
                        <SiGithub /> GITHUB
                      </Link>
                      <Link
                        href="https://devpost.com/software/ecoscan-ef6jpg?_gl=1*13ld3f*_gcl_au*MTgxNzU4MDI1OS4xNzQ0NjY1MTA2*_ga*MTgwNjAzMzE4Ni4xNzQ0NjY1MTA3*_ga_0YHJK3Y10M*MTc0NDY2NTEwNi4xLjEuMTc0NDY2NTU3Ni4wLjAuMA.."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 justify-center bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-black text-base sm:text-lg hover:bg-gray-800 transition-colors duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                      >
                        <SiDevpost /> DEVPOST
                      </Link>
                    </div>
                    <button
                      onClick={(e) => {
                        triggerPageTransition(
                          "/#my-work",
                          e.currentTarget,
                          "bg-gray-50"
                        );
                      }}
                      className="w-full sm:w-auto bg-white text-black border-3 border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-black text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                    >
                      ← BACK TO WORK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}

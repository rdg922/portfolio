"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import PageTransition, {
  TransitionOverlay,
  triggerPageTransition,
} from "../../../components/PageTransition";

export default function EduAfricaPage() {
  const projectCardRef = useRef<HTMLDivElement>(null);
  const experienceCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the cards on load
    if (projectCardRef.current && experienceCardRef.current) {
      gsap.fromTo(
        [projectCardRef.current, experienceCardRef.current],
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.5,
          stagger: 0.2,
        }
      );
    }
  }, []);

  return (
    <>
      <TransitionOverlay />
      <PageTransition backgroundColor="bg-gray-50">
        <div className="min-h-screen bg-gray-50 text-gray-900 relative">
          {/* Hero Section */}
          <div className="relative pt-40 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-8 bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center lg:text-left">
                {/* Header content - centered on mobile, left-aligned on desktop */}
                <div className="w-full lg:col-span-8 mb-8 lg:mb-0">
                  <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-none mb-4 sm:mb-6">
                    <span className="block text-gray-900">Safe Cities</span>
                    <span className="block text-green-600 lg:ml-16">
                      South Africa
                    </span>
                  </h1>
                  <div className="w-24 sm:w-40 h-1 sm:h-2 bg-green-600 mx-auto lg:mx-0 lg:ml-16 mb-4 sm:mb-8"></div>
                  <p className="text-base sm:text-xl text-gray-700 max-w-lg mx-auto lg:mx-0 lg:ml-16 leading-relaxed mb-6 sm:mb-8">
                    A transformative summer experience in South Africa, building
                    a project management platform for Safe Cities while
                    immersing in Ubuntu philosophy and global collaboration.
                  </p>

                  {/* Navigation Links */}
                  <div className="lg:ml-16 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                    <button
                      onClick={(e) =>
                        triggerPageTransition(
                          "/#my-work",
                          e.currentTarget,
                          "bg-gray-50"
                        )
                      }
                      className="group inline-flex items-center space-x-2 bg-white border-2 border-gray-900 px-4 sm:px-6 py-2 sm:py-3 hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer text-sm sm:text-base"
                    >
                      <span className="font-mono uppercase tracking-wider">
                        See more works
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </div>
                </div>

                {/* Image - below text on mobile, right side on desktop */}
                <div className="w-full max-w-md lg:max-w-none lg:col-span-4 mt-8 lg:mt-0">
                  <div className="relative">
                    <Image
                      src={"/images/2025-05-17-007.jpg"}
                      alt="Safe Cities South Africa experience"
                      width={500}
                      height={400}
                      className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg lg:rounded-none shadow-lg lg:shadow-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Split Navigation Cards */}
          <div className="py-12 sm:py-20 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Project Card */}
                <div ref={projectCardRef}>
                  <div
                    onClick={(e) =>
                      triggerPageTransition(
                        "/work/edu-africa/project",
                        e.currentTarget,
                        "bg-gray-900"
                      )
                    }
                    className="group bg-white border-2 border-dotted border-gray-400 p-6 sm:p-12 hover:bg-gray-100 transition-all duration-500 transform hover:-rotate-1 hover:scale-105 cursor-pointer"
                  >
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 group-hover:bg-white border-2 border-gray-900 flex items-center justify-center transition-colors">
                          <span className="text-white group-hover:text-gray-900 font-black text-lg sm:text-xl">
                            01
                          </span>
                        </div>
                        <span className="font-mono text-sm sm:text-lg text-gray-700 group-hover:text-gray-900 uppercase tracking-widest font-bold">
                          Technical Deep Dive
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
                        The Project Platform
                      </h3>

                      <p className="text-base sm:text-lg text-gray-700 group-hover:text-gray-800 leading-relaxed">
                        Explore the technical architecture, features, and
                        development process of the Notion-inspired project
                        management platform built for Safe Cities South Africa.
                      </p>

                      <div className="flex items-center space-x-2 text-gray-900 group-hover:text-gray-900">
                        <span className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                          View Technical Details
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="w-full h-1 sm:h-2 bg-gray-200 group-hover:bg-gray-900 transition-colors"></div>
                        <div className="w-3/4 h-1 sm:h-2 bg-gray-200 group-hover:bg-gray-900 transition-colors opacity-70"></div>
                        <div className="w-1/2 h-1 sm:h-2 bg-gray-200 group-hover:bg-gray-900 transition-colors opacity-40"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Card */}
                <div ref={experienceCardRef}>
                  <div
                    onClick={(e) =>
                      triggerPageTransition(
                        "/work/edu-africa/experience",
                        e.currentTarget,
                        "bg-green-600"
                      )
                    }
                    className="group bg-white border-2 border-dotted border-gray-400 p-6 sm:p-12 hover:bg-green-50 transition-all duration-500 transform hover:rotate-1 hover:scale-105 cursor-pointer"
                  >
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 group-hover:bg-white border-2 border-green-600 flex items-center justify-center transition-colors">
                          <span className="text-white group-hover:text-green-600 font-black text-lg sm:text-xl">
                            02
                          </span>
                        </div>
                        <span className="font-mono text-sm sm:text-lg text-gray-700 group-hover:text-green-800 uppercase tracking-widest font-bold">
                          Cultural Journey
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-4xl font-black text-gray-900 group-hover:text-green-800 leading-tight">
                        The Global Experience
                      </h3>

                      <p className="text-base sm:text-lg text-gray-700 group-hover:text-green-700 leading-relaxed">
                        Discover the cultural immersion, community connections,
                        and transformative moments from four weeks in Cape Town,
                        Durban, and the Ubuntu philosophy.
                      </p>

                      <div className="flex items-center space-x-2 text-green-600 group-hover:text-green-600">
                        <span className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                          Explore the Journey
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="w-full h-1 sm:h-2 bg-gray-200 group-hover:bg-green-600 transition-colors"></div>
                        <div className="w-3/4 h-1 sm:h-2 bg-gray-200 group-hover:bg-green-600 transition-colors opacity-70"></div>
                        <div className="w-1/2 h-1 sm:h-2 bg-gray-200 group-hover:bg-green-600 transition-colors opacity-40"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 sm:mt-20 text-center">
                <div className="bg-white border-2 border-dotted border-gray-400 p-4 sm:p-8">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-green-600 mb-1 sm:mb-2">
                        5
                      </div>
                      <div className="font-mono text-xs sm:text-sm text-gray-600 uppercase tracking-wider">
                        Weeks in SA
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-green-600 mb-1 sm:mb-2">
                        2
                      </div>
                      <div className="font-mono text-xs sm:text-sm text-gray-600 uppercase tracking-wider">
                        Cities Explored
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-green-600 mb-1 sm:mb-2">
                        1
                      </div>
                      <div className="font-mono text-xs sm:text-sm text-gray-600 uppercase tracking-wider">
                        Platform Built
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-green-600 mb-1 sm:mb-2">
                        ∞
                      </div>
                      <div className="font-mono text-xs sm:text-sm text-gray-600 uppercase tracking-wider">
                        Ubuntu Impact
                      </div>
                    </div>
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

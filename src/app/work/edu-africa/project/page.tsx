"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
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

interface ProjectSection {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  features: string[];
}

const projectSections: ProjectSection[] = [
  {
    id: "page-editor",
    title: "Rich Text Editor",
    description:
      "WYSIWYG markdown editor with keyboard shortcuts and drag-and-drop functionality. Supports rich formatting, embedded media, tables, and custom blocks. Built for non-technical users with intuitive editing tools.",
    imageAlt: "Page Editor Interface",
    imageSrc: "/images/safe-cities/Page Editor.png",
    features: [
      "Real-time editing",
      "Markdown support",
      "Drag & drop",
      "Custom blocks",
    ],
  },
  {
    id: "chat-system",
    title: "Integrated Chat System",
    description:
      "Page-level chat rooms with @mention functionality and a global chat hub for centralized communication. Real-time notifications for mentions, comments, and permission changes keep teams connected and informed.",
    imageAlt: "Chat Interface",
    imageSrc: "/images/safe-cities/Chat.png",
    features: [
      "@mention system",
      "Real-time messaging",
      "Thread organization",
      "Notification system",
    ],
  },
  {
    id: "forms-management",
    title: "Dynamic Forms System",
    description:
      "Comprehensive form builder with validation, conditional logic, and data collection capabilities. Enables Safe Cities to create surveys, applications, and data entry forms with ease.",
    imageAlt: "Forms Management",
    imageSrc: "/images/safe-cities/Forms.png",
    features: [
      "Form builder",
      "Validation rules",
      "Conditional logic",
      "Data export",
    ],
  },
  {
    id: "file-management",
    title: "File Management System",
    description:
      "Secure file upload and organization system with version control and sharing capabilities. Supports multiple file types with preview functionality and access controls.",
    imageAlt: "File Dialog",
    imageSrc: "/images/safe-cities/Add File Dialog.png",
    features: [
      "Secure uploads",
      "Version control",
      "File previews",
      "Access controls",
    ],
  },
  {
    id: "sharing-permissions",
    title: "Granular Sharing Controls",
    description:
      "Per-page permissions system with View, Comment, and Edit access levels. Role-based permissions ensure sensitive programme information stays secure while enabling appropriate collaboration across teams.",
    imageAlt: "Sharing and Permissions",
    imageSrc: "/images/safe-cities/Share.png",
    features: [
      "Role-based access",
      "Permission levels",
      "Secure sharing",
      "Team collaboration",
    ],
  },
  {
    id: "system-architecture",
    title: "Technical Architecture",
    description:
      "Built on Next.js 14 with TypeScript for type safety, Tailwind CSS for responsive design, tRPC for end-to-end type-safe APIs, Drizzle ORM with Supabase PostgreSQL, and Clerk for authentication. Deployed with modern DevOps practices.",
    imageAlt: "System Architecture Diagram",
    imageSrc: "/images/safe-cities/System Architecture.png",
    features: ["Next.js 14", "TypeScript", "Supabase", "Real-time sync"],
  },
];

export default function ProjectPage() {
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
      <PageTransition backgroundColor="bg-gray-900">
        <div className="min-h-screen bg-gray-900 text-white relative">
          {/* Hero Section */}
          <div className="relative pt-60 pb-20 px-8 bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-8">
                  <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
                    <span className="block text-white">Safe Cities</span>
                    <span className="block text-yellow-400 ml-16">
                      Project Platform
                    </span>
                  </h1>
                  <div className="w-40 h-2 bg-yellow-400 ml-16 mb-8"></div>
                  <p className="text-xl text-gray-300 max-w-lg ml-16 leading-relaxed mb-8">
                    A comprehensive project management platform designed for
                    Safe Cities South Africa. Built with modern web technologies
                    to streamline programme coordination and enhance team
                    collaboration.
                  </p>

                  {/* Navigation Links */}
                  <div className="ml-16 flex flex-wrap gap-4">
                    <button
                      onClick={(e) =>
                        triggerPageTransition(
                          "/#my-work",
                          e.currentTarget,
                          "bg-gray-50"
                        )
                      }
                      className="group inline-flex items-center space-x-2 bg-white border-2 border-white px-6 py-3 text-gray-900 hover:bg-gray-900 hover:text-white hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
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
                          "bg-green-600"
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
                  <div className="relative border-4 border-yellow-400 shadow-[8px_8px_0px_0px_#facc15]">
                    <Image
                      src={"/images/safe-cities/System Architecture.png"}
                      alt="Safe Cities Project Management Platform Architecture"
                      width={500}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Sections */}
          <div className="py-20 px-8 bg-gray-900">
            <div className="max-w-7xl mx-auto space-y-24">
              {projectSections.map((section, index) => (
                <div
                  key={section.id}
                  ref={(el) => {
                    if (el) projectSectionsRef.current[index] = el;
                  }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                    } space-y-6`}
                  >
                    <div className="inline-block">
                      <span className="bg-yellow-400 text-gray-900 px-4 py-2 font-mono text-sm uppercase tracking-wider font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                      {section.title}
                    </h2>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      {section.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {section.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400"></div>
                          <span className="text-sm text-gray-400 font-mono uppercase tracking-wide">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative border-4 border-white shadow-[8px_8px_0px_0px_#ffffff] bg-white">
                      <Image
                        src={section.imageSrc}
                        alt={section.imageAlt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Stack Section */}
            <div className="max-w-4xl mx-auto mt-32">
              <div className="bg-white border-4 border-yellow-400 shadow-[8px_8px_0px_0px_#facc15] p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">
                  TECHNICAL SPECIFICATIONS
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { tech: "Next.js 14", category: "Framework" },
                    { tech: "TypeScript", category: "Language" },
                    { tech: "Supabase", category: "Database" },
                    { tech: "tRPC", category: "API Layer" },
                    { tech: "Tailwind CSS", category: "Styling" },
                    { tech: "Drizzle ORM", category: "ORM" },
                    { tech: "Clerk", category: "Auth" },
                    { tech: "Vercel", category: "Deployment" },
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-mono text-sm text-gray-600 uppercase tracking-wider mb-1">
                        {item.category}
                      </div>
                      <div className="font-black text-gray-900">
                        {item.tech}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}

"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import PageTransition, {
  TransitionOverlay,
} from "../../../components/PageTransition";

gsap.registerPlugin(ScrollTrigger);

// Add image loading hook
const useImageLoader = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set([...prev, src]));
  };

  const handleImageError = (src: string) => {
    setFailedImages((prev) => new Set([...prev, src]));
  };

  const isLoaded = (src: string) => loadedImages.has(src);
  const hasFailed = (src: string) => failedImages.has(src);

  return { handleImageLoad, handleImageError, isLoaded, hasFailed };
};

// Image component with loading states
const MediaDisplay = ({
  src,
  alt,
  className,
}: {
  src: string; // Just string paths from public directory
  alt: string;
  className: string;
}) => {
  const { handleImageLoad, handleImageError, hasFailed } = useImageLoader();
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
    handleImageLoad(src);
  };

  const handleError = () => {
    setLoading(false);
    handleImageError(src);
  };

  if (hasFailed(src)) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center border border-gray-400">
        <div className="text-center">
          <div className="text-2xl mb-2 opacity-60">📷</div>
          <div className="font-mono text-xs text-gray-600">
            Image unavailable
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-pulse text-2xl mb-2">📸</div>
            <div className="font-mono text-xs text-gray-600">
              Loading image...
            </div>
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className={`w-full h-full ${className} ${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

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

interface ExperienceSection {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  extendedText?: string;
  photoCluster?: string[];
  color: string;
}

const experienceSections: ExperienceSection[] = [
  {
    id: "arrival",
    title: "Landing in Cape Town",
    subtitle: "From Arrival Hall to Agile Development",
    description:
      "Arriving at Cape Town International Airport, our group was greeted by our EDU Africa facilitator and the iconic view of Table Mountain.  We settled into our accommodation at Curiocity on Kloof Street, the vibrant hub that would be our home base for the next several weeks. ",
    extendedText:
      "The first few days were a deep dive into the complex context of South Africa. The city orientation walk and a powerful workshop with the Institute for Justice & Reconciliation provided a necessary foundation, highlighting the nation's journey from Apartheid to democracy.  This context was crucial as we prepared to work with Safe Cities. It was clear our project wasn't just about code; it was about understanding the societal needs that drive community-led organizations.",
    photoCluster: [
      "/images/IMG_3669.jpg",
      "/images/73127295-ccba-422f-8f0d-adeeb72a7b6f.jpg",
    ],
    color: "bg-emerald-400",
  },
  {
    id: "safe_cities_mission",
    title: "The Safe Cities Project",
    subtitle: "Secure Collaboration for Community Impact",
    description:
      "Our team was assigned to work with Safe Cities on a critical internal tool: a secure project management platform.  The goal was to create a centralized system, a clone of Notion and Google Drive, to help them manage projects, store documents, and collaborate efficiently without relying on multiple third-party services.",
    extendedText:
      "During our on-site orientation with our contact, Samantha May, at their offices in Elsiesriver, we learned about the challenges they faced with data security and workflow management.  Our mission was to apply the Software Engineering Agile Methodology to design and build a prototype.  This in-house solution needed to be robust and secure, empowering the Safe Cities team to coordinate their community-focused work more effectively.",
    photoCluster: [
      "/images/IMG_3861.jpg",
      "/images/ccc7ed5f-f8ed-4a9d-aacd-e3aa7c7d6950.jpg",
      "/images/IMG_4342.jpg",
    ],
    color: "bg-green-500",
  },
  {
    id: "durban_interlude",
    title: "Durban and St. Lucia",
    subtitle: "Engineering, Environment, and Estuaries",
    description:
      "Our program included a trip to Durban and St. Lucia, providing a broader view of South Africa's diversity. The urban energy of Durban contrasted sharply with the natural wonder of the iSimangaliso Wetlands Park, home to one of the world's largest estuaries. ",
    extendedText:
      "A highlight was the two-day engagement with the Faculty of Accounting & Informatics and the Faculty of Engineering & the Built Environment at Durban University of Technology (DUT).  Collaborating with DUT students and faculty on their student-led projects offered new perspectives on technology's application in different socio-economic settings.  This experience, combined with the safari in Hluhluwe-iMfolozi, reinforced the need for adaptable and context-aware engineering solutions. ",
    photoCluster: ["/images/IMG_7663.jpg", "/images/IMG_4463.jpg"],
    color: "bg-teal-400",
  },
  {
    id: "collaborative_development",
    title: "From Pitch to Prototype",
    subtitle: "An Agile Journey with Safe Cities",
    description:
      "Our development process was iterative, marked by key presentations where we refined our project. We started with a Project Proposal Pitch at the EDU Africa office and followed up with several Project Updates at the Cape Town Lodge Hotel.  Each presentation was an opportunity to incorporate feedback and ensure our solution met the client's needs.",
    extendedText:
      "Working as a team, we dedicated our on-site days to direct collaboration with the Safe Cities staff, while our off-site time was spent in focused development sprints.  This blend of client-facing meetings and remote teamwork was essential. We learned to communicate technical ideas to a non-technical audience and adapt our design based on real-world operational requirements, truly integrating Computer Science principles with the needs of our internship host. ",
    photoCluster: [
      "/images/IMG_4361.jpg",
      "/images/8f9dae0c-ea40-418a-b96e-de918590f7c7.jpg",
    ],
    color: "bg-lime-400",
  },
  {
    id: "lasting_impact",
    title: "Final Showcase and Reflection",
    subtitle: "Delivering a Tool for Transformation",
    description:
      "The program culminated in a final poster presentation at the Cape Town Lodge Hotel, where we showcased our project management platform prototype to our internship hosts and other stakeholders.  This was our chance to demonstrate the value and functionality of the tool we had spent weeks building.",
    extendedText:
      "The experience was about more than just delivering a product. It was a transformative learning journey that enhanced our professional and intercultural skills.  Presenting our work, wrapping up the internship, and participating in the final reflection session crystallized the immense growth we underwent.  We left with not only a significant project for our portfolios but also a deeper understanding of engineering's role in a global, societal context. ",
    photoCluster: ["/images/IMG_3861.jpg", "/images/IMG_4463.jpg"],
    color: "bg-emerald-500",
  },
];

export default function EduAfricaPage() {
  const [activeView, setActiveView] = useState<"project" | "experience">(
    "project"
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const projectSectionsRef = useRef<HTMLDivElement[]>([]);
  const experienceSectionsRef = useRef<HTMLDivElement[]>([]);
  const switcherRef = useRef<HTMLDivElement>(null);
  const morphingBgRef = useRef<HTMLDivElement>(null);
  const projectButtonRef = useRef<HTMLButtonElement>(null);
  const experienceButtonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    // Initial animations
    if (switcherRef.current) {
      gsap.fromTo(
        switcherRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }

    // Setup morphing background initial state
    if (morphingBgRef.current && projectButtonRef.current) {
      const projectButton = projectButtonRef.current;
      gsap.set(morphingBgRef.current, {
        width: projectButton.offsetWidth,
        height: projectButton.offsetHeight,
        x: 0,
        y: 0,
        borderRadius: "0px", // Rectangular for project
        backgroundColor: "#000000",
      });
    }

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

    // Experience sections scroll animations
    experienceSectionsRef.current.forEach((section, index) => {
      if (!section) return;

      gsap.set(section, {
        scale: 0.8,
        opacity: 0,
        rotation: Math.random() * 20 - 10,
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        animation: gsap.to(section, {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: index * 0.1,
        }),
        toggleActions: "play none none reverse",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const switchView = (view: "project" | "experience") => {
    if (view === activeView) return;

    const targetButton =
      view === "project"
        ? projectButtonRef.current
        : experienceButtonRef.current;

    if (morphingBgRef.current && targetButton) {
      // Animate the morphing background
      const targetX =
        view === "project"
          ? 0
          : targetButton.offsetLeft -
            (projectButtonRef.current?.offsetLeft || 0);

      gsap.to(morphingBgRef.current, {
        x: targetX,
        width: targetButton.offsetWidth,
        height: targetButton.offsetHeight,
        borderRadius: view === "project" ? "0px" : "24px",
        backgroundColor: view === "project" ? "#000000" : "#059669", // green-600
        duration: 0.6,
        ease: "power3.inOut",
      });
    }

    setActiveView(view);

    // Animate the switch
    const currentSections =
      activeView === "project"
        ? projectSectionsRef.current
        : experienceSectionsRef.current;

    gsap.to(currentSections, {
      opacity: 0,
      y: 50,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        // Force re-trigger of scroll animations for new content
        ScrollTrigger.refresh();
      },
    });
  };

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
                  <p className="text-xl text-gray-700 max-w-lg ml-16 leading-relaxed mb-12">
                    Building a comprehensive project management platform for
                    Safe Cities South Africa—a Notion-inspired workspace that
                    streamlines programme coordination and enhances team
                    collaboration for community impact.
                  </p>

                  {/* Content Switcher - Moved to Hero */}
                  <div ref={switcherRef} className="ml-16">
                    <div className="relative inline-flex bg-gray-100 border-2 border-dotted border-gray-400 p-2">
                      {/* Morphing Background */}
                      <div
                        ref={morphingBgRef}
                        className="absolute top-2 left-2 z-0"
                        style={{
                          backgroundColor: "#000000",
                          borderRadius: "0px",
                        }}
                      />

                      <button
                        ref={projectButtonRef}
                        onClick={() => switchView("project")}
                        className={`px-8 py-4 font-bold text-lg transition-colors duration-300 relative z-10 ${
                          activeView === "project"
                            ? "text-white"
                            : "text-gray-700 hover:text-black"
                        }`}
                      >
                        THE PROJECT
                      </button>
                      <button
                        ref={experienceButtonRef}
                        onClick={() => switchView("experience")}
                        className={`px-8 py-4 font-bold text-lg transition-colors duration-300 relative z-10 ${
                          activeView === "experience"
                            ? "text-white"
                            : "text-gray-700 hover:text-green-600"
                        }`}
                      >
                        THE GLOBAL EXPERIENCE
                      </button>
                    </div>
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

          {/* Project View */}
          {activeView === "project" && (
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
                          className={`${colors.bg} ${colors.border} ${colors.shadow} border-8 p-16 transform -rotate-1 hover:rotate-0 transition-transform duration-500 hover:shadow-[12px_12px_0px_0px] hover:shadow-current`}
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
                                  className={`w-full h-80 ${colors.accent} border-4 ${colors.border} shadow-[4px_4px_0px_0px] shadow-black flex items-center justify-center transform rotate-3 hover:-rotate-1 transition-transform duration-300`}
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
                          className={`${colors.bg} ${colors.border} ${colors.shadow} border-6 p-12 transform rotate-1 hover:-rotate-1 transition-all duration-500 hover:scale-105 hover:shadow-[12px_12px_0px_0px] hover:shadow-current`}
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
                                className={`w-24 h-24 ${colors.accent} ${colors.border} shadow-[3px_3px_0px_0px] shadow-black border-4 flex items-center justify-center transform -rotate-12 hover:rotate-12 transition-transform`}
                              >
                                <span className="text-white text-3xl">🚀</span>
                              </div>
                            </div>

                            <div
                              className={`h-48 ${colors.accent} ${colors.border} shadow-[4px_4px_0px_0px] shadow-black border-4 flex items-center justify-center transform -skew-x-3 hover:skew-x-0 transition-transform`}
                            >
                              <div className="text-center transform skew-x-3 hover:skew-x-0 transition-transform">
                                <div className="text-4xl mb-4 text-white">
                                  💻
                                </div>
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
                          className={`col-span-1 ${colors.accent} ${colors.border} ${colors.shadow} border-6 p-8 transform -rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110 hover:shadow-[6px_6px_0px_0px] hover:shadow-current`}
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
                          className={`col-span-2 ${colors.bg} ${colors.border} ${colors.shadow} border-6 p-12 transform rotate-1 hover:-rotate-1 transition-all duration-500 hover:shadow-[10px_10px_0px_0px] hover:shadow-current`}
                        >
                          <div className="space-y-6">
                            <div className="space-y-4">
                              {" "}
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
                            className={`${colors.bg} ${colors.border} ${colors.shadow} border-6 p-12 transform rotate-2 hover:-rotate-1 transition-all duration-500 order-2 hover:shadow-[10px_10px_0px_0px] hover:shadow-current`}
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
                            className={`${colors.accent} ${colors.border} ${colors.shadow} border-6 p-16 transform -rotate-2 hover:rotate-1 transition-all duration-500 order-1 flex items-center justify-center hover:shadow-[10px_10px_0px_0px] hover:shadow-current`}
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
          )}

          {/* Experience View */}
          {activeView === "experience" && (
            <div className="py-20 px-8">
              <div className="max-w-6xl mx-auto space-y-24">
                {experienceSections.map((section, index) => (
                  <div
                    key={section.id}
                    ref={(el) => {
                      if (el) experienceSectionsRef.current[index] = el;
                    }}
                    className="relative"
                  >
                    {/* Main content area with background */}
                    <div
                      className={`relative ${section.color} border-2 border-dotted border-gray-400 p-12 mb-8`}
                    >
                      <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Text content */}
                        <div className="lg:col-span-2 space-y-6">
                          <div className="space-y-2">
                            <span className="font-mono text-sm text-gray-700 uppercase tracking-wider">
                              Chapter {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-4xl font-black text-gray-900 leading-tight">
                              {section.title}
                            </h3>
                            {section.subtitle && (
                              <p className="text-xl font-bold text-gray-700 italic">
                                {section.subtitle}
                              </p>
                            )}
                          </div>

                          <p className="text-lg text-gray-800 leading-relaxed">
                            {section.description}
                          </p>

                          {section.extendedText && (
                            <p className="text-base text-gray-700 leading-relaxed border-l-4 border-gray-600 pl-6">
                              {section.extendedText}
                            </p>
                          )}
                        </div>

                        {/* Photo cluster */}
                        <div className="lg:col-span-1">
                          {section.photoCluster && (
                            <div className="space-y-4">
                              <span className="font-mono text-xs text-gray-600 uppercase tracking-wider">
                                Memories from {section.title.toLowerCase()}
                              </span>

                              {/* Dynamic photo grid layouts - Simplified for fewer, larger images */}
                              {section.photoCluster.length === 1 && (
                                // Single large image
                                <div className="w-full h-64 border border-gray-500 overflow-hidden relative">
                                  <MediaDisplay
                                    src={section.photoCluster[0]}
                                    alt={`Memory from ${section.title}`}
                                    className="object-cover"
                                  />
                                </div>
                              )}

                              {section.photoCluster.length === 2 && (
                                // Two images layout
                                <div className="space-y-4">
                                  <div className="w-full h-56 border border-gray-500 overflow-hidden relative">
                                    <MediaDisplay
                                      src={section.photoCluster[0]}
                                      alt={`Memory from ${section.title}`}
                                      className="object-cover"
                                    />
                                  </div>
                                  <div className="w-4/5 h-48 border border-gray-500 ml-auto overflow-hidden relative">
                                    <MediaDisplay
                                      src={section.photoCluster[1]}
                                      alt={`Memory from ${section.title}`}
                                      className="object-cover"
                                    />
                                  </div>
                                </div>
                              )}

                              {section.photoCluster.length === 3 && (
                                // Three images layout
                                <div className="space-y-4">
                                  <div className="w-full h-48 border border-gray-500 overflow-hidden relative">
                                    <MediaDisplay
                                      src={section.photoCluster[0]}
                                      alt={`Memory from ${section.title}`}
                                      className="object-cover"
                                    />
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    {section.photoCluster
                                      .slice(1, 3)
                                      .map((photo, photoIndex) => (
                                        <div
                                          key={photoIndex}
                                          className="h-40 border border-gray-500 overflow-hidden relative"
                                        >
                                          <MediaDisplay
                                            src={photo}
                                            alt={`Memory from ${section.title}`}
                                            className="object-cover"
                                          />
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Decorative elements */}
                      {index % 4 === 0 && (
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 border-2 border-black transform rotate-45"></div>
                      )}
                      {index % 4 === 1 && (
                        <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-red-400 border border-black transform -rotate-12"></div>
                      )}
                      {index % 4 === 2 && (
                        <div className="absolute top-6 -right-2 text-3xl opacity-60 rotate-12">
                          ✦
                        </div>
                      )}
                      {index % 4 === 3 && (
                        <div className="absolute -top-2 left-8 w-4 h-4 bg-blue-500 transform rotate-45"></div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Reflection Section */}
                <div className="text-center mt-32 max-w-4xl mx-auto">
                  <div className="bg-white border-2 border-dotted border-gray-400 p-12">
                    <h3 className="text-4xl font-black mb-8 text-gray-900">
                      Ubuntu Lives On
                    </h3>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      Those four weeks in South Africa—three in Cape Town and
                      one exploring Durban and Saint Lucia—fundamentally
                      transformed how I approach technology, community, and my
                      role as a global citizen. Working with Safe Cities taught
                      me that sustainable change comes from relationships, not
                      just solutions.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed italic">
                      The platform was just the beginning. The real impact has
                      been the ongoing collaboration with South African
                      communities, the Ubuntu philosophy that now guides my
                      work, and the understanding that the best technology
                      amplifies human connection rather than replacing it.
                    </p>
                    <div className="w-32 h-2 bg-green-600 mx-auto mt-8"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

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

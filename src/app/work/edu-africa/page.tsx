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
    id: "architecture",
    title: "System Architecture",
    description:
      "Built with a microservices architecture using Node.js and React, deployed on AWS with auto-scaling capabilities. The platform handles 10k+ concurrent users while maintaining sub-200ms response times.",
    imageAlt: "System Architecture Diagram",
  },
  {
    id: "offline",
    title: "Offline-First PWA",
    description:
      "Implemented service workers and IndexedDB for complete offline functionality. Students can download lessons, complete assignments, and sync data when connectivity returns. Cache-first strategy ensures reliable performance.",
    imageAlt: "Offline Functionality",
  },
  {
    id: "multilingual",
    title: "i18n Implementation",
    description:
      "Custom internationalization system supporting 12 African languages with RTL support. Built dynamic content loading and font optimization for languages like Amharic and Arabic scripts.",
    imageAlt: "Language Selection Interface",
  },
  {
    id: "adaptive",
    title: "Adaptive Learning Engine",
    description:
      "Machine learning algorithm that adjusts difficulty based on student performance. Uses TensorFlow.js for client-side inference, reducing server load while providing personalized learning paths.",
    imageAlt: "Learning Algorithm Visualization",
  },
  {
    id: "infrastructure",
    title: "Low-Bandwidth Optimization",
    description:
      "Implemented aggressive caching, image compression, and lazy loading. Built custom CDN with edge servers in African cities. Reduced payload by 78% compared to traditional LMS platforms.",
    imageAlt: "Performance Metrics Dashboard",
  },
  {
    id: "security",
    title: "Security & Privacy",
    description:
      "End-to-end encryption for student data, GDPR-compliant privacy controls, and blockchain-based certificate verification. Zero-knowledge architecture protects sensitive educational records.",
    imageAlt: "Security Implementation",
  },
  {
    id: "analytics",
    title: "Real-time Analytics",
    description:
      "Custom analytics dashboard using D3.js and WebSockets for real-time student progress tracking. Built privacy-preserving metrics that help teachers without exposing individual student data.",
    imageAlt: "Analytics Dashboard",
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

      gsap.set(section, {
        x: isEven ? -100 : 100,
        opacity: 0,
        rotation: isEven ? -2 : 2,
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        animation: gsap.to(section, {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "power2.out",
        }),
        toggleActions: "play none none reverse",
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
                    <span className="block text-gray-900">SWE Internship</span>
                    <span className="block text-green-600 ml-16">
                      in South Africa
                    </span>
                  </h1>
                  <div className="w-40 h-2 bg-green-600 ml-16 mb-8"></div>
                  <p className="text-xl text-gray-700 max-w-lg ml-16 leading-relaxed mb-12"></p>

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
              <div className="max-w-7xl mx-auto space-y-24">
                {projectSections.map((section, index) => {
                  // Different layout types for variety
                  const layoutType = index % 4;

                  if (layoutType === 0) {
                    // Full width with centered content
                    return (
                      <div
                        key={section.id}
                        ref={(el) => {
                          if (el) projectSectionsRef.current[index] = el;
                        }}
                        className="text-center max-w-4xl mx-auto"
                      >
                        <div className="relative mb-12">
                          <div
                            className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center mx-auto"
                            style={{
                              clipPath:
                                "polygon(0% 10%, 90% 0%, 100% 90%, 10% 100%)",
                            }}
                          >
                            <div className="text-center">
                              <div className="text-6xl mb-4 opacity-60">⚙️</div>
                              <div className="font-mono text-sm text-gray-600 uppercase">
                                {section.imageAlt}
                              </div>
                            </div>
                          </div>
                          <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 transform rotate-12"></div>
                        </div>

                        <div className="space-y-6">
                          <span className="font-mono text-sm text-gray-500 uppercase tracking-wider">
                            {String(index + 1).padStart(2, "0")} / Technical
                            Implementation
                          </span>
                          <h3 className="text-4xl font-black leading-tight text-gray-900">
                            {section.title}
                          </h3>
                          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            {section.description}
                          </p>
                          <div className="w-32 h-1 bg-black mx-auto"></div>
                        </div>
                      </div>
                    );
                  } else if (layoutType === 1) {
                    // Asymmetric grid layout
                    return (
                      <div
                        key={section.id}
                        ref={(el) => {
                          if (el) projectSectionsRef.current[index] = el;
                        }}
                        className="grid grid-cols-5 gap-12 items-center"
                      >
                        <div className="col-span-2">
                          <div
                            className="relative w-full h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
                            style={{
                              clipPath:
                                "polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)",
                            }}
                          >
                            <div className="text-center">
                              <div className="text-5xl mb-4 opacity-60">📊</div>
                              <div className="font-mono text-xs text-gray-600 uppercase">
                                {section.imageAlt}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-3 space-y-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-2 h-2 bg-black"></div>
                            <span className="font-mono text-sm text-gray-500 uppercase">
                              Feature {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <h3 className="text-3xl font-black leading-tight text-gray-900">
                            {section.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {section.description}
                          </p>
                          <div className="flex space-x-2">
                            <div className="w-8 h-1 bg-black"></div>
                            <div className="w-4 h-1 bg-gray-400"></div>
                            <div className="w-2 h-1 bg-gray-300"></div>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (layoutType === 2) {
                    // Stacked vertical layout
                    return (
                      <div
                        key={section.id}
                        ref={(el) => {
                          if (el) projectSectionsRef.current[index] = el;
                        }}
                        className="max-w-3xl mx-auto"
                      >
                        <div className="space-y-8">
                          <div className="text-right">
                            <span className="font-mono text-sm text-gray-500 uppercase tracking-wider">
                              Development Phase{" "}
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-4xl font-black leading-tight text-gray-900 mt-2">
                              {section.title}
                            </h3>
                          </div>

                          <div
                            className="relative w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
                            style={{
                              clipPath:
                                "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
                            }}
                          >
                            <div className="text-center">
                              <div className="text-4xl mb-4 opacity-60">🔧</div>
                              <div className="font-mono text-xs text-gray-600 uppercase">
                                {section.imageAlt}
                              </div>
                            </div>
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 border border-black transform rotate-45"></div>
                          </div>

                          <p className="text-xl text-gray-700 leading-relaxed">
                            {section.description}
                          </p>
                          <div className="w-24 h-1 bg-black ml-auto"></div>
                        </div>
                      </div>
                    );
                  } else {
                    // Traditional side-by-side but with twist
                    return (
                      <div
                        key={section.id}
                        ref={(el) => {
                          if (el) projectSectionsRef.current[index] = el;
                        }}
                        className="grid md:grid-cols-2 gap-16 items-center"
                      >
                        <div className="space-y-6 order-2 md:order-1">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-1 bg-gray-400"></div>
                            <span className="font-mono text-sm text-gray-500 uppercase tracking-wider">
                              Tech Stack {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <h3 className="text-3xl font-black leading-tight text-gray-900">
                            {section.title}
                          </h3>

                          <p className="text-gray-700 leading-relaxed text-lg">
                            {section.description}
                          </p>

                          {/* Tech indicators */}
                          <div className="flex space-x-2">
                            <div className="px-3 py-1 bg-black text-white text-xs font-mono">
                              NODE.JS
                            </div>
                            <div className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-mono">
                              REACT
                            </div>
                            <div className="px-3 py-1 bg-green-600 text-white text-xs font-mono">
                              AWS
                            </div>
                          </div>

                          <div className="w-20 h-1 bg-black"></div>
                        </div>

                        <div className="relative order-1 md:order-2">
                          <div
                            className="relative w-full h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
                            style={{
                              clipPath:
                                "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                            }}
                          >
                            <div className="text-center">
                              <div className="text-5xl mb-4 opacity-60">💻</div>
                              <div className="font-mono text-sm text-gray-600 uppercase">
                                {section.imageAlt}
                              </div>
                            </div>
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 opacity-80 transform -rotate-12"></div>
                        </div>
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

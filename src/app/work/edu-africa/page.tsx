"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "../../../components/Navbar";
import PageTransition, {
  TransitionOverlay,
} from "../../../components/PageTransition";

gsap.registerPlugin(ScrollTrigger);

interface ProjectSection {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
}

interface ExperienceSection {
  id: string;
  title: string;
  stat: string;
  description: string;
  color: string;
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
  reflectionQuote?: string;
}

const experienceSections: ExperienceSection[] = [
  {
    id: "arrival",
    title: "First Steps in Ghana",
    subtitle: "Culture Shock and Wonder",
    description:
      "Landing in Accra was my first real encounter with African culture beyond textbooks and documentaries. The vibrant energy, the warmth of the people, and the complexity of urban Ghana immediately challenged my preconceptions.",
    extendedText:
      "Walking through the bustling streets of Osu, I was struck by the juxtaposition of modern technology and traditional practices. Mobile money transactions happening next to street vendors selling traditional kente cloth. Solar panels on buildings that had been there for decades. This wasn't the Africa I had imagined—it was far more complex, dynamic, and forward-thinking.",
    photoCluster: [
      "airport_arrival",
      "accra_streets",
      "first_meal",
      "university_campus",
    ],
    color: "bg-emerald-400",
    reflectionQuote:
      "My first realization: I had so much to unlearn before I could truly learn.",
  },
  {
    id: "education_system",
    title: "Understanding Local Education",
    subtitle: "Beyond the Digital Divide",
    description:
      "Visiting rural schools opened my eyes to the real challenges and innovative solutions already happening in African education. Teachers were doing incredible work with limited resources, and students showed remarkable resilience and creativity.",
    extendedText:
      "In a small village school outside Kumasi, I watched a teacher use hand-drawn diagrams to explain complex mathematical concepts that students grasped immediately. The 'digital divide' wasn't just about access to technology—it was about relevant, culturally appropriate content. Students weren't waiting for solutions; they were creating them. I saw mobile apps built by teenage programmers, peer-to-peer learning networks, and community-funded internet cafes that became educational hubs.",
    photoCluster: [
      "rural_school",
      "teacher_chalkboard",
      "students_learning",
      "village_classroom",
      "community_center",
    ],
    color: "bg-green-500",
    reflectionQuote:
      "Innovation doesn't require the latest technology—it requires understanding real needs.",
  },
  {
    id: "community_integration",
    title: "Living with Host Families",
    subtitle: "Learning Through Daily Life",
    description:
      "Staying with local families taught me more about education, community, and values than any classroom could. Every meal was a lesson, every conversation a window into different worldviews.",
    extendedText:
      "My host mother, Akosua, was a primary school teacher who had been educating children for 25 years. She taught me that education extends far beyond formal schooling. Children learned responsibility by helping with family businesses, gained financial literacy through market transactions, and developed problem-solving skills through daily challenges like water collection and power outages. The community itself was a classroom, with elders as professors and life experiences as curriculum.",
    photoCluster: [
      "host_family",
      "family_dinner",
      "market_lessons",
      "storytelling_evening",
    ],
    color: "bg-teal-400",
    reflectionQuote:
      "The most profound education happens in the spaces between formal lessons.",
  },
  {
    id: "collaborative_work",
    title: "Building Together",
    subtitle: "Co-creation Over Charity",
    description:
      "Working directly with local developers and educators taught me the importance of collaboration over charity. They weren't looking for handouts—they were looking for partners who respected their expertise and local knowledge.",
    extendedText:
      "Kwame, a brilliant developer from Accra, became my mentor rather than my mentee. He showed me how to build applications that worked on 2G networks, how to design interfaces that made sense in multilingual contexts, and how to create solutions that communities could maintain and improve themselves. We spent late nights coding together, not because I was helping him, but because we were solving problems that neither of us could tackle alone.",
    photoCluster: [
      "coding_together",
      "team_meetings",
      "whiteboard_planning",
      "late_night_debugging",
      "solution_testing",
    ],
    color: "bg-lime-400",
    reflectionQuote:
      "The best solutions emerge when different perspectives collaborate as equals.",
  },
  {
    id: "perspective_shift",
    title: "Redefining Development",
    subtitle: "From Savior to Student",
    description:
      "The trip fundamentally changed how I think about 'development' and 'helping.' I realized that sustainable change comes from amplifying existing efforts, not imposing external solutions.",
    extendedText:
      "I arrived thinking I would 'help' solve educational problems in Africa. I left understanding that the problems I thought existed were often misunderstood, and the solutions were already being developed by people who understood the context better than I ever could. My role wasn't to be a savior—it was to be a bridge, connecting resources and knowledge across different contexts while learning from approaches that challenged Western assumptions about education and technology.",
    photoCluster: [
      "reflection_moment",
      "community_gathering",
      "farewell_ceremony",
    ],
    color: "bg-green-600",
    reflectionQuote:
      "True development means recognizing that everyone has something to teach and something to learn.",
  },
  {
    id: "ongoing_impact",
    title: "Continuing the Journey",
    subtitle: "Relationships Beyond the Trip",
    description:
      "The study abroad program ended, but the relationships and lessons continue. The platform we built together is now being used and improved by the communities themselves, exactly as it should be.",
    extendedText:
      "Two years later, I still receive updates from teachers using the platform, suggestions from students for new features, and innovations from developers who have taken the codebase in directions I never imagined. The project has become truly theirs, which was always the goal. More importantly, the friendships and professional relationships formed during those three months continue to challenge and inspire my work today. They've made me a better developer, a more thoughtful designer, and a more globally-minded person.",
    photoCluster: [
      "platform_usage",
      "ongoing_collaboration",
      "global_connections",
      "impact_stories",
    ],
    color: "bg-emerald-500",
    reflectionQuote:
      "The end of a program is just the beginning of real collaboration.",
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
                    <span className="block text-gray-900">EDU</span>
                    <span className="block text-green-600 ml-16">AFRICA</span>
                  </h1>
                  <div className="w-40 h-2 bg-green-600 ml-16 mb-8"></div>
                  <p className="text-xl text-gray-700 max-w-lg ml-16 leading-relaxed mb-12">
                    Transforming education across Africa through technology,
                    community engagement, and culturally relevant learning
                    experiences.
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
                    <div className="w-full h-64 bg-gradient-to-br from-green-200 to-emerald-300 border-2 border-dotted border-gray-400 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl mb-4">🌍</div>
                        <div className="font-mono text-sm text-gray-600">
                          educational_impact.render()
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-yellow-400 border-2 border-black rotate-45"></div>
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

                          {section.reflectionQuote && (
                            <blockquote className="bg-white/60 border-2 border-dotted border-gray-600 p-6 italic text-lg text-gray-900 font-medium">
                              "{section.reflectionQuote}"
                            </blockquote>
                          )}
                        </div>

                        {/* Photo cluster */}
                        <div className="lg:col-span-1">
                          {section.photoCluster && (
                            <div className="space-y-4">
                              <span className="font-mono text-xs text-gray-600 uppercase tracking-wider">
                                Memories from {section.title.toLowerCase()}
                              </span>

                              {/* Dynamic photo grid layouts */}
                              {index % 3 === 0 && (
                                // Layout 1: Large top, two small bottom
                                <div className="space-y-3">
                                  <div className="w-full h-40 bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-500 flex items-center justify-center">
                                    <div className="text-center">
                                      <div className="text-2xl mb-1">📸</div>
                                      <div className="font-mono text-xs text-gray-700">
                                        {section.photoCluster[0]}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-3">
                                    {section.photoCluster
                                      .slice(1, 3)
                                      .map((photo, photoIndex) => (
                                        <div
                                          key={photoIndex}
                                          className="h-24 bg-gradient-to-br from-gray-200 to-gray-350 border border-gray-500 flex items-center justify-center"
                                        >
                                          <div className="text-center">
                                            <div className="text-lg mb-1">
                                              📷
                                            </div>
                                            <div className="font-mono text-xs text-gray-700">
                                              {photo}
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                  </div>
                                  {section.photoCluster[3] && (
                                    <div className="w-3/4 h-28 bg-gradient-to-br from-gray-250 to-gray-400 border border-gray-500 mx-auto flex items-center justify-center">
                                      <div className="text-center">
                                        <div className="text-xl mb-1">🖼️</div>
                                        <div className="font-mono text-xs text-gray-700">
                                          {section.photoCluster[3]}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}

                              {index % 3 === 1 && (
                                // Layout 2: Three stacked different sizes
                                <div className="space-y-3">
                                  <div className="w-full h-32 bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-500 flex items-center justify-center">
                                    <div className="text-center">
                                      <div className="text-2xl mb-1">📸</div>
                                      <div className="font-mono text-xs text-gray-700">
                                        {section.photoCluster[0]}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-4/5 h-36 bg-gradient-to-br from-gray-200 to-gray-350 border border-gray-500 ml-auto flex items-center justify-center">
                                    <div className="text-center">
                                      <div className="text-xl mb-1">📷</div>
                                      <div className="font-mono text-xs text-gray-700">
                                        {section.photoCluster[1]}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                    {section.photoCluster
                                      .slice(2, 5)
                                      .map((photo, photoIndex) => (
                                        <div
                                          key={photoIndex}
                                          className="h-20 bg-gradient-to-br from-gray-250 to-gray-400 border border-gray-500 flex items-center justify-center"
                                        >
                                          <div className="text-center">
                                            <div className="text-sm mb-1">
                                              🖼️
                                            </div>
                                            <div className="font-mono text-xs text-gray-700">
                                              {photo}
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              )}

                              {index % 3 === 2 && (
                                // Layout 3: Side by side with bottom
                                <div className="space-y-3">
                                  <div className="grid grid-cols-2 gap-3">
                                    {section.photoCluster
                                      .slice(0, 2)
                                      .map((photo, photoIndex) => (
                                        <div
                                          key={photoIndex}
                                          className="h-32 bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-500 flex items-center justify-center"
                                        >
                                          <div className="text-center">
                                            <div className="text-xl mb-1">
                                              📸
                                            </div>
                                            <div className="font-mono text-xs text-gray-700">
                                              {photo}
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                  </div>
                                  {section.photoCluster[2] && (
                                    <div className="w-full h-28 bg-gradient-to-br from-gray-200 to-gray-350 border border-gray-500 flex items-center justify-center">
                                      <div className="text-center">
                                        <div className="text-2xl mb-1">📷</div>
                                        <div className="font-mono text-xs text-gray-700">
                                          {section.photoCluster[2]}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  {section.photoCluster[3] && (
                                    <div className="w-2/3 h-24 bg-gradient-to-br from-gray-250 to-gray-400 border border-gray-500 ml-auto flex items-center justify-center">
                                      <div className="text-center">
                                        <div className="text-lg mb-1">🖼️</div>
                                        <div className="font-mono text-xs text-gray-700">
                                          {section.photoCluster[3]}
                                        </div>
                                      </div>
                                    </div>
                                  )}
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
                      The Journey Continues
                    </h3>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      This study abroad experience fundamentally changed not
                      just how I approach technology and education, but how I
                      see my role as a global citizen. The relationships built
                      and lessons learned continue to shape every project I work
                      on.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed italic">
                      The platform was just the beginning—the real impact has
                      been the ongoing collaborations, cross-cultural
                      friendships, and expanded worldview that make me a better
                      developer and human being.
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

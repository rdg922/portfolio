"use client";

import { useRef, useState } from "react";
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
  src: string;
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

export default function ExperiencePage() {
  const experienceSectionsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
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

  return (
    <>
      <TransitionOverlay />
      <PageTransition backgroundColor="bg-gray-50">
        <div className="min-h-screen bg-gray-50 text-gray-900 relative">
          {/* Hero Section */}
          <div className="relative pt-32 pb-20 px-8 bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-8">
                  <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
                    <span className="block text-gray-900">Global</span>
                    <span className="block text-green-600 ml-16">
                      Experience
                    </span>
                  </h1>
                  <div className="w-40 h-2 bg-green-600 ml-16 mb-8"></div>
                  <p className="text-xl text-gray-700 max-w-lg ml-16 leading-relaxed mb-8">
                    Four transformative weeks in South Africa working with Safe
                    Cities, exploring Cape Town and Durban, and discovering how
                    technology can create meaningful community impact through
                    Ubuntu philosophy.
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
                          "/work/edu-africa/project",
                          e.currentTarget,
                          "bg-green-600"
                        )
                      }
                      className="group inline-flex items-center space-x-2 bg-green-600 border-2 border-green-600 px-6 py-3 text-white hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                      <span className="font-mono text-sm uppercase tracking-wider">
                        View Project
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
                      alt="Cape Town experience - Table Mountain and team collaboration"
                      width={500}
                      height={400}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Sections */}
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
                    Those four weeks in South Africa—three in Cape Town and one
                    exploring Durban and Saint Lucia—fundamentally transformed
                    how I approach technology, community, and my role as a
                    global citizen. Working with Safe Cities taught me that
                    sustainable change comes from relationships, not just
                    solutions.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed italic">
                    The platform was just the beginning. The real impact has
                    been the ongoing collaboration with South African
                    communities, the Ubuntu philosophy that now guides my work,
                    and the understanding that the best technology amplifies
                    human connection rather than replacing it.
                  </p>
                  <div className="w-32 h-2 bg-green-600 mx-auto mt-8"></div>
                </div>
              </div>
            </div>
          </div>

      </PageTransition>
    </>
  );
}

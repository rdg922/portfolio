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
      <PageTransition backgroundColor="bg-green-600">
        <div className="min-h-screen bg-green-600 text-white relative overflow-hidden">
          {/* Flowing background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-32 right-16 w-96 h-96 bg-emerald-400 rounded-full opacity-15 animate-bounce"></div>
            <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-lime-400 rounded-full opacity-10 animate-ping"></div>
          </div>

          {/* Hero Section */}
          <div className="relative py-40 sm:py-60 px-4 sm:px-8 z-10">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center lg:text-left">
                {/* Header content - centered on mobile, left-aligned on desktop */}
                <div className="w-full lg:col-span-8 mb-8 lg:mb-0">
                  <div className="space-y-6 sm:space-y-8">
                    <div className="overflow-hidden">
                      <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-none mb-4 sm:mb-6 transform hover:skew-y-1 transition-transform duration-300">
                        <span className="block text-white animate-pulse">
                          Ubuntu
                        </span>
                        <span className="block text-yellow-300 lg:ml-8 transform rotate-1">
                          Journey
                        </span>
                      </h1>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4">
                      <div className="w-12 sm:w-20 h-0.5 sm:h-1 bg-yellow-300 transform skew-x-12"></div>
                      <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-yellow-300 transform -skew-x-12"></div>
                      <div className="w-4 sm:w-8 h-0.5 sm:h-1 bg-yellow-300"></div>
                    </div>

                    <div className="relative">
                      <p className="text-base sm:text-xl text-green-100 max-w-lg mx-auto lg:mx-0 lg:ml-8 leading-relaxed mb-6 sm:mb-8 transform hover:translate-x-2 transition-transform duration-300">
                        Four transformative weeks in South Africa—from Cape
                        Town's vibrant streets to Durban's coastal energy. A
                        journey of cultural immersion, community connection, and
                        discovering how technology bridges hearts across
                        continents.
                      </p>
                      <div className="absolute -left-2 lg:-left-4 top-0 w-1 sm:w-2 h-full bg-yellow-300 opacity-50 transform skew-y-12 hidden lg:block"></div>
                    </div>

                    {/* Flowing Navigation Links */}
                    <div className="lg:ml-8 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
                      <button
                        onClick={(e) =>
                          triggerPageTransition(
                            "/#my-work",
                            e.currentTarget,
                            "bg-gray-50"
                          )
                        }
                        className="group relative overflow-hidden bg-amber-50 text-green-800 px-6 sm:px-8 py-3 sm:py-4 transform -rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105 cursor-pointer border-2 border-green-800 z-20 text-sm sm:text-base"
                      >
                        <span className="relative z-10 font-mono uppercase tracking-wider font-bold group-hover:text-amber-50 transition-colors duration-300">
                          More Adventures
                        </span>
                        <div className="absolute inset-0 bg-green-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </button>

                      <button
                        onClick={(e) =>
                          triggerPageTransition(
                            "/work/edu-africa/project",
                            e.currentTarget,
                            "bg-gray-900"
                          )
                        }
                        className="group relative overflow-hidden bg-transparent border-2 border-amber-200 text-amber-100 px-6 sm:px-8 py-3 sm:py-4 transform rotate-1 hover:-rotate-1 transition-all duration-500 hover:scale-105 cursor-pointer z-20 text-sm sm:text-base"
                      >
                        <span className="relative z-10 font-mono uppercase tracking-wider font-bold group-hover:text-green-800 transition-colors duration-300">
                          Technical Deep Dive
                        </span>
                        <div className="absolute inset-0 bg-amber-200 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image - below text on mobile, right side on desktop */}
                <div className="w-full max-w-md lg:max-w-none lg:col-span-4 mt-8 lg:mt-0">
                  <div className="relative group">
                    <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-yellow-300 to-green-300 rounded-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 blur"></div>
                    <div className="relative bg-white rounded-lg overflow-hidden transform rotate-2 group-hover:-rotate-1 transition-transform duration-500">
                      <Image
                        src={"/images/2025-05-17-007.jpg"}
                        alt="Ubuntu journey - South Africa experience"
                        width={500}
                        height={400}
                        className="w-full h-64 sm:h-80 lg:h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fluid Experience Sections */}
          <div className="relative py-12 sm:py-20 px-4 sm:px-8 z-10">
            <div className="max-w-6xl mx-auto space-y-20 sm:space-y-32">
              {experienceSections.map((section, index) => {
                const isEven = index % 2 === 0;
                const rotationClass = isEven ? "rotate-1" : "-rotate-1";
                const flowDirection = isEven
                  ? "translate-x-8"
                  : "-translate-x-8";

                return (
                  <div
                    key={section.id}
                    ref={(el) => {
                      if (el) experienceSectionsRef.current[index] = el;
                    }}
                    className={`relative transform ${rotationClass} hover:rotate-0 transition-all duration-700 hover:scale-105`}
                  >
                    {/* Flowing background blob */}
                    <div
                      className={`absolute inset-0 ${section.color} opacity-20 rounded-full transform scale-150 blur-3xl animate-pulse`}
                    ></div>

                    <div className="relative bg-green-900 bg-opacity-60 backdrop-blur-sm border-2 border-amber-200 border-opacity-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 hover:bg-opacity-80 transition-all duration-500 shadow-2xl">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Content */}
                        <div
                          className={`${
                            isEven ? "lg:order-1" : "lg:order-2"
                          } space-y-4 sm:space-y-6`}
                        >
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div
                              className={`w-2 h-2 sm:w-3 sm:h-3 ${section.color} rounded-full animate-bounce`}
                            ></div>
                            <div
                              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${section.color} rounded-full animate-bounce`}
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className={`w-1 h-1 ${section.color} rounded-full animate-bounce`}
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>

                          <div className="space-y-3 sm:space-y-4">
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight transform hover:skew-y-1 transition-transform duration-300">
                              {section.title}
                            </h2>
                            {section.subtitle && (
                              <h3 className="text-base sm:text-xl text-green-900 font-bold bg-amber-200 inline-block px-2 sm:px-3 py-1 rounded-lg transform hover:translate-x-2 transition-transform duration-300">
                                {section.subtitle}
                              </h3>
                            )}
                          </div>

                          <div className="space-y-3 sm:space-y-4">
                            <p className="text-sm sm:text-lg text-amber-50 leading-relaxed font-medium bg-green-900 bg-opacity-80 p-3 sm:p-4 rounded-lg backdrop-blur-sm border border-green-700">
                              {section.description}
                            </p>
                            {section.extendedText && (
                              <p className="text-xs sm:text-base text-amber-100 leading-relaxed bg-green-800 bg-opacity-70 p-3 sm:p-4 rounded-lg backdrop-blur-sm border border-green-600">
                                {section.extendedText}
                              </p>
                            )}
                          </div>

                          {/* Flowing decorative elements */}
                          <div className="flex space-x-2 mt-4 sm:mt-6">
                            <div
                              className={`h-0.5 sm:h-1 ${section.color} rounded-full transition-all duration-1000 hover:w-16 sm:hover:w-24`}
                              style={{ width: "2rem" }}
                            ></div>
                            <div
                              className={`h-0.5 sm:h-1 ${section.color} rounded-full transition-all duration-1000 hover:w-12 sm:hover:w-16`}
                              style={{ width: "1.5rem" }}
                            ></div>
                            <div
                              className={`h-0.5 sm:h-1 ${section.color} rounded-full transition-all duration-1000 hover:w-8 sm:hover:w-12`}
                              style={{ width: "1rem" }}
                            ></div>
                          </div>
                        </div>

                        {/* Photo cluster */}
                        <div
                          className={`${
                            isEven ? "lg:order-2" : "lg:order-1"
                          } relative mt-6 lg:mt-0`}
                        >
                          {section.photoCluster &&
                            section.photoCluster.length > 0 && (
                              <div className="relative space-y-3 sm:space-y-4">
                                {section.photoCluster.map(
                                  (photo, photoIndex) => (
                                    <div
                                      key={photoIndex}
                                      className={`relative transform transition-all duration-500 hover:scale-110 hover:z-10 ${
                                        photoIndex === 0
                                          ? "rotate-2 hover:-rotate-1"
                                          : photoIndex === 1
                                          ? "-rotate-3 hover:rotate-2 translate-x-4 sm:translate-x-8"
                                          : "rotate-1 hover:-rotate-2 -translate-x-2 sm:-translate-x-4"
                                      }`}
                                      style={{
                                        marginTop:
                                          photoIndex > 0 ? "-1rem" : "0",
                                        marginLeft:
                                          photoIndex % 2 === 0 ? "0" : "1rem",
                                      }}
                                    >
                                      <div className="relative bg-white p-1 sm:p-2 rounded-lg shadow-2xl">
                                        <MediaDisplay
                                          src={photo}
                                          alt={`${section.title} - Image ${
                                            photoIndex + 1
                                          }`}
                                          className="w-full h-32 sm:h-48 object-cover rounded"
                                        />
                                        <div
                                          className={`absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-800 border-2 border-amber-200 rounded-full`}
                                        ></div>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Flowing conclusion */}
              <div className="text-center mt-20 sm:mt-32 max-w-4xl mx-auto">
                <div className="relative bg-green-900 bg-opacity-80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-12 transform hover:scale-105 transition-all duration-500 border-2 border-amber-200 border-opacity-50 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-green-300 rounded-2xl sm:rounded-3xl opacity-15 animate-pulse"></div>
                  <div className="relative space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-3xl font-black text-amber-100">
                      Ubuntu: "I am because we are"
                    </h3>
                    <p className="text-sm sm:text-lg text-amber-50 leading-relaxed max-w-2xl mx-auto font-medium">
                      This journey taught me that the most powerful technology
                      isn't code—it's the connections we build between cultures,
                      communities, and hearts. Every line of code became a
                      bridge, every feature a way to serve something greater
                      than ourselves.
                    </p>
                    <div className="flex justify-center space-x-3 sm:space-x-4">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-300 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-green-300 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-300 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
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

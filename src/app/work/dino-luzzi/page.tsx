"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import PageTransition, {
  TransitionOverlay,
  triggerPageTransition,
} from "../../../components/PageTransition";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

// Note: Client components can't export metadata directly in app router
// Metadata would need to be in a layout.tsx or moved to a server component

gsap.registerPlugin(ScrollTrigger);

export default function DinoLuzziPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header racing entrance animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          x: -window.innerWidth,
          rotation: -5,
          scale: 0.8,
        },
        {
          x: 0,
          rotation: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        }
      );
    }

    // Race car driving animation
    if (carRef.current) {
      gsap.set(carRef.current, { x: -100, y: 0 });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        onUpdate: (self) => {
          const progress = self.progress;

          gsap.set(carRef.current, {
            x: progress * (window.innerWidth + 200) - 100,
            y: Math.sin(progress * Math.PI * 4) * 10, // Bouncing effect
            rotation: Math.sin(progress * Math.PI * 8) * 2, // Slight wobble
          });
        },
      });
    }

    // Section reveal animations with racing theme
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      gsap.set(section, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        rotation: index % 2 === 0 ? -2 : 2,
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        animation: gsap.to(section, {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.1,
        }),
        toggleActions: "play none none reverse",
      });
    });

    // Floating racing elements
    const racingElements = document.querySelectorAll(".racing-element");
    racingElements.forEach((element, index) => {
      gsap.to(element, {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-45, 45)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.3,
      });
    });

    // Checkered flag animation
    const checkeredFlags = document.querySelectorAll(".checkered-flag");
    checkeredFlags.forEach((flag) => {
      gsap.to(flag, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "none",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <TransitionOverlay />
      <PageTransition backgroundColor="bg-red-500">
        <div className="min-h-screen bg-red-500 text-white relative overflow-hidden">
          {/* Racing track background pattern */}
          <div className="fixed inset-0 opacity-10 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 20px, rgba(0,0,0,0.5) 20px, rgba(0,0,0,0.5) 40px),
                  repeating-linear-gradient(0deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 100px, rgba(0,0,0,0.5) 100px, rgba(0,0,0,0.5) 110px)
                `,
              }}
            />
          </div>

          {/* Racing themed floating elements */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Racing flags */}
            <div
              className="checkered-flag absolute top-20 left-1/4 w-16 h-12 bg-gradient-to-r from-white via-black to-white border-2 border-white opacity-30 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]"
              style={{
                backgroundImage: `
                     repeating-conic-gradient(
                       from 0deg at 50% 50%,
                       white 0deg 45deg,
                       black 45deg 90deg
                     )
                   `,
                backgroundSize: "8px 8px",
              }}
            ></div>

            {/* Tire marks and racing elements */}
            <div className="racing-element absolute top-1/3 right-1/4 w-20 h-8 bg-white border-2 border-gray-200 rotate-45 opacity-40 rounded-full shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]"></div>
            <div className="racing-element absolute bottom-1/4 left-12 w-24 h-6 bg-yellow-300 border-2 border-white rotate-12 opacity-50 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]"></div>
            <div className="racing-element absolute bottom-20 right-1/3 w-16 h-16 bg-white border-2 border-gray-200 -rotate-12 opacity-45 rounded-full shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]"></div>

            {/* Speed lines */}
            <div className="absolute top-1/2 left-8 w-32 h-1 bg-white opacity-30 rotate-12"></div>
            <div className="absolute top-3/4 right-8 w-24 h-1 bg-white opacity-25 -rotate-12"></div>
            <div className="absolute top-16 right-16 w-20 h-1 bg-white opacity-35 rotate-45"></div>
          </div>

          {/* Racing car that follows scroll */}
          <div
            ref={carRef}
            className="fixed top-1/2 transform -translate-y-1/2 z-30 pointer-events-none"
          >
            <div className="text-6xl transform -rotate-12">🏎️</div>
            <div className="absolute -top-2 -right-2 text-yellow-400 text-2xl">
              💨
            </div>
          </div>

          {/* Back to Works button */}
          <div
            className="fixed top-28 left-8 z-50"
            onClick={(e) => {
              e.preventDefault();
              triggerPageTransition("/#my-work", e.currentTarget, "bg-gray-50");
            }}
          >
            <Link
              href="/#my-work"
              className="group bg-white border-2 border-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 font-black text-black flex items-center gap-2"
            >
              <span className="text-xl group-hover:translate-x-[-4px] transition-transform duration-300">
                ←
              </span>
              Back to Works
            </Link>
          </div>

          {/* Header with racing theme */}
          <div ref={headerRef} className="relative z-10 pt-32 pb-20 px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center relative">
                {/* Racing stripes background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-red-300 to-white opacity-20 transform skew-y-1"></div>

                <div className="relative">
                  <div className="flex items-center justify-center mb-6">
                    <div
                      className="checkered-flag w-8 h-6 mr-4 border border-white"
                      style={{
                        backgroundImage: `
                             repeating-conic-gradient(
                               from 0deg at 50% 50%,
                               white 0deg 45deg,
                               black 45deg 90deg
                             )
                           `,
                        backgroundSize: "4px 4px",
                      }}
                    ></div>
                    <span className="font-mono text-sm uppercase tracking-wider bg-yellow-400 px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black">
                      Dino Luzzi Award Winner 🏆
                    </span>
                    <div
                      className="checkered-flag w-8 h-6 ml-4 border border-white"
                      style={{
                        backgroundImage: `
                             repeating-conic-gradient(
                               from 0deg at 50% 50%,
                               white 0deg 45deg,
                               black 45deg 90deg
                             )
                           `,
                        backgroundSize: "4px 4px",
                      }}
                    ></div>
                  </div>

                  <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-6">
                    <span className="block text-white">DINO</span>
                    <span className="block text-black">LUZZI</span>
                    <span className="block text-yellow-300 text-5xl md:text-6xl">
                      REDESIGN
                    </span>
                  </h1>

                  <div className="w-32 h-2 bg-white mx-auto mb-8"></div>

                  <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed text-white">
                    🏁 A high-speed 24-hour hackathon project that earned us the
                    Dino Luzzi award! We turbocharged Dino Luzzi&apos;s website
                    with interactive 3D elements, smooth animations, and a
                    racing-inspired design.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content sections */}
          <div ref={containerRef} className="relative z-10 px-8 pb-20">
            <div className="max-w-6xl mx-auto space-y-32">
              {/* Project Overview */}
              <section
                ref={(el) => {
                  sectionsRef.current[0] = el as HTMLDivElement;
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white border-2 border-black font-black text-red-500 text-xl flex items-center justify-center rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mr-4">
                      01
                    </div>
                    <h2 className="text-4xl font-black text-white">
                      THE CHALLENGE
                    </h2>
                  </div>

                  <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 border border-black rotate-45"></div>

                    <p className="text-lg leading-relaxed mb-6 text-gray-900">
                      For the 2024 OSCHack 24-hour hackathon, two of my friends
                      and I tackled the challenge to redesign the website of{" "}
                      <strong>Dino Luzzi</strong>, one of the hackathon&apos;s
                      sponsors. Our mission: create new functionality, UI/UX
                      design, and style to make it more engaging and easier for
                      people to purchase the product.
                    </p>

                    <div className="grid grid-cols-3 gap-4 mt-8">
                      <div className="text-center p-4 bg-red-100 border border-red-300">
                        <div className="text-2xl mb-2">⚡</div>
                        <div className="font-mono text-sm text-gray-900">
                          React
                        </div>
                      </div>
                      <div className="text-center p-4 bg-yellow-100 border border-yellow-300">
                        <div className="text-2xl mb-2">🎮</div>
                        <div className="font-mono text-sm text-gray-900">
                          Three.js
                        </div>
                      </div>
                      <div className="text-center p-4 bg-blue-100 border border-blue-300">
                        <div className="text-2xl mb-2">🌊</div>
                        <div className="font-mono text-sm text-gray-900">
                          Framer Motion
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  {/* Dino Page 1 */}
                  <div className="aspect-video border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                    <Image
                      src="/images/dino-luzzi/Dino Page 1.webp"
                      alt="Dino Luzzi Website - Before Redesign"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 text-xs font-black border border-black">
                      BEFORE
                    </div>
                  </div>

                  {/* Racing decoration */}
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-black border border-gray-600 rounded-full opacity-60"></div>
                </div>
              </section>

              {/* 3D Implementation */}
              <section
                ref={(el) => {
                  if (el) sectionsRef.current[1] = el as HTMLDivElement;
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 lg:order-1 relative">
                  {/* Dino Page 2 */}
                  <div className="aspect-video border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                    <Image
                      src="/images/dino-luzzi/Dino Page 2.webp"
                      alt="Dino Luzzi Website - Interactive 3D Elements"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 text-xs font-black border border-black">
                      AFTER
                    </div>
                  </div>

                  {/* Speed lines decoration */}
                  <div className="absolute -top-2 -left-2 w-16 h-1 bg-black opacity-40 rotate-12"></div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-1 bg-black opacity-40 -rotate-12"></div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-500 border-2 border-black font-black text-black text-xl flex items-center justify-center -rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mr-4">
                      02
                    </div>
                    <h2 className="text-4xl font-black text-white">
                      INTERACTIVE 3D
                    </h2>
                  </div>

                  <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 border border-black rounded-full"></div>

                    <p className="text-lg leading-relaxed mb-6 text-gray-900">
                      We decided to give the website interactive 3D elements,
                      including a
                      <strong>
                        {" "}
                        3D can that follows the user&apos;s mouse
                      </strong>{" "}
                      and a
                      <strong> racecar that drives down the webpage</strong>,
                      revealing the features of Dino Luzzi&apos;s product as it
                      races along.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-900">
                      We built the website using <strong>React</strong> and used
                      <strong> Three.js and react-three-fiber</strong> for the
                      3D animations. On top of this, we used{" "}
                      <strong>Framer Motion</strong> for animations of regular
                      webpage elements.
                    </p>
                  </div>
                </div>
              </section>

              {/* My Contributions */}
              <section
                ref={(el) => {
                  if (el) sectionsRef.current[2] = el as HTMLDivElement;
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 border-2 border-black font-black text-white text-xl flex items-center justify-center rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mr-4">
                      03
                    </div>
                    <h2 className="text-4xl font-black text-white">MY ROLE</h2>
                  </div>

                  <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 border border-black rotate-45"></div>

                    <p className="text-lg leading-relaxed mb-6 text-gray-900">
                      I was in charge of embedding the{" "}
                      <strong>3D models</strong> and all of the{" "}
                      <strong>2D styles and animations</strong> my teammates had
                      made.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="p-4 bg-gray-100 border border-gray-300 text-center">
                        <div className="text-2xl mb-2">🎨</div>
                        <div className="font-mono text-sm text-gray-900">
                          3D Modeling
                        </div>
                      </div>
                      <div className="p-4 bg-gray-100 border border-gray-300 text-center">
                        <div className="text-2xl mb-2">🔧</div>
                        <div className="font-mono text-sm text-gray-900">
                          Physics Engine
                        </div>
                      </div>
                      <div className="p-4 bg-gray-100 border border-gray-300 text-center">
                        <div className="text-2xl mb-2">💫</div>
                        <div className="font-mono text-sm text-gray-900">
                          Animations
                        </div>
                      </div>
                      <div className="p-4 bg-gray-100 border border-gray-300 text-center">
                        <div className="text-2xl mb-2">🎭</div>
                        <div className="font-mono text-sm text-gray-900">
                          UI/UX Design
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  {/* Dino Page 3 */}
                  <div className="aspect-video border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                    <Image
                      src="/images/dino-luzzi/Dino Page 3.webp"
                      alt="Dino Luzzi Website - Development Process"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-purple-500 text-white px-2 py-1 text-xs font-black border border-black">
                      DEV
                    </div>
                  </div>

                  {/* Gear decoration */}
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gray-600 border border-black rounded-full opacity-50"></div>
                </div>
              </section>

              {/* Video Demo Section */}
              <section
                ref={(el) => {
                  if (el) sectionsRef.current[3] = el as HTMLDivElement;
                }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-blue-600 border-2 border-black font-black text-white text-xl flex items-center justify-center -rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mr-4">
                    04
                  </div>
                  <h2 className="text-4xl font-black text-white">DEMO VIDEO</h2>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 border border-black rounded-full"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 border border-black rotate-45"></div>

                    <p className="text-lg mb-8 text-gray-900">
                      Watch our website in action! 🏎️💨
                    </p>

                    {/* Video embed */}
                    <div className="aspect-video bg-black border-2 border-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                      <iframe
                        src="https://www.youtube.com/embed/6IuN5fvqCMw"
                        title="Dino Luzzi Website"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                        className="w-full h-full"
                        allowFullScreen
                      ></iframe>
                      <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-xs font-black border border-white">
                        LIVE
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Victory Section */}
              <section
                ref={(el) => {
                  if (el) sectionsRef.current[4] = el as HTMLDivElement;
                }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-yellow-400 border-2 border-black font-black text-black text-xl flex items-center justify-center rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mr-4">
                    🏆
                  </div>
                  <h2 className="text-4xl font-black text-white">
                    VICTORY LAP
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    {/* Winning photo */}
                    <div className="aspect-video border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                      <Image
                        src="/images/dino-luzzi/Dino Win.webp"
                        alt="Dino Luzzi Award Winners"
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 text-xs font-black border border-black">
                        AWARD WINNERS
                      </div>
                    </div>

                    {/* Victory confetti */}
                    <div className="absolute -top-2 -left-2 text-2xl">🎉</div>
                    <div className="absolute -bottom-2 -right-2 text-2xl">
                      🎊
                    </div>
                  </div>

                  <div>
                    <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 border-2 border-black rounded-full flex items-center justify-center text-xl">
                        🏁
                      </div>

                      <h3 className="text-3xl font-black mb-6 text-center text-gray-900">
                        WE WON! 🎉
                      </h3>

                      <p className="text-lg leading-relaxed text-center text-gray-900">
                        After 24 hours of coding, designing, and racing against
                        the clock, our team earned the prestigious Dino Luzzi
                        award! The judges were impressed by our innovative 3D
                        interactions and smooth user experience.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Links Section */}
              <section
                ref={(el) => {
                  if (el) sectionsRef.current[5] = el as HTMLDivElement;
                }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-white border-2 border-gray-600 font-black text-white text-xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mr-4">
                    🔗
                  </div>
                  <h2 className="text-4xl font-black text-white">
                    CHECK IT OUT
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Link
                    href="https://github.com/rdg922/hackathon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 relative"
                  >
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 border border-black rounded-full"></div>
                    <div className="text-4xl mb-4">📁</div>
                    <h3 className="font-black text-xl mb-2 text-gray-900">
                      GitHub Repo
                    </h3>
                    <p className="text-sm text-gray-600 font-mono">
                      View the source code
                    </p>
                    <div className="mt-4 text-2xl group-hover:scale-110 transition-transform text-gray-900">
                      →
                    </div>
                  </Link>

                  <Link
                    href="https://hackathon-s3ma.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 relative"
                  >
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 border border-black rotate-45"></div>
                    <div className="text-4xl mb-4">🌐</div>
                    <h3 className="font-black text-xl mb-2 text-gray-900">
                      Live Demo
                    </h3>
                    <p className="text-sm text-gray-600 font-mono">
                      Experience the site
                    </p>
                    <div className="mt-4 text-2xl group-hover:scale-110 transition-transform text-gray-900">
                      →
                    </div>
                  </Link>

                  <Link
                    href="https://devpost.com/software/dino-luzzi-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 relative"
                  >
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 border border-black rounded-full"></div>
                    <div className="text-4xl mb-4">🏆</div>
                    <h3 className="font-black text-xl mb-2 text-gray-900">
                      Devpost
                    </h3>
                    <p className="text-sm text-gray-600 font-mono">
                      Official submission
                    </p>
                    <div className="mt-4 text-2xl group-hover:scale-110 transition-transform text-gray-900">
                      →
                    </div>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}

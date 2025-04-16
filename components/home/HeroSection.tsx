"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { HeroModel } from "@/components/home/Hero-model";
import { useMediaQuery } from "react-responsive";
import ModelLights from "@/components/home/ModelLights";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPlay,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const channels = [
    {
      title: "Erza3",
      subsCount: "1.24M",
      icon: "/chOne.jpg",
      link: "https://www.youtube.com/c/erza3ma3serry",
    },
    {
      title: "Marwan Serry",
      subsCount: "643K",
      icon: "/chTwo.jpg",
      link: "https://www.youtube.com/channel/UCzejIGtATKRpOj3zFDRBLug",
    },
    {
      title: "Beta3 Aflam",
      subsCount: "582K",
      icon: "/chThree.jpg",
      link: "https://www.youtube.com/channel/UCFo0CfTq0pr7R920LZtdd0Q",
    },
  ];

  return (
    <section
      id="home"
      className="flex md:h-[120vh] h-[100vh] w-full items-center justify-center flex-col relative overflow-hidden"
    >
      {/* Background Texture Image */}
      <Image
        className="w-full h-full object-cover object-center bg-fixed opacity-50"
        alt="Hero Section Background Texture"
        src="/bg-textures/hero-texture.png"
        width={1920}
        height={1080}
      ></Image>
      {/* Background Grid */}
      <Image
        src="/grid.png"
        alt="Grid"
        width={800}
        height={800}
        className="w-full h-full absolute top-0 object-cover object-center -left-4 opacity-25"
      ></Image>
      {/* Background Neon Light - Top Right */}
      <Image
        alt="Neon Light"
        src="/hero-light.png"
        width={1417}
        height={1417}
        className="w-full h-[120vh] object-cover object-top absolute top-0 opacity-50"
      ></Image>
      {/* Background Neon Light - Light Two */}
      <Image
        alt="Neon Light"
        src="/light-3.png"
        width={864}
        height={1328}
        className="w-full h-full object-cover object-top absolute top-0 left-0"
      ></Image>
      {/* Background Neon Light - Light Three */}
      <Image
        alt="Neon Light"
        src="/light-1.png"
        width={1350}
        height={950}
        className="w-full h-full object-cover object-top absolute top-0 left-0"
      ></Image>
      {/* Background Neon Light - Light Four */}
      <Image
        alt="Neon Light"
        src="/light-4.png"
        width={964}
        height={1825}
        className="w-full h-full object-cover object-top absolute top-0 left-0"
      ></Image>
      {/* Top Side: Text, Description & CTAs*/}
      <div className="w-full mt-24 max-w-7xl h-[25%] absolute top-0 flex flex-col items-center justify-center gap-2">
        <h1 className="text-primary font-bold font-lufga text-3xl  md:text-4xl xl:text-5xl">
          Ideas Made Visually Real
        </h1>
        <p className="px-[10%] lg:px-[15%] text-accent font-montserrat text-md xl:text-lg text-justify justify-center-end">
          I create websites and videos that connect brands with people—through
          clean design, smooth motion, and storytelling built to leave a lasting
          impression.
        </p>
        <div className="w-full flex flex-row items-center justify-center z-10">
          <Link
            href={"#contact"}
            className="flex flex-row items-center justify-center gap-1 bg-primary text-background font-montserrat font-semibold fill-background rounded-md px-2 py-1 border-2 border-primary"
          >
            Contact Me
          </Link>
          <Link
            href={"#projects"}
            className="flex flex-row items-center justify-center gap-1 text-primary font-montserrat font-semibold fill-background rounded-md px-2 py-1 text-underline md:ml-32 lg:ml-48 lg:mr-12"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Under Model Shapes */}
      <div className="w-full h-[100vh] md:h-[150vh] max-w-7xl absolute -bottom-1/2">
        <div className="w-full h-full relative">
          <div className="animate-pulse bg-primary/15 backdrop-blur-md rounded-[50%] h-[90%] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4"></div>
          <div className="animate-pulse bg-transparent border-2 border-primary/15 rounded-[50%] h-[120%] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4"></div>
          <div className="animate-pulse bg-transparent border-2 border-primary/12 rounded-[50%] h-[150%] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4"></div>
          <div className="animate-pulse bg-transparent border-2 border-primary/9 rounded-[50%] h-[180%] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4"></div>
          <div className="animate-pulse bg-transparent border-2 border-primary/6 rounded-[50%] h-[210%] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4"></div>
          <div className="animate-pulse bg-transparent border-2 border-primary/3 rounded-[50%] h-[240%] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4"></div>
        </div>
      </div>

      {/* Bottom Side: 3D Model*/}
      <div className="w-full h-[75%] max-w-7xl flex flex-col items-center justify-center absolute bottom-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1], fov: 45 }}>
          <ModelLights />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
          />
          <group
            position={isMobile ? [0.05, -0.1, 0] : [0.01, -0.125, 0]}
            scale={isMobile ? 0.8 : 1}
            rotation={[
              0,
              scrollPosition > 800 ? 210 : (scrollPosition / 18000) * 180 + 30,
              0,
            ]}
          >
            <HeroModel />
          </group>
        </Canvas>

        {/* Bottom Side Fade */}
        <div className="w-screen h-1/2 md:h-1/4 absolute bottom-0 bg-gradient-to-b from-background/0 to-background"></div>
      </div>

      <div className="absolute bottom-1/3 left-1/6 border-[2px] border-primary rounded-3xl overflow-hidden hidden lg:flex flex-col items-center justify-center custom-animation-floating">
        {channels.map((channel, i) => (
          <Link
            key={i}
            href={channel.link}
            className={`w-full h-[10vh] flex flex-row items-center justify-between gap-2 px-2 ${i !== 2 && "border-b-2 border-secondary/10"}
                        transition-all backdrop-blur-sm bg-background/25 hover:bg-secondary/10
                        `}
          >
            <Image
              src={channel.icon}
              alt={channel.title}
              width={64}
              height={64}
              className="h-[6vh] w-[6vh] aspect-square rounded-full object-cover object-center"
            ></Image>
            <div className="w-full h-full items-start justify-center flex flex-col">
              <h3 className="text-sm whitespace-nowrap">{channel.title}</h3>
              <p className="text-secondary font-regular text-sm font-secondary">
                {channel.subsCount}
              </p>
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              color="#f9f9f9"
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>

      {/*Floating Card*/}
      <div className="absolute bottom-1/4 right-1/6 border-[2px] border-primary rounded-3xl overflow-hidden hidden lg:flex flex-col items-center justify-center custom-animation-floating">
        <div
          className="w-full h-[10vh] flex flex-row items-center justify-between gap-2 px-2
                        transition-all backdrop-blur-sm bg-background/25 hover:bg-secondary/10"
        >
          <FontAwesomeIcon
            icon={faUsers}
            width={32}
            height={32}
            color="#f9f9f9"
          />
          <div className="w-full h-full items-start justify-center flex flex-col">
            <h3 className="text-sm whitespace-nowrap font-secondary">
              {"> 1,000,000"}
            </h3>
            <p className="text-secondary font-regular text-sm font-secondary">
              Subscribers on Youtube!
            </p>
          </div>
        </div>
        <div
          className="w-full h-[10vh] flex flex-row items-center justify-between gap-2 px-2
                        transition-all backdrop-blur-sm bg-background/25 hover:bg-secondary/10"
        >
          <FontAwesomeIcon
            icon={faVideo}
            width={32}
            height={32}
            color="#f9f9f9"
          />
          <div className="w-full h-full items-start justify-center flex flex-col">
            <h3 className="text-sm whitespace-nowrap font-secondary">
              {"> 1,000"}
            </h3>
            <p className="text-secondary font-regular text-sm font-secondary">
              Videos on Youtube!
            </p>
          </div>
        </div>
        <div
          className="w-full h-[10vh] flex flex-row items-center justify-between gap-2 px-2
                        transition-all backdrop-blur-sm bg-background/25 hover:bg-secondary/10"
        >
          <FontAwesomeIcon
            icon={faPlay}
            width={32}
            height={32}
            color="#f9f9f9"
          />
          <div className="w-full h-full items-start justify-center flex flex-col">
            <h3 className="text-sm whitespace-nowrap font-secondary">
              {"> 1,000,000"}
            </h3>
            <p className="text-secondary font-regular text-sm font-secondary">
              Views on Youtube!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

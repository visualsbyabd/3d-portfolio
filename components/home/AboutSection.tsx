"use client";

import { TitleHeader } from "@/components/globals";
import React, { useEffect, useState } from "react";
import ModelLights from "@/components/home/ModelLights";
import { OrbitControls } from "@react-three/drei";
import { HeroModel } from "@/components/home/Hero-model";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { ZuesModel } from "@/components/home/Zues";
import ZuesModelLights from "@/components/home/ZuesModelLights";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Consts } from "@/utils";
import Link from "next/link";

const AboutSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="w-full lg:min-h-screen min-h-[150vh] flex flex-col items-center justify-center px-4 py-8 gap-4 relative">
      <Image
        src="/bg-textures/about-texture.jpg"
        alt="About Section Texture"
        width={1920}
        height={1080}
        className=" max-h-screen absolute left-1/2 top-1/2 -translate-1/2 object-cover object-center cursor-none w-screen mix-blend-screen opacity-5"
      />
      <div className="max-h-screen h-full max-w-screen w-full from-5% from-background to-35% to-background/0 bg-gradient-to-b absolute top-0"></div>
      <div className="max-h-screen h-full max-w-screen w-full from-5% from-background to-35% to-background/0 bg-gradient-to-t absolute top-0"></div>
      <Image
        src="/light-5.png"
        alt="About Section Light"
        width={1920}
        height={1080}
        className="absolute right opacity-50 top-1/2 -translate-y-1/2 object-cover object-center cursor-none overflow-hidden"
      />
      <Image
        src="/light-6.png"
        alt="About Section Light"
        width={1920}
        height={1080}
        className="absolute left-0 top-1/2 opacity-25 -translate-y-1/2 object-cover object-center cursor-none overflow-hidden"
      />
      <div className="max-w-7xl absolute flex flex-col items-center justify-center px-4 py-8 gap-4">
        <TitleHeader title="Featured Projects" sub="🚀 Don't Miss Out!" />
        <div className="w-full lg:h-[70vh] min-h-[120vh] lg:min-h-[10vh] items-center lg:items-start jusitfy-between flex lg:flex-row flex-col-reverse gap-4">
          <div className="lg:w-3/5 w-full flex flex-col lg:items-start items-center justify-center h-full gap-2">
            <h3 className="text-5xl text-primart font-lufga font-semibold text-start align-top">
              <span className="text-md text-primary/50 font-montserrat font-regular text-xl">
                I'm
              </span>{" "}
              Tharwat, <br></br>
              <span className="text-7xl font-lufga font-extrabold text-primart">
                Abdullah
              </span>
            </h3>
            <p className="xs:justify-center-end md:justify-center-end text-justify lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum
              dui, porttitor ut leo ut, vehicula aliquet ex. Etiam nec erat
              aliquet, sollicitudin enim id, vestibulum metus. Vivamus est
              lectus, imperdiet at nulla sed, rhoncus tempor nisl. Etiam et
              libero id velit pellentesque consectetur. Aenean cursus nibh orci,
              ut elementum orci bibendum quis. Proin efficitur nisl et orci
              pretium maximus. Praesent quam lacus, gravida eget dignissim nec,
              tempor in risus. Cras lacinia eleifend tempus. Nullam pretium
              lorem vitae lacus consectetur blandit. Duis ut diam ex.
            </p>
            <div className="w-full items-center justify-center lg:justify-start flex flex-row gap-4">
              {Consts.personalLinks.map((link, i) => (
                <Link href={link.href} key={i}>
                  <FontAwesomeIcon
                    icon={link.icon}
                    size="2xl"
                    className="opacity-50 hover:opacity-100 text-primary w-4 aspect-square cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:w-2/5 w-full h-full min-h-[70vh] lg:min-h-[25vh] relative overflow-hidden">
            <div className="lg:w-9/10 w-full aspect-square absolute left-1/2 top-1/2 -translate-1/2 rounded-2xl bg-background-varient lg:flex"></div>
            <div className="lg:w-9/10 w-full aspect-square absolute left-1/2 top-1/2 -translate-1/2 lg:mt-0">
              <Canvas camera={{ position: [0, 0, 1], fov: 45 }}>
                <ZuesModelLights />
                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  enableRotate={false}
                />
                <group
                  position={
                    isMobile ? [0.01, -0.25, -0.5] : [0.01, -0.3, -0.75]
                  }
                  scale={isMobile ? 0.85 : 0.9}
                  rotation={[
                    -0.25,
                    isMobile
                      ? scrollPosition / 3000 + 31
                      : scrollPosition / 2000 + 31,
                    0,
                  ]}
                >
                  <ZuesModel />
                </group>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;

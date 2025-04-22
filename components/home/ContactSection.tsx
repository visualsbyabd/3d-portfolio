"use client";
import React, { useEffect, useState } from "react";
import { TitleHeader } from "@/components/globals";
import { OfficeModel } from "@/components/home/Office";
import ModelLights from "@/components/home/ModelLights";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faPerson,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ContactSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  console.log(scrollPosition);

  return (
    <section className="w-full max-w-7xl min-h-screen lg:h-[70vh] h-[100vh] flex flex-col items-center justify-center px-4 py-8">
      {/* Layout Container */}
      <div className="w-full h-full mt-6 items-center justify-start gap-2 flex flex-col">
        <TitleHeader title="Get in Touch!" sub="📧 Contact Me Now!" />
        {/* Content Container */}
        <div className="w-full h-full relative rounded-2xl overflow-hidden">
          {/* Canvas Container */}
          <div className="w-full h-full top-0 left-0 absolute">
            <Canvas
              camera={{
                position: [0, 0, 2],
                fov: isMobile ? 25 : 50,
              }}
            >
              <ModelLights />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableRotate={false}
              />
              <group
                position={
                  isMobile
                    ? [0.05, -0.1, (0.25 - scrollPosition / 2500) * 2]
                    : [0.01, -0.125, (1 - scrollPosition / 1500) * 1.25]
                }
                scale={isMobile ? 0.8 : 1}
                rotation={[0, 0, 0]}
              >
                <OfficeModel />
              </group>
            </Canvas>
          </div>
          {/* Form Container */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center px-4 lg:px-0">
            <div className="lg:max-w-4xl w-full items-start justify-center flex flex-col gap-2 mb-8">
              <label htmlFor="email">Your Name</label>
              <div className="items-start justify-start flex flex-row w-full gap-4 bg-background/50 backdrop-blur-md rounded-lg px-2 py-3">
                <FontAwesomeIcon
                  icon={faPerson}
                  size="lg"
                  className="text-primary/50 mt-1"
                />

                <input
                  placeholder="Enter your name"
                  id="name"
                  className="text-primary text-md font-montserrat font-medium w-full focus:outline-none active:outline-none outline-none"
                />
              </div>
            </div>
            <div className="lg:max-w-4xl w-full items-start justify-center flex flex-col gap-2 mb-8">
              <label htmlFor="email">Your Email</label>
              <div className="items-start justify-start flex flex-row w-full gap-4 bg-background/50 backdrop-blur-md rounded-lg px-2 py-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  className="text-primary/50 mt-1"
                />

                <input
                  placeholder="Enter your email"
                  id="email"
                  className="text-primary text-md font-montserrat font-medium w-full focus:outline-none active:outline-none outline-none"
                />
              </div>
            </div>
            <div className="lg:max-w-4xl w-full items-start justify-center flex flex-col gap-2 mb-4">
              <label htmlFor="name">Your Message</label>
              <div className="items-start justify-start flex flex-row w-full gap-4 bg-background/50 backdrop-blur-md rounded-lg px-2 py-3">
                <FontAwesomeIcon
                  icon={faMessage}
                  size="lg"
                  className="text-primary/50"
                />
                <textarea
                  rows={5}
                  placeholder="Enter your message"
                  id="message"
                  className="text-primary text-md font-montserrat font-medium w-full focus:outline-none active:outline-none outline-none"
                ></textarea>
              </div>
            </div>
            <div className="w-full lg: max-w-4xl items-center justify-end flex flex-row gap-2">
              <button
                onClick={() => {
                  const toastMessage = document.getElementById("form-status");
                  if (!toastMessage) return;
                  toastMessage.innerHTML = " Message Sent!";
                  toastMessage.innerText = " Message Sent!";
                  window.setTimeout(() => {
                    toastMessage.innerHTML = "";
                    toastMessage.innerText = "";
                  }, 3000);
                }}
                className="flex flex-row items-center justify-center gap-1 bg-primary text-background font-montserrat font-semibold fill-background rounded-md px-2 py-1 border-2 border-primary"
              >
                Send Message
              </button>
              <p
                id="form-status"
                className="font-regular font-montserrat text-primary/50 lg:text-lg text-md
              "
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

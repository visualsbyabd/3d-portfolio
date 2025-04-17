"use client";
import React from "react";
import { TitleHeader, GlowCard } from "@/components/globals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const expCards = [
    {
      review:
        "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "/exp1.png",
      logoPath: "/logo1.png",
      title: "Frontend Developer",
      date: "January 2023 - Present",
      responsibilities: [
        "Developed and maintained user-facing features for the Hostinger website.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      review:
        "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
      imgPath: "/exp2.png",
      logoPath: "/logo2.png",
      title: "Full Stack Developer",
      date: "June 2020 - December 2023",
      responsibilities: [
        "Led the development of Docker's web applications, focusing on scalability.",
        "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
        "Contributed to open-source projects that were used with the Docker ecosystem.",
      ],
    },
    {
      review:
        "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
      imgPath: "/exp3.png",
      logoPath: "/logo3.png",
      title: "React Native Developer",
      date: "March 2019 - May 2020",
      responsibilities: [
        "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
        "Improved app performance and user experience through code optimization and testing.",
        "Coordinated with the product team to implement features based on feedback.",
      ],
    },
  ];

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
    gsap.utils.toArray<HTMLElement>(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);
  return (
    <section className="w-full lg:px-0 py-4 px-2 flex flex-col items-center justify-start lg:max-w-7xl">
      <TitleHeader
        title="Professional Work Experience"
        sub="💼 My Career Overview"
      />
      <div className="mt-32 relative">
        <div className="relative z-40 xl:space-y-32 space-y-10">
          {expCards.map((card) => (
            <div key={card.title} className="exp-card-wrapper">
              <div className="xl:w-2/6 w-9/10 mx-auto">
                <GlowCard index={expCards.indexOf(card)}>
                  <div className="px-4 py-6 flex flex-col items-start justify-start gap-4">
                    {/* Stars Div */}
                    <div className="gap-1 flex items-center justify-start flex-row">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                          icon={faStar}
                          key={i}
                          className="text-primary"
                        />
                      ))}
                    </div>
                    {/* Review */}
                    <p>{card.review}</p>
                    {/* Image */}
                    <Image
                      src={card.imgPath}
                      alt={card.title}
                      width={1920}
                      height={1080}
                      className="max-w-24 lg:max-w-32 object-contain object-center"
                    />
                  </div>
                </GlowCard>
              </div>
              <div className="xl:w-4/6">
                <div className="flex items-start">
                  <div className="timeline-wrapper">
                    <div className="timeline" />
                    <div className="gradient-line ml-6 mt-5 md:mt-0 lg:mt-5 lg:ml-0 w-1 h-full" />
                  </div>
                  <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                    <div className="timeline-logo mt-5 ml-6 ">
                      <Image
                        src={card.logoPath}
                        alt={card.title}
                        width={512}
                        height={512}
                        className="lg:max-w-32 max-w-16 aspect-square"
                      />
                    </div>
                    <div className="">
                      <h1 className="font-semibold text-3xl text-primary">
                        {card.title}
                      </h1>
                      <p className="my-5 text-secondary">📅 {card.date}</p>
                      <p className="text-[#839cb5] italic">Responsibilites:</p>
                      <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-primary/50">
                        {card.responsibilities.map((responsibility) => (
                          <li className="text-lg" key={responsibility}>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

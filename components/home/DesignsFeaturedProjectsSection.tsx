"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { BrandingProject } from "@/utils/interfaces";
import { generateBrandingProjects } from "@/utils/placeholders";
import { GlowCard, TitleHeader } from "@/components/globals";
import { formatStringLength } from "@/utils/formatters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DesignsFeaturedProjectsSection = () => {
  const sectionRef = useRef(null);
  const brandingProjectsRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const brandingProjects: BrandingProject[] = generateBrandingProjects(8);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  });

  useEffect(() => {
    brandingProjects.forEach((project, index) => {
      gsap.fromTo(
        brandingProjectsRefs[index].current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.2 * index + 1,
          scrollTrigger: {
            trigger: brandingProjectsRefs[index].current,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, [brandingProjects]);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl flex flex-col items-center justify-start lg:p-0 px-2 py-4 gap-4"
    >
      <TitleHeader
        title={"Featured Branding Projects"}
        sub={"Visual Madness"}
      />
      <div className="w-full items-center grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-x-2 lg:gap-y-4 md:gap-x-1 md:gap-y-2 gap-2">
        {brandingProjects.map((project, index) => (
          <GlowCard index={index} key={index} className="p-2">
            <div
              ref={brandingProjectsRefs[index]}
              key={index}
              className="lg:aspect-square aspect-[3/2] relative"
            >
              {/* Content */}
              <div className="absolute w-full h-full items-start justify-start flex flex-col">
                <Image
                  className="w-full md:h-3/5 h-4/6 object-cover object-center rounded-xl"
                  width={1080}
                  height={1920}
                  src={project.thumbnail}
                  alt={project.description}
                ></Image>
                <h4 className="mt-2 font-lufga text-primary font-semibold">
                  {project.title}
                </h4>
                <p className="font-montserrat text-primary/50 font-medium text-xs text-justify">
                  {formatStringLength(project.description, 100)}
                </p>
                <div className="h-full w-full items-end justify-end flex">
                  <Link href={project.href}>
                    <div className="rounded-full aspect-square bg-primary w-10 h-10 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-background font-extrabold"
                        size="xl"
                      />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Type Tile */}
              <div className="absolute top-2 right-2 bg-background-varient rounded-2xl px-2 py-1">
                <p className="font-montserrat font-semibold text-primary lg:text-xs text-md">
                  {project.type === "IDENTITY"
                    ? "Identity"
                    : project.type === "SOCIAL_MEDIA_DESIGNS"
                      ? "Social Media Designs"
                      : "Logo"}
                </p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
};
export default DesignsFeaturedProjectsSection;

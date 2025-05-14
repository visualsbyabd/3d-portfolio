"use client";
import React, { useRef, useEffect } from "react";
import { GlowCard, TitleHeader } from "@/components/globals";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faEye, faPlay } from "@fortawesome/free-solid-svg-icons";
import { formatNumber } from "@/utils/formatters";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { videos } from "@/utils/placeholders";

const VideosFeaturedProjectsSection = () => {
  const sectionRef = useRef(null);
  const videosRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  });

  useEffect(() => {
    // Create a new array of refs whenever items change
    videos.forEach((video, i) => {
      videos[i].ref = React.createRef();
      return;
    });

    videos.forEach((video, index) => {
      gsap.fromTo(
        videosRefs[index].current,
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
            trigger: videosRefs[index].current,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, [videos]);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl min-h-[50vh] flex flex-col items-center gap-4 justify-center px-4 py-8"
    >
      <div className="w-full items-center justify-start gap-2 flex flex-col">
        <TitleHeader title="Featured Videos" sub="🚀 Get Visually Obsessed" />
      </div>
      <div className="w-full h-full grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 items-center gap-4">
        {videos.map((video, i) => (
          <GlowCard index={i} key={i} className="p-1">
            <div
              key={i}
              className="aspect-reel relative rounded-xl overflow-clip w-full"
              ref={videosRefs[i]}
            >
              <Image
                src={video.thumbnail}
                width={1080}
                height={1920}
                alt={`${video.title} ${video.description}`}
                className="w-full h-full object-cover object-center"
              ></Image>
              <div className="w-full h-4/5 bg-gradient-to-br from-background-varient via-background-varient/0 absolute top-0 left-0 items-start justify-start">
                <div className="w-full items-center justify-start flex flex-row gap-1 p-2">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="text-primary ml-2"
                    size="sm"
                  ></FontAwesomeIcon>
                  <p className="text-primary font-monstserrat font-semibold text-xs">
                    {formatNumber(video.totalViews)}
                  </p>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="text-primary ml-2"
                    size="sm"
                  ></FontAwesomeIcon>
                  <p className="text-primary font-monstserrat font-semibold text-xs">
                    {formatNumber(video.totalLikes)}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-background-varient to-background-varient/0 items-start justify-end flex flex-col px-1 py-2">
                <h4 className="font-lufga text-primary font-semibold">
                  {video.title}
                </h4>
                <p className="font-montserrat text-primary/50 font-medium text-xs text-justify">
                  {video.description.length > 100
                    ? `${video.description.substring(0, 100)}...`
                    : video.description}
                </p>
              </div>
              <div className="w-1/3 aspect-square rounded-full absolute left-1/2 top-1/2 -translate-1/2 bg-background-varient/50 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faPlay}
                  size="2xl"
                  className="text-primary"
                ></FontAwesomeIcon>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
};
export default VideosFeaturedProjectsSection;

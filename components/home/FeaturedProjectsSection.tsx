"use client";
import React, { useRef } from "react";
import Image from "next/image";
import GlowCard from "@/components/globals/GlowCard";
import Link from "next/link";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TitleHeader } from "@/components/globals";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjectsSection() {
  // Defining Projects Data
  const featuredProjects = [
    {
      title: "E-Commerce Web App",
      description:
        "A scalable online store built for fashion retailers, featuring dynamic product listings, user authentication, and Stripe payment integration.",
      link: "/projects/project-1",
      image: "/projects/project-1.jpg",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio for a UX/UI designer, showcasing projects, resume, and a contact form with email integration.",
      link: "#",
      image: "/projects/project-2.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Netlify", "Framer Motion"],
    },
    {
      title: "Task Management Tool",
      description:
        "A Trello-style web app designed to manage team workflows with drag-and-drop support, board sharing, and real-time updates.",
      link: "#",
      image: "/projects/project-3.jpg",
      tags: ["React", "Firebase", "Redux", "Tailwind CSS", "DND Kit"],
    },
    {
      title: "SaaS Analytics Dashboard",
      description:
        "An interactive dashboard for SaaS startups, displaying real-time KPIs with user retention charts and subscription metrics.",
      link: "#",
      image: "/projects/project-4.jpg",
      tags: ["Next.js", "TypeScript", "Chart.js", "Supabase", "Tailwind CSS"],
    },
    {
      title: "Food Delivery Platform",
      description:
        "A full-stack food delivery system that connects local restaurants with customers and includes live order tracking.",
      link: "#",
      image: "/projects/project-5.jpg",
      tags: ["React Native", "Node.js", "Express", "MongoDB", "Socket.io"],
    },
    {
      title: "Healthcare Appointment System",
      description:
        "A booking platform for clinics with calendar sync, patient management, and automated reminders via SMS and email.",
      link: "#",
      image: "/projects/project-6.jpg",
      tags: ["Vue.js", "Laravel", "MySQL", "Twilio", "Bootstrap"],
    },
    {
      title: "Crypto Price Tracker",
      description:
        "A real-time cryptocurrency tracker with live price updates, portfolio tracking, and support for multiple exchanges.",
      link: "#",
      image: "/projects/project-7.jpg",
      tags: ["React", "Tailwind CSS", "CoinGecko API", "Redux Toolkit"],
    },
    {
      title: "Real Estate Listing App",
      description:
        "A mobile-responsive platform for agents and buyers to browse, filter, and inquire about property listings.",
      link: "#",
      image: "/projects/project-8.jpg",
      tags: ["Next.js", "Sanity.io", "Mapbox", "Tailwind CSS"],
    },
    {
      title: "Event Booking System",
      description:
        "A ticketing and seat reservation system for concerts and conferences with QR-based check-in support.",
      link: "#",
      image: "/projects/project-9.jpg",
      tags: ["Angular", "Firebase", "Material UI", "QR Code API"],
    },
  ];

  // Main Section Ref
  const sectionRef = useRef(null);

  // Projects Cards Refs
  const mainCardRef = useRef(null);
  const supportCardOneRef = useRef(null);
  const supportCardTwoRef = useRef(null);
  const bottomCardOneRef = useRef(null);
  const bottomCardTwoRef = useRef(null);
  const bottomCardThreeRef = useRef(null);
  const bottomCardFourRef = useRef(null);

  // Projects Cards Refs Array
  const cardsRef = [
    mainCardRef,
    supportCardOneRef,
    supportCardTwoRef,
    bottomCardOneRef,
    bottomCardTwoRef,
    bottomCardThreeRef,
    bottomCardFourRef,
  ];
  // Reveal Animation with GSAP
  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    // Animations for each app showcase
    const cards = [
      mainCardRef.current,
      supportCardOneRef.current,
      supportCardTwoRef.current,
      bottomCardOneRef.current,
      bottomCardTwoRef.current,
      bottomCardThreeRef.current,
      bottomCardFourRef.current,
    ];

    console.log(cards.map((card, i) => `${i}: ${card}`));

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.3 * index + 1,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl min-h-screen flex flex-col items-center justify-center px-4 py-8"
    >
      {/* Layout Container */}
      <div className="w-full h-full items-center justify-start gap-2 flex flex-col">
        <TitleHeader title="Featured Projects" sub="🚀 Don't Miss Out!" />
        {/* Top Side Container */}
        <div className="w-full h-full flex flex-col md:flex-row items-start justify-center gap-2 mt-2">
          {/* Main Featured Card*/}
          <div className="flex-1/4 md:flex-2/3 flex items-center justify-center flex-col w-full h-full max-h-[110vh]">
            <GlowCard
              index={0}
              className="w-full h-full items-center justify-center flex p-2"
            >
              <div
                ref={cardsRef[0]}
                className="w-full h-full items-center justify-center flex flex-col bg-background gap-4 px-2 py-4"
              >
                <Image
                  className="w-full h-3/4 rounded-2xl object-cover object-center"
                  width={1920}
                  height={1080}
                  alt={featuredProjects[0].title}
                  src={featuredProjects[0].image}
                ></Image>
                <div className="flex w-full h-1/4 items-start justify-start flex-col">
                  <h3 className="font-montserrat font-semibold text-primary text-lg md:text-xl lg:text-2xl">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="font-montserrat font-regular text-primary/50 text-xs md:text-md lg:text-xl">
                    {featuredProjects[0].description}
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>
          {/* Support Cards */}
          <div className="flex-1/2 md:flex-1/3 flex items-center justify-center flex-col h-full w-full gap-2">
            {featuredProjects.slice(1, 3).map((project, i) => (
              <GlowCard
                key={i + 1}
                index={i + 1}
                className="w-full h-full gap-4 px-2 py-4 flex flex-col items-center justify-center"
              >
                <div
                  ref={cardsRef[i + 1]}
                  className="w-full h-full flex items-start justify-center flex-col gap-2"
                >
                  <Image
                    className="h-full items-center justify-center rounded-2xl object-cover object-center"
                    src={project.image}
                    alt={project.description}
                    width={1920}
                    height={1920}
                  ></Image>
                  <h3 className="font-montserrat font-semibold text-primary text-md md:text-lg lg:text-xl">
                    {project.title}
                  </h3>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
        <div className="h-[16vh] w-full hidden md:flex items-center justify-center flex-row gap-2">
          {featuredProjects.slice(3, 7).map((project, i) => (
            <GlowCard
              key={i + 3}
              index={i + 3}
              className="w-full h-full flex-1/4"
            >
              <div
                ref={cardsRef[i + 3]}
                className="w-full h-full items-center justify-start flex flex-row gap-2 px-2 py-4"
              >
                <Image
                  className="h-full max-w-1/3 rounded-2xl object-cover object-center"
                  src={project.image}
                  alt={project.description}
                  width={1920}
                  height={1920}
                ></Image>
                <h3 className="font-montserrat font-semibold text-lg text-primary">
                  {project.title}
                </h3>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

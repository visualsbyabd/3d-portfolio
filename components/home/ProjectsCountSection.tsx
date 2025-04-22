import React from "react";
import { GlowCard } from "@/components/globals";

interface snippetData {
  title: string;
  count: number;
  plus: boolean;
  percentage?: boolean;
}

const projectsCountsData: Array<snippetData> = [
  { title: "Years of Experience", count: 5, plus: true },
  { title: "Satisfied Clients", count: 15, plus: false },
  { title: "Completed Projects", count: 30, plus: true },
  { title: "Client Retention Rate", count: 90, plus: true, percentage: true },
];
export default function ProjectsCountSection() {
  return (
    <section className="w-full h-[40vw] md:h-[15vw] xl:h-[10vw] lg:max-w-7xl grid md:grid-cols-4 grid-cols-2 xl:px-0 py-4 px-2 mt-10 gap-2">
      {projectsCountsData.map((item: snippetData, i: number) => (
        <GlowCard
          key={i}
          index={i}
          className="w-full h-full px-2 py-4 bg-background-varient"
        >
          <div className="w-full h-full items-start justify-end flex flex-col bg-background-varient">
            <span className="absolute mx-auto flex border w-fit bg-primary blur-xl bg-clip-text text-3xl md:text-5xl box-content font-extrabold text-transparent text-center select-none">
              {item.plus ? "+" : ""}
              {item.count}
              {(item.percentage ?? false) ? "%" : ""}{" "}
            </span>
            <h3 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-primary font-lufga leading-5">
              {item.plus ? "+" : ""}
              {item.count}
              {(item.percentage ?? false) ? "%" : ""}
              <br />
              <span className="text-shadow-transparent text-xs md:text-md lg:text-base text-primary/50 font-montserrat font-medium">
                {item.title}
              </span>
            </h3>
          </div>
        </GlowCard>
      ))}
    </section>
  );
}

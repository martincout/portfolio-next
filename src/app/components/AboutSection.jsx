"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import Bubble from './Bubble'
import { useTranslations } from "next-intl";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>.NET C#</li>
        <li>SQL Server</li>
        <li>Node JS</li>
        <li>Javascript</li>
        <li>Angular</li>
        <li>React</li>
        <li>Power BI</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code (Platzi)</li>
        <li>Udemy Angular Course (Udemy)</li>
        <li>Northeast National University UNNE, Corrientes</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="https://cert.efset.org/tuBKhT" target="_blank">EF SET English Certificate C2</a></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("AboutMe");
  const Technologies = [
    {
      title: "Azure",
      image: "/images/logos/Azure.png",
    },
    
    {
      title: "Azure SQL Database",
      image: "/images/logos/Azure SQL Database.png",
    },
    {
    title: "React",
    image: "/images/logos/React.png",
    },
    {
      title: "Angular",
      image: "/images/logos/angular.png",
    },
    {
      title: ".NET Core",
      image: "/images/logos/NETCore.png",
    },
    {
      title: "Figma",
      image: "/images/logos/Figma.png",
    },
    {
      title: "Node JS",
      image: "/images/logos/Node.js.png",
    },
    {
      title: "SQL Server",
      image: "/images/logos/sqlserver.png",
    },
    {
      title: "Git",
      image: "/images/logos/GitHub.png",
    },
    {
      title: "Bitbucket",
      image: "/images/logos/BitBucket.png",
    },
    {
      title: "Power BI",
      image: "/images/logos/PowerBi.png",
    },
]


  return (
    <section id="about" className="">
      <div className="flex rounded-lg shadow-blue-500/50 shadow-lg flex flex-col  md:grid md:grid-cols-2 gap-8 items-start justify-center
 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="font-bold mb-4 text-2xl md:text-4x12 text-center md:text-start">{t("title")}</h2>
          <p className="text-base lg:text-lg text-justify">
            {t("description")} <br /> <br />
            {t("description2")}
          </p>

        </div>
        <motion.div>
          <h2 className=" text-2xl md:text-4x12  font-bold mb-6  text-primary text-center md:text-start">{t("workedWith")}</h2>
          <div className="flex flex-none flex-wrap gap-2">
            {Technologies.map((tech, index) => (
              <motion.img className="drag-none" width={50} height={50} 
              alt={tech.title} key={index} title={tech.title} src={tech.image} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
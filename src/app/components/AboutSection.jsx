"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import Bubble from './Bubble'

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
      image: "/images/logos/node.js.png",
    },
    {
      title: "SQL Server",
      image: "/images/logos/sqlserver.png",
    },
    {
      title: "Git",
      image: "/images/logos/Github.png",
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
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. <br /><br />
            I have experience working with JavaScript, .NET Core, Angular, Node.js, Express,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>

        </div>
        <motion.div>
          <h2 className="text-4xl font-bold mb-4 text-primary">Worked With</h2>
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
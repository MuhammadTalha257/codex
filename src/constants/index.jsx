import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";
import { TbBrandLaravel, TbBrandPhp } from "react-icons/tb";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiMysql, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  // { label: "Work Experience", href: "#work" },
  // { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "M.Talha",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate Software developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "CosmoChat",
    description:
"CosmoChat is an innovative AI-powered platform where I leverage my expertise to enhance backend functionality and user interface. I integrate cutting-edge features like AI image generation, expand customizable templates, and develop robust APIs for seamless mobile app experiences.",    image: projectImage1,
    githubLink: "https://github.com/healmb1/cosmochat",
  },
  {
    id: 2,
    name: "PaperWork",
    description:
"Paperwork is a hospital web application that simplifies patient information collection through multiple forms. Patients can easily sign using a Topaz signature pad and receive PDFs and emails of their submissions for convenient printing. Users can also edit, delete, and print files as needed. I developed both the frontend and backend, seamlessly integrating the Topaz signature pad into the application.",
    image: projectImage2,
    githubLink: "https://github.com/healmb1/paperwork",
  },
  {
    id: 3,
    name: "AEO Pakistan",
    description:
    "Creating an attractive career portal with secure authentication is crucial for a consultancy website. Ensure it has a user-friendly interface, clear job listings, advanced search filters, and mobile responsiveness for a seamless experience.",
    image: projectImage3,
    githubLink: "https://github.com/",
  },
  {
    id: 4,
    name: "Armastek",
    description:
    "Manage and enhance a CodeIgniter 4-based inventory software solution, ensuring secure and efficient operations for business needs. Key modules include item management, real-time calculations, and comprehensive profit and loss tracking, providing insightful analytics and streamlined inventory control.",
    image: projectImage4,
    githubLink: "https://github.com/healmb1/HMB",
  },
  {
    id: 5,
    name: "MAKAN DUBAI:",
    description:
    "Makan Dubai is an innovative real estate platform where I excel as a full stack developer, crafting both a dynamic frontend and a user-friendly admin interface. This empowering solution allows admins to effortlessly manage content—updating headings, uploading new projects, and accessing client emails—all in real time, ensuring a seamless experience for both users and administrators.",
    image: projectImage5,
    githubLink: "https://github.com/MuhammadTalha257/makandubai",
  },

];

export const BIO = [
  "Muhammad Talha studied Computer Science at Agriculture University Faisalabad, graduating in 2018. Following his education, he has dedicated over two years plus to developing expertise in PHP and Laravel, where he has gained hands-on experience building scalable web applications, enhancing projects, and transforming ideas into dynamic, user-friendly digital solutions.",
  "Inspired by a vision of creating impactful digital experiences, Muhammad Talha co-founded his own software house [CODE X] in 2024. His goal is to deliver high-quality web solutions that are not only innovative but also tailored to clients' unique needs.",
  "As a versatile developer skilled in PHP, Laravel, and React.js, Muhammad Talha brings a solid technical foundation to every project. His expertise spans backend and frontend development, with a deep knowledge of core PHP, Laravel, and modern JavaScript frameworks. His dedication to growth and quality ensures that each project stands out, delivering value and an exceptional user experience."
];


export const SKILLS = [
  {
    icon: <TbBrandPhp className="text-4xl text-white lg:text-5xl" />,
    name: "PHP",
    experience: "1+ year",
  },
  {
    icon: <TbBrandLaravel className="text-4xl text-white lg:text-5xl" />,
    name: "Laravel",
    experience: "2+ year",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React Js",
    experience: "1+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiMysql className="text-4xl text-red-600 lg:text-5xl" />,
    name: "MySql",
    experience: "2+ year",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "September 2012 - June 2014",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of California, Berkeley",
    duration: "September 2008 - June 2012",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

import { IAboutData } from "@/modules/About";
import { navbar } from "./navbar";

export const about: IAboutData = {
  title: navbar.menuItems.about,
  description: "I’m a Frontend Web Developer passionate about building meaningful products and beautiful web applications.",
  shortcutDescription: "I won’t bore you with my full background and work experience, but if you're interested, you can download my CV below, where everything is well-structured.",
  downloadCVButton: "Download CV",
  linkedInButton: "... Or Check Out My LinkedIn",
  techStackDescription: "Here are a few technologies I've been working with recently:",
  techStack: [
    "Javascript (ES6+)",
    "Typescript",
    "React",
    "Next.js",
    "CSS, Tailwind CSS, others",
    "Git, GitHub, others",
    "REST API",
    "Contentful",
  ]
}
import { IAboutData } from "@/modules/About";
import { navbar } from "./navbar";

export const about: IAboutData = {
  title: navbar.menuItems.about,
  description: "Soy una Desarrolladora Web Frontend, apasionada por desarrollar productos que marcan la diferencia y crear aplicaciones web visualmente atractivas y funcionales.",
  shortcutDescription: "No te aburriré con todos los detalles de mi experiencia laboral, pero si te interesa, puedes descargar mi CV abajo, donde todo está bien explicado.",
  downloadCVButton: "Descargar CV",
  linkedInButton: "... O Échale un Vistazo a Mi LinkedIn",
  techStackDescription: "Aquí algunas de las tecnologías con las que he trabajado últimamente:",
  techStack: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "CSS, Tailwind CSS, etc.",
    "Git, GitHub, y más",
    "REST API",
    "Y mucho más..."
  ]
}
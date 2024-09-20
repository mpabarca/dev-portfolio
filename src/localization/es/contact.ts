import { IContactData } from "@/modules/Contact";
import { navbar } from "./navbar";
import { name } from "./home";

export const contact: IContactData = {
  title: navbar.menuItems.contact,
  description: "Si tienes alguna pregunta, quieres saludar o contactarme por una oportunidad laboral, haré lo posible por responderte lo antes posible.",
  sendEmailButton: "Envíame un Correo",
  linkedInButton: "... O Contáctame por LinkedIn",
  footer: {
    author: name,
    developmentAuthor: "Desarrollado por",
  }
};

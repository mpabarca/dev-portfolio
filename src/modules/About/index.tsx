import { ISiteContext } from "@/interfaces";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export interface IAboutData {
  title: string;
  description: string;
  shortcutDescription: string;
  downloadCVButton: string;
  linkedInButton: string;
  techStackDescription: string;
  techStack: string[]
}

interface AboutModuleProps {
  id: string;
  context: ISiteContext;
  content: IAboutData;
}

const AboutModule = ({ id, context, content }: AboutModuleProps) => {
  return (
    <section
      id={id}
      className='w-full h-screen container flex flex-col items-start justify-center gap-7'
    >
      <header className="flex flex-col gap-8">
        <h2 className="text-4xl lg:text-5xl font-semibold">{content.title}</h2>
        <p className="text-xl font-normal">{content.description}</p>
      </header>
      <blockquote className="text-xl font-normal border-l-2 border-gray-100 pl-4 text-gray-700">{content.shortcutDescription}</blockquote>
      <nav>
        <ul className="flex flex-col lg:flex-row gap-4">
          <li>
            <Link
              className={buttonVariants({ variant: "default" })}
              href='#contact'
            >
              {content.downloadCVButton}
            </Link>
          </li>
          <li>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href='#about'
            >
              {content.linkedInButton}
            </Link>
          </li>
        </ul>
      </nav>
      <section className="flex flex-col gap-6">
        <p className="text-xl font-normal">{content.techStackDescription}</p>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-1 list-disc list-inside">
          {content.techStack.map((tech: string) => (
            <li key={`tech-stack-${tech}`} className="text-xl font-normal">
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default AboutModule;

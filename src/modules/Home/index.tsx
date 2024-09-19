import { ISiteContext } from "@/interfaces";
import styles from "./Home.module.css";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export interface IHomeData {
  overline: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
  contactButton: string;
  aboutButton: string;
}

interface HomeModuleProps {
  id: string;
  context: ISiteContext;
  content: IHomeData;
}

const HomeModule = ({ id, context, content }: HomeModuleProps) => {
  return (
    <section
      id={id}
      className='w-full h-screen container flex flex-col items-start justify-center gap-10'
    >
      <header className="flex flex-col gap-6">
        <p className="text-gray-400 dark:text-gray-300 text-2xl lg:text-2xl font-medium">{content.overline}</p>
        <h1 className="text-4xl lg:text-7xl font-semibold">{content.title}</h1>
        <span className="inline-flex flex-col items-baseline">
          <p className="text-2xl lg:text-4xl lg:font-medium">{content.subtitle1}</p>
          <p className="text-2xl lg:text-4xl lg:font-medium">{content.subtitle2}</p>
        </span>
      </header>

      <nav>
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-4">
          <li>
            <Link
              className={buttonVariants({ variant: "default" })}
              href='#contact'
            >
              {content.contactButton}
            </Link>
          </li>
          <li>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href='#about'
            >
              {content.aboutButton}
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default HomeModule;

import { ISiteContext } from "@/interfaces";
import styles from './Home.module.css';

export interface IHomeData {
  overline: string;
  title: string;
  subtitle: string;
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
    <section id={id} className="w-full h-screen p-8 flex flex-col items-start justify-center">
      <p>{content.overline}</p>
      <p>{content.title}</p>
      <p>{content.subtitle}</p>
    </section>
  );
};

export default HomeModule;
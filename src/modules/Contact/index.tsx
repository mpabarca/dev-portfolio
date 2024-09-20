import { ISiteContext } from "@/interfaces";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export interface IContactData {
  title: string;
  description: string;
  sendEmailButton: string;
  linkedInButton: string;
}

interface ContactModuleProps {
  id: string;
  context: ISiteContext;
  content: IContactData;
}

const ContactModule = ({ id, context, content }: ContactModuleProps) => {
  return (
    <section
      id={id}
      className='w-full h-screen container flex flex-col items-start justify-center gap-7'
    >
      <header className='flex flex-col gap-8'>
        <h2 className='text-4xl lg:text-5xl font-semibold'>{content.title}</h2>
        <p className='text-lg lg:text-xl font-normal'>{content.description}</p>
      </header>
      <nav>
        <ul className='flex flex-col lg:flex-row gap-4'>
          <li>
            <Link
              className={buttonVariants({ variant: "default" })}
              href='#contact'
            >
              {content.sendEmailButton}
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
      
    </section>
  );
};

export default ContactModule;

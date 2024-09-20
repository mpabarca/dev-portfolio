import { ISiteContext } from "@/interfaces";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export interface IBlogData {
  title: string;
  mediumButton: string;
  subtitle: string;
}

interface BlogModuleProps {
  id: string;
  context: ISiteContext;
  content: IBlogData;
}

const BlogModule = ({ id, context, content }: BlogModuleProps) => {
  return (
    <section
      id={id}
      className='w-full h-screen container flex flex-col items-start justify-center gap-7'
    >
    <header className='flex flex-col gap-8'>
      <h2 className='text-4xl lg:text-5xl font-semibold'>{content.title}</h2>
      <nav>
        <ul className='flex flex-col lg:flex-row gap-4'>
          <li>
          <Link
            className={buttonVariants({ variant: "default" })}
            href='#contact'
          >
            {content.mediumButton}
          </Link>
          </li>
          {/* Link to Spotify Podcast Profile */}
        </ul>
      </nav>
      <p className='text-lg lg:text-xl font-normal'>{content.subtitle}</p>
    </header>

    </section>
  );
};

export default BlogModule;

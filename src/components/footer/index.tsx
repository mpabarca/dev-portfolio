import SocialMediaLinks from "../social-media-links";

export interface IFooterData {
  author: string;
  developmentAuthor: string;
}

interface FooterProps {
  content: IFooterData;
}

const Footer = ({ content }: FooterProps) => {
  return (
    <footer className='w-full py-4 self-stretch bottom-0 mx-auto flex items-center gap-10 flex-wrap justify-center lg:justify-between'>
      <SocialMediaLinks />

      <address className='not-italic flex-inline items-baseline lg:flex text-center flex-row gap-2 text-lg'>
        {content.developmentAuthor}{" "}
        <a
          href='https://www.mpabarca.dev'
          target='_blank'
          rel='noopener'
          className='underline'
        >
          {content.author}
        </a>
        <p>© 2024</p>
      </address>
    </footer>
  );
};

export default Footer;

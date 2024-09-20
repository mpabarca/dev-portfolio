import { SiGithub, SiInstagram, SiLinkedin, SiMedium, SiSpotify } from '@icons-pack/react-simple-icons'
import Link from 'next/link'

// Add all Social Media Icons (and links) that you need. Check more here --> https://simpleicons.org/
const SocialMediaLinks = () => {
  return (
    <ul className='flex flex-row gap-4 mt-1'>
      <li>
        <Link href="/">
          <SiGithub size={20} />
        </Link>
      </li>
      <li>
        <Link href="/">
          <SiInstagram size={20} />
        </Link>
      </li>
      <li>
        <Link href="/">
          <SiLinkedin size={20} />
        </Link>
      </li>
      <li>
        <Link href="/">
          <SiMedium size={20} />
        </Link>
      </li>
      <li>
        <Link href="/">
          <SiSpotify size={20} />
        </Link>
      </li>
    </ul>
  )
}

export default SocialMediaLinks
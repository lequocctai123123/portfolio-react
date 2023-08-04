import Link from "next/link";

import {
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine, 
  RiBehanceLine,
  RiDribbbleLine,
  RiPinterestLine,
  RiInstallLine,
  RiGitBranchLine,
  RiGithubLine,
  RiLinkedinBoxLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://github.com/lequocctai123123'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={'https://www.instagram.com/lequoctai2410/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/quoc.tai.2410/'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/quoctai'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxLine />
      </Link>
    </div>
  );
};

export default Socials;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGripfire } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons/faSquareXTwitter';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faDribbble } from '@fortawesome/free-brands-svg-icons/faDribbble';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white text-black h-screen w-1/5 flex flex-col items-start fixed">
      {/* Profile Image */}
      <Image width={100} height={100}
        src="/images/profile_pic.jpg" 
        alt="Profile"
        className="w-35 h-35 rounded-sm m-4"
      />

      <h3 className='text-2xl uppercase mx-4 mt-4 mb-6'>Portfolio</h3>

      {/* Menu Buttons */}
      <nav className="w-full flex flex-col items-start">
        <Link href="#portfolio" className="w-full flex items-center text-xl py-2 px-4 text-[#009688] mb-2 hover:bg-gray-400 hover:text-black cursor-pointer uppercase">
          <FontAwesomeIcon icon={faGripfire} className='text-xl mr-4' />
          Portfolio</Link>
        <Link href="#about" className="w-full text-xl py-2 px-4  mb-2 hover:bg-gray-400  cursor-pointer uppercase">
        <FontAwesomeIcon icon={faUser} className='text-xl mr-4' />  
          About</Link>
        <Link href="#contact" className="w-full text-xl py-2 px-4  mb-2 hover:bg-gray-400  cursor-pointer uppercase">
          <FontAwesomeIcon icon={faEnvelope} className='text-xl mr-4' />
          Contact</Link>
      </nav>

      {/* Social Media Icons */}
      <div className="mt-6 mx-4 flex space-x-2">
        {/* Add your social media icons here */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareXTwitter} className='text-2xl hover:opacity-50 hover:text-3xl' />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className='text-2xl hover:opacity-50 hover:text-3xl' />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className='text-2xl hover:opacity-50 hover:text-3xl' />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDribbble} className='text-2xl hover:opacity-50 hover:text-3xl' />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPinterest} className='text-2xl hover:opacity-50 hover:text-3xl' />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className='text-2xl hover:opacity-50 hover:text-3xl' />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

"use client"
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
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeActiveItem } from '../store/slices/sidebarSlice';

const Sidebar: React.FC = () => {
  let active = useAppSelector(state => state.activeItem.item);
  const dispatch = useAppDispatch();
  
  return (
    <div className="bg-white text-black h-screen w-1/5 flex flex-col items-start fixed">
      {/* Profile Image */}
      <Image width={120} height={120}
        src="/images/profile_pic.jpg" 
        alt="Profile"
        className="rounded-sm m-4 mt-6"
      />

      <h3 className='text-xl font-semibold uppercase mx-4 mt-4 mb-6'>Portfolio</h3>

      {/* Menu Buttons */}
      <nav className="w-full flex flex-col items-start">
        <Link href="#portfolio" className={`w-full flex items-center text-md py-2 px-4 ${active === "portfolio" ? 'text-[#009688]' : ""} mb-2 hover:bg-gray-400 hover:text-black cursor-pointer uppercase`} onClick={()=> dispatch(changeActiveItem({type: "active", item: "portfolio"}))}>
          <FontAwesomeIcon icon={faGripfire} className='text-md mr-4' />
          Portfolio</Link>
        <Link href="#about" className={`w-full text-md py-2 px-4 ${active === "about" ? 'text-[#009688]' : ""}  mb-2 hover:bg-gray-400  cursor-pointer uppercase`} onClick={()=> dispatch(changeActiveItem({type: "active", item: "about"}))}>
        <FontAwesomeIcon icon={faUser} className='text-md mr-4' />  
          About</Link>
        <Link href="#contact" className={`w-full text-md py-2 px-4 ${active === "contact" ? 'text-[#009688]' : ""}  mb-2 hover:bg-gray-400  cursor-pointer uppercase`} onClick={()=> dispatch(changeActiveItem({type: "active", item: "contact"}))}>
          <FontAwesomeIcon icon={faEnvelope} className='text-md mr-4' />
          Contact</Link>
      </nav>

      {/* Social Media Icons */}
      <div className="mt-6 mx-4 flex space-x-2">
        {/* Add your social media icons here */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareXTwitter} className='text-lg hover:opacity-50 hover:text-xl' />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className='text-lg hover:opacity-50 hover:text-xl' />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className='text-lg hover:opacity-50 hover:text-xl' />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDribbble} className='text-lg hover:opacity-50 hover:text-xl' />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPinterest} className='text-lg hover:opacity-50 hover:text-xl' />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className='text-lg hover:opacity-50 hover:text-xl' />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

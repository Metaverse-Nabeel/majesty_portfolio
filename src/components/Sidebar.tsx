import Image from 'next/image';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/6 flex flex-col items-center p-4 fixed">
      {/* Profile Image */}
      <Image width={100} height={100}
        src="/images/profile_pic.jpg" 
        alt="Profile"
        className="w-30 h-30 rounded-md mb-4"
      />

      {/* Menu Buttons */}
      <nav className="flex flex-col items-start">
        <Link href="#portfolio">
          <li className="text-xl mb-2 hover:text-gray-400 cursor-pointer">Portfolio</li>
        </Link>
        <Link href="#about">
          <li className="text-xl mb-2 hover:text-gray-400 cursor-pointer">About</li>
        </Link>
        <Link href="#contact">
          <li className="text-xl mb-2 hover:text-gray-400 cursor-pointer">Contact</li>
        </Link>
      </nav>

      {/* Social Media Icons */}
      <div className="mt-auto flex space-x-4">
        {/* Add your social media icons here */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image width={10} height={10} src="/images/sm-icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image width={10} height={10} src="/images/sm-icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image width={10} height={10} src="/images/sm-icons/github.svg" alt="GitHub" className="w-6 h-6" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image width={10} height={10} src="/images/sm-icons/dribble.svg" alt="Dribble" className="w-6 h-6" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image width={10} height={10} src="/images/sm-icons/pinterest.svg" alt="pinterest" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

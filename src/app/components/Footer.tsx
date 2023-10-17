import { Tags } from "@/data"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"


const Footer: React.FC = () => {
  return (
    <footer className="w-full text-white bg-[#616161] pt-8">
      <div className="flex flex-col md:flex-row gap-8 px-6">
        <div className="flex flex-col">
          <h4 className="text-3xl py-4">
            Thank you for visiting my portfolio!
          </h4>
          <p>As an independent artist, I am committed to nurturing my craft and pushing creative boundaries. I believe that art has the power to inspire, provoke thought, and spark conversations. I am always open to new opportunities for artistic collaborations, exhibitions, and commissions, as I&apos; am dedicated to sharing my passion with a wider audience. Art helps me express myself as a glow and developer. I enjoy trying new art styles.</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-3xl uppercase py-4">
            popular tags
          </h4>
          <div className="flex flex-wrap">
            {Tags.map((tag,i)=>(
              <p key={i} className="px-2 my-2 mr-2 bg-gray-800 border-2 border-transparent hover:bg-gray-400 hover:text-black hover:border-black cursor-pointer">{tag}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-black flex items-center justify-center mt-8">
        <p className="py-4 cursor-pointer"><Link href={'https://nabeel-digital.vercel.app/'} target="blank"> Made with <FontAwesomeIcon icon={faHeart} className="hover:text-red-600 hover:text-xl"/> by Rizwan Ahmed</Link></p>
      </div>
    </footer>
  )
}

export default Footer
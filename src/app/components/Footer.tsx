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
          <p>I&apos;m passionate about creating meaningful and impactful experiences through design and development. Whether it&apos;s crafting intuitive user interfaces or diving into complex coding challenges, I thrive on turning ideas into reality. Let&apos;s connect and explore how we can collaborate to bring your projects to life. Feel free to reach out—I&apos;m always excited about new opportunities and creative ventures.</p>
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
        <p className="py-4 cursor-pointer"><Link href={'https://nabeel-digital.vercel.app/'} target="blank"> Made with <FontAwesomeIcon icon={faHeart} className="hover:text-red-600 hover:text-xl"/> by Nabeel Ahmed</Link></p>
      </div>
    </footer>
  )
}

export default Footer
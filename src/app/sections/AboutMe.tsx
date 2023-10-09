import Skill from "@/app/components/Skill"
import Image from "next/image"
import { Skills } from "@/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const AboutMe = () => {
  return (
    <section id="about" className="w-full flex flex-col px-4">
        <div className="flex justify-center items-center bg-white rounded-lg mb-6">
            <Image width={500} height={450}
            src="/images/about_pic.jpg" 
            alt="Profile"
            className="rounded-sm m-4"
            />
        </div>
        <h2 className="font-bold text-2xl mb-2">About Me</h2>
        <p className="text-lg font-light text-justify mb-6">Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        <h4 className="py-2 text-xl">Technical Skills</h4>
        <div className="flex flex-col">
        {
            Skills.map((skill)=>
                <Skill label={skill.label} value={skill.value} key={skill.id} />
            )
        }
        </div>
        <div className="flex w-1/3 my-8">
          <Link href="/Resume.pdf" target={"_blank"}className="px-4 py-4 bg-black text-white border-2 border-transparent hover:bg-white hover:border-black hover:text-black rounded-md" download={true}><FontAwesomeIcon icon={faDownload} className="mr-4" /> Download Resume</Link>
        </div>
    </section>
  )
}

export default AboutMe
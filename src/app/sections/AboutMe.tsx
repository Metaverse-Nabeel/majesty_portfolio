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
            <Image width={500} height={500} quality={100}
            src="/images/about_pic.jpg" 
            alt="Profile"
            className="rounded-sm m-4"
            />
        </div>
        <h2 className="font-bold text-2xl mb-2">About Me</h2>
        <p className="text-lg font-light text-justify mb-6">Independent Visual Artist!<br></br>[Veronica Majesty Nakalanzi]<br></br> I am Veronica Majesty, a passionate and self-driven independent visual artist based in the United States. My artistic journey has been a pursuit of creative expression, and I thrive on translating thoughts, emotions, and experiences into captivating visual narratives. With a deep appreciation for diverse mediums, I am constantly exploring new techniques to push the boundaries of my artistry.
</p>
        <h4 className="py-2 text-xl">Technical Skills</h4>
        <div className="flex flex-col">
        {
            Skills.map((skill)=>
                <Skill label={skill.label} value={skill.value} key={skill.id} />
            )
        }
        </div>
        <div className="flex w-full lg:w-1/3 my-8">
          <Link href="/Resume.pdf" target={"_blank"}className="px-4 py-4 bg-black text-white border-2 border-transparent hover:bg-white hover:border-black hover:text-black rounded-md" download={true}><FontAwesomeIcon icon={faDownload} className="mr-4" /> Download Resume</Link>
        </div>
    </section>
  )
}

export default AboutMe
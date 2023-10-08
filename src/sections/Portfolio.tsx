import ProjectCard from "@/components/ProjectCard"

const Portfolio: React.FC = () => {
  return (
    <section className="flex min-h-screen flex-col justify-between" id="portfolio">
      <h2 className='text-4xl mb-4'>Majesty Portfolio</h2>
      <div className="flex">
        Filters: Design, Art and Photos
      </div>
      <div className="w-full">
      <ProjectCard />      
      </div>
    </section>
  )
}

export default Portfolio
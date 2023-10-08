import ProjectCard from "@/components/ProjectCard"

const Portfolio: React.FC = () => {
  return (
    <main className="flex min-h-screen w-full flex-col justify-between p-24">
      <h2 className='text-4xl mb-1'>Majesty Portfolio</h2>
      <div className="flex ">
        Filters: Design, Art and Photos
      </div>
      <div className="w-full">
      <ProjectCard />      
      </div>
    </main>
  )
}

export default Portfolio
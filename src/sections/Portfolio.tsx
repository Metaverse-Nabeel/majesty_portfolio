import PortfolioHeader from "@/components/PortfolioHeader"
import ProjectCard from "@/components/ProjectCard"

const Portfolio: React.FC = () => {
  return (
    <section className="flex min-h-screen flex-col" id="portfolio">
      <PortfolioHeader />
      <div className="w-full">
      <ProjectCard />      
      </div>
    </section>
  )
}

export default Portfolio
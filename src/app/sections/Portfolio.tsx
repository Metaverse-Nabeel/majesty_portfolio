import PaginatedItems from "@/app/components/Pagination";
import PortfolioHeader from "@/app/components/PortfolioHeader";

const Portfolio: React.FC = () => {
  return (
    <section className="flex flex-col" id="portfolio">
      <PortfolioHeader />
      
          <PaginatedItems itemsPerPage={6} />
        
    </section>
  );
};

export default Portfolio;

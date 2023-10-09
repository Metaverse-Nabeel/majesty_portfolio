import PaginatedItems from "@/components/Pagination";
import PortfolioHeader from "@/components/PortfolioHeader";

const Portfolio: React.FC = () => {
  return (
    <section className="flex min-h-screen flex-col" id="portfolio">
      <PortfolioHeader />
      
          <PaginatedItems itemsPerPage={6} />
        
    </section>
  );
};

export default Portfolio;

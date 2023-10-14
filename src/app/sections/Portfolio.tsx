import PaginatedItems from "@/app/components/Pagination";
import PortfolioHeader from "@/app/components/PortfolioHeader";

const Portfolio: React.FC = () => {
  return (
    <section className="flex flex-col pt-24 md:pt-16 lg:pt-6" id="portfolio">
      <PortfolioHeader />
      <PaginatedItems itemsPerPage={6} />
    </section>
  );
};

export default Portfolio;

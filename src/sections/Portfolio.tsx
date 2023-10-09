import PaginatedItems from "@/components/Pagination";
import PortfolioHeader from "@/components/PortfolioHeader";

const Portfolio: React.FC = () => {
  return (
    <section className="flex min-h-screen flex-col" id="portfolio">
      <PortfolioHeader />
      <section className="flex min-h-screen w-full flex-col items-center justify-between px-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PaginatedItems itemsPerPage={6} />
        </div>
      </section>
    </section>
  );
};

export default Portfolio;

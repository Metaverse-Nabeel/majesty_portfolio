import Footer from "@/components/Footer";
import Portfolio from "@/sections/Portfolio";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
    <>
      <main className="w-full h-screen bg-slate-300/40 grid grid-cols-10 gap-2">
        <section className="col-span-2">
        <Sidebar />
        </section>
        <section className="col-span-8">
          <Portfolio />
          <Footer />
        </section>
      </main>
    </>
  );
}

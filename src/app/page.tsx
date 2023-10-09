import Footer from "@/app/components/Footer";
import Portfolio from "@/app/sections/Portfolio";
import Sidebar from "@/app/components/Sidebar";
import AboutMe from "@/app/sections/AboutMe";


export default function Home() {
  return (
    <>
      <main className="w-full h-screen bg-slate-300/40 grid grid-cols-10 gap-2">
        <section className="col-span-2">
        <Sidebar />
        </section>
        <section className="col-span-8 bg-gray-100">
          <Portfolio />
          <AboutMe />
          <Footer />
        </section>
      </main>
    </>
  );
}

import Footer from "@/app/components/Footer";
import Portfolio from "@/app/sections/Portfolio";
import Sidebar from "@/app/components/Sidebar";
import AboutMe from "@/app/sections/AboutMe";
import Packages from "./sections/Packages";
import Contact from "./sections/Contact";


export default function Home() {
  return (
    <>
      <main className="w-full h-screen sm:bg-slate-300/40 sm:grid sm:grid-cols-10 sm:gap-2">
        <section className="sm:col-span-2">
        <Sidebar />
        </section>
        <section className="sm:col-span-8 bg-gray-100">
          <Portfolio />
          <AboutMe />
          <Packages/>
          <Contact/>
          <Footer />
        </section>
      </main>
    </>
  );
}

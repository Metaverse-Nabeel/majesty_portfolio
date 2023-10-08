import Footer from "@/components/Footer";
import Portfolio from "@/sections/Portfolio";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen grid grid-cols-6 gap-2">
        <section className="col-span-1">
        <Sidebar />
        </section>
        <section className="col-span-5 border-2 border-red-500">
          <Portfolio />
          <Footer />
        </section>
      </main>
    </>
  );
}

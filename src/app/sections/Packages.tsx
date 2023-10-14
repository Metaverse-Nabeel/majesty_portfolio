import { PackagesData } from "@/data"
import PackageCard from "../components/PackageCard"

const Packages = () => {
  return (
    <section id="packages" className="w-full px-4 flex-col">
        <h3 className="text-2xl">How much I charge</h3>
        <div className="flex-col md:flex md:flex-row items-center justify-center mt-2 px-4 z-0">
            {
                PackagesData.map((item)=> <PackageCard key={item.id} packageData={item}/>)
            }
        </div>
    </section>
  )
}

export default Packages
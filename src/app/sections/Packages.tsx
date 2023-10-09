import { PackagesData } from "@/data"
import PackageCard from "../components/PackageCard"

const Packages = () => {
  return (
    <section id="packages" className="w-full px-4 flex flex-col">
        <h3 className="text-2xl">How much I charge</h3>
        <div className="w-full h-1/3 flex items-center justify-between mt-2 px-4">
            {
                PackagesData.map((item)=> <PackageCard key={item.id} packageData={item}/>)
            }
        </div>
    </section>
  )
}

export default Packages
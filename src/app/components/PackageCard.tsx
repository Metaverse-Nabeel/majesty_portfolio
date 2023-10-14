interface Package {
  id: number;
  title: string;
  label: string;
  category: string;
  capacity: string;
  support: string;
  price: number;
  color: string;
}
interface PackageData {
  packageData: Package;
}

const PackageCard: React.FC<PackageData> = ({packageData}) => {
  return (
    <div className="flex flex-col w-full mb-16 opacity-70 hover:opacity-100 cursor-pointer">
      <p className={`w-[95%] text-white text-2xl flex items-center justify-center py-7`} style={{backgroundColor: `${packageData.color}`}}>{packageData.title}</p>
      <p className="w-[95%] bg-white flex items-center justify-center py-4 border-2 border-b-0 border-gray-400">{packageData.label}</p>
      <p className="w-[95%] bg-white flex items-center justify-center py-4 border-2 border-b-0 border-gray-400">{packageData.category}</p>
      <p className="w-[95%] bg-white flex items-center justify-center py-4 border-2 border-b-0 border-gray-400">{packageData.capacity}</p>
      <p className="w-[95%] bg-white flex items-center justify-center py-4 border-2 border-b-0 border-gray-400">{packageData.support}</p>
      <p className="w-[95%] bg-white text-4xl flex items-center justify-center py-10 border-2 border-b-0 border-gray-400"><span className="text-5xl pr-2">$</span>{packageData.price}</p>
      <div className="w-[95%] flex items-center justify-center py-8 border-2 border-gray-400">
        <button className="bg-[#009688] px-4 py-2 text-white rounded-md cursor-pointer border-2 border-transparent hover:border-[#009688] hover:bg-white/80 hover:text-[#009688]">Sign Up</button>
      </div>
    </div>
  )
}

export default PackageCard
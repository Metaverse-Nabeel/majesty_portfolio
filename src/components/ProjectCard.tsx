import { Data } from '../data'
import Image from 'next/image'

const ProjectCard: React.FC = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-between px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Data.map(item => (
        <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
          <Image className="w-full h-[250px] object-cover" width={75} height={150} src={item.image} alt={item.title} />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-2">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}

export default ProjectCard
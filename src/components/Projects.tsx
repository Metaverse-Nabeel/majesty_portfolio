import { Data } from '../data'
import Image from 'next/image'

const Projects: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-4xl mb-8'>Majesty Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Data.map(item => (
        <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
          <Image className="w-full h-[250px] object-cover" width={75} height={150} src={item.image} alt={item.title} />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-2">{item.desc}</p>
            <p className="text-blue-500">Category: {item.category}</p>
          </div>
        </div>
      ))}
    </div>
    </main>
  )
}

export default Projects
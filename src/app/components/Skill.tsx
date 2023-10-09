interface SkillProps {
  label: string;
  value: number;
}

const Skill: React.FC<SkillProps> = ({label, value}) => {
  return (
    <div >
      <p className='py-4'>{label}</p>
      <div className="w-full h-10 bg-slate-300">
        <div className={`h-[100%] bg-gray-800 rounded-md text-white text-center`} style={{ width: `${value}%`}}>
      <div className="flex items-center justify-center h-full">
        {value}
      </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
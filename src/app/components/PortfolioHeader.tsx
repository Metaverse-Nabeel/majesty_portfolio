"use client"
import { faGem, faImage, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { filterProjects } from "../store/slices/projectsSlice";


const PortfolioHeader = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector(state => state.projects.selectedCategory);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-[36px] px-4 py-4 font-semibold">My Portfolio</h1>
      <div className="flex space-x-1 items-center justify-start px-4 py-2 text-xl">
        <p className="text-md mr-4">Filters:</p>
        <button className={`px-5 py-2 ${category === "all" ? 'bg-black text-white' : 'bg-white text-black'} font-light text-black hover:bg-black hover:text-white uppercase`} onClick={() => dispatch(filterProjects("all"))}>All</button>
        <button className={`px-4 py-2 ${category === "design" ? 'bg-black text-white' : 'bg-white text-black'} font-light text-black hover:bg-black hover:text-white`} onClick={() => dispatch(filterProjects("design"))}><FontAwesomeIcon icon={faGem} className="text-md pr-4"  />Design</button>
        <button className={`px-4 py-2 ${category === "photos" ? 'bg-black text-white' : 'bg-white text-black'} font-light text-black hover:bg-black hover:text-white`} onClick={() => dispatch(filterProjects("photos"))}><FontAwesomeIcon icon={faImage} className="text-md pr-4"  />Photos</button>
        <button className={`px-4 py-2 ${category === "art" ? 'bg-black text-white' : 'bg-white text-black'} font-light text-black hover:bg-black hover:text-white`} onClick={() => dispatch(filterProjects("art"))}><FontAwesomeIcon icon={faPaintBrush} className="text-md pr-4"  />Art</button>
        </div>
        <div className="h-2 my-2 mx-4 mb-6 bg-gray-400/50 "/>
      </div>
    </>
  );
};

export default PortfolioHeader;

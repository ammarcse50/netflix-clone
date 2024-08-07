import axios from "axios";
import { useEffect, useState } from "react";
import MovieItem from "../MovieItem/MovieItem";

import { MdChevronLeft,MdChevronRight } from "react-icons/md";

const MovieRow = ({ title, url }) => {
  
  const rowId = Math.floor(Math.random()*1000)
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => setMovies(res.data.results));
  }, [url]);
  console.log(movies);
    
   const slide =(offset)=>{

    const slider = document.getElementById('slider' + rowId)
     slider.scrollLeft = slider.scrollLeft + offset;
   } 

  return (
    <div>
      <h1 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h1>
      <div className="relative flex items-center group">
       <MdChevronLeft onClick={()=>slide(-500)} size={40} className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"/>
        <div
          id={`slider`+rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map(movie => 
           <MovieItem movie={movie}/>
          )}
        </div>
        <MdChevronRight onClick={()=>slide(500)} size={40} className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"/>
      </div>
    </div>
  );
};

export default MovieRow;

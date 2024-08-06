import axios from "axios";
import { useEffect, useState } from "react";
import MovieItem from "../MovieItem/MovieItem";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => setMovies(res.data.results));
  }, [url]);
  console.log(movies);
  return (
    <div>
      <h1 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h1>
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map(movie => 
           <MovieItem movie={movie}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;

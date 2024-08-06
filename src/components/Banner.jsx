import { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../services/MovieServices";
import axios from "axios";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endpoints.popular).then((res) => {
      const movies = res.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];

      setMovie(randomMovie);
    });
  }, []);

  if (!movie) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  const { title, backdrop_path, release_date, overview} = movie;

  const truncate = (str,length)=>{


     if(!str)
     {
        return "";
     }

     return str.length > length ? str.slice(0,length)+"...": str;


  }


  return (
    <div className="w-full h-[400px] lg:h-[600px]">
      <div className="h-full w-full">
        <div className="absolute w-full h-[400px] lg:h-[600px] bg-gradient-to-r from-black" />
        <img
          src={createImageUrl(backdrop_path,"original")}
          className="w-full h-full object-cover object-top"
          alt={title}
        />
        <div className="absolute w-full top-[25%] lg:top-[35%] p-4 md:p-8">
          <h1 className="font-nsans-bold text-3xl md:text-5xl">{title}</h1>

          <div className="mt-8 mb-4">
            <button className="capitalize border bg-gray-300 border-gray-300 py-2 px-5 text-black ">play</button>
            <button className="capitalize border border-gray-300 py-2 px-5 ml-4">watch later</button>
          </div>
          <p className="text-gray-400 text-sm">{release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]" >{truncate(overview,150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

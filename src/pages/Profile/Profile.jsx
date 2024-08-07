import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase/firebase.config";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { createImageUrl } from "../../services/MovieServices";
import { AiOutlineClose } from "react-icons/ai";

const Profile = () => {
  const { user } = useAuth();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
        if (doc.data()) {
          setMovies(doc.data().favShows);
        }
      });
    }
  }, []);

  const slide = (offset) => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center top-[50%]">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  const handleUnlikedShow = async(movie)=>{

     const userDoc= doc(db,"users", user.email)

     await updateDoc(userDoc,{
      favShows: arrayRemove(movie)
     })

  }

  console.log(movies);

  return (
    <>
      <div>
        <div>
          <img
            className="bloc w-full h-[500px] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/129526b8-f755-4f8c-bc82-204efe7e23fa/BD-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f655af9e-cdd9-4a71-85bd-1e1787266031_small.jpg"
            alt="/"
          />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]" />
          <div className="absolute top-[20%] p-4 md:p-8">
            {" "}
            <h1 className="text-3xl md:text-5xl font-nsans-bold my-2">
              My Shows
            </h1>
            <p className="font-nsans-light text-gray-400 ">{user?.email}</p>
          </div>
        </div>
        {/* movie row  */}

        <h1 className="font-nsans-bold md:text-xl p-4 capitalize">Fav Shows</h1>
        <div className="relative flex items-center group">
          <MdChevronLeft
            onClick={() => slide(-500)}
            size={40}
            className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          />
          <div
            id={`slider`}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:[200px] inline-block rounded-lg overflow-hidden cursor-pointer  m-2"
              >
                <img
                  className="w-full h-40 block object-cover object-top"
                  src={createImageUrl(movie.backdrop_path ?? movie.poster_path, "w500")}
                  alt={movie.title}
                />

                <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
                  <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold">
                    {movie.title}
                  </p>
                  <p>
                    <AiOutlineClose size={30} 
                    onClick={()=> handleUnlikedShow(movie)}
                    className="absolute top-2  right-2"
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            onClick={() => slide(500)}
            size={40}
            className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Profile;

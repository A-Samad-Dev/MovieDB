import React, { useContext } from "react";
import { MovieContext } from "../MovieContext";

const Trending = () => {
  const { trendingMovies, setshowcaseMovieState } = useContext(MovieContext);
  return (
    <div className="">
      <div className="grid grid-flow-col auto-cols-auto gap-x-2 overflow-x-auto whitespace-nowrap">
        {trendingMovies?.map((trending, index) => (
          <div className="w-50 h-40 " key={index}>
            <img
              onClick={() => setshowcaseMovieState(trending)}
              src={`https://image.tmdb.org/t/p/original${trending.backdrop_path}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;

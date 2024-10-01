import { forwardRef, LegacyRef } from "react";
import ENV from "../../utils/env";
import { useNavigate } from "react-router-dom";
import Image from "../image/Image";

const MoviesItem = forwardRef(
  (
    { movies, index, item }: { movies: any; index: number; item: any },
    ref: LegacyRef<HTMLDivElement>
  ) => {
    const navigate=useNavigate()
    return (
      <div
        onClick={()=>navigate(`/movie/${item.id}`)}
        className="flex flex-col transition-all hover:scale-105 cursor-pointer"
        ref={movies.length - 1 === index ? ref : undefined}
      >
        <Image
          className={`!rounded-lg !shadow-2xl !mx-auto`}
          src={`${ENV.imgBaseUrl}${item.poster_path}`}
        />

        <h3 className="mt-2 text-[16px] text-center truncate mx-auto w-full font-bold">{item.title}</h3>
        <p className="flex items-center justify-center gap-1">
          <i className="material-icons text-yellow-400">star</i>
          {item.vote_average}
        </p>
      </div>
    );
  }
);

export default MoviesItem;

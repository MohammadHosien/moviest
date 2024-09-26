import { forwardRef, LegacyRef, useState } from "react";
import ENV from "../utils/env";

const MoviesItem = forwardRef(
  (
    { movies, index, item }: { movies: any; index: number; item: any },
    ref: LegacyRef<HTMLDivElement>
  ) => {
    const [imgLoading, setImgLoading] = useState(true);
    return (
      <div
        className="text-center"
        ref={movies.length - 1 === index ? ref : undefined}
      >
        <div>
          {imgLoading ? (
            <div className="h-[330px] w-full bg-slate-500 flex items-center justify-center text-center rounded-xl">
              loading
            </div>
          ) : null}
          <img
            className={`rounded-lg shadow-2xl ${
              !imgLoading ? "block" : "hidden"
            }`}
            onLoad={() => {
              setImgLoading(false);
            }}
            src={`${ENV.imgBaseUrl}${item.poster_path}`}
          />
        </div>

        <h3 className="mt-2 text-[16px] font-bold">{item.title}</h3>
        <p className="flex items-center justify-center gap-1">
          <i className="material-icons text-yellow-400">star</i>
          {item.vote_average}
        </p>
      </div>
    );
  }
);

export default MoviesItem;

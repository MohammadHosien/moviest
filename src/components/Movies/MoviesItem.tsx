import { forwardRef, LegacyRef, useState } from "react";
import ENV from "../../utils/env";
import { VscLoading } from "react-icons/vsc";

const MoviesItem = forwardRef(
  (
    { movies, index, item }: { movies: any; index: number; item: any },
    ref: LegacyRef<HTMLDivElement>
  ) => {
    const [imgLoading, setImgLoading] = useState(true);
    return (
      <div
        className="flex flex-col"
        ref={movies.length - 1 === index ? ref : undefined}
      >
        {imgLoading ? (
          <div className="flex-1 min-h-48 bg-white text-primary-base font-[700] shadow-inner border flex items-center justify-center text-center rounded-xl">
            <VscLoading size={50} className="animate-spin w-60" />
          </div>
        ) : null}

        <img
          className={`rounded-lg shadow-2xl mx-auto ${
            !imgLoading ? "block" : "hidden"
          }`}
          onLoad={() => {
            setImgLoading(false);
          }}
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

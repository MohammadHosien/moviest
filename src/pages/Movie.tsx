import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import urls from "../utils/url";
import ENV from "../utils/env";
import Actors from "../components/sliders/actors/Actors";
import { VscLoading } from "react-icons/vsc";
import Recomendation from "../components/recomendations/Recomendations";

const Movie = () => {
  const [movie, setMovie] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(urls.getMovie(params.id!));
      const getMovie = await response.json();
      console.log(getMovie);
      setMovie(getMovie);
      setLoading(false);
    })();
  }, [params.id]);

  return (
    <div className="overflow-auto h-screen">
      {!loading ? (
        <>
          <div className="flex mx-44 mt-5">
            <img
              src={`${ENV.imgBaseUrl}/${movie.poster_path}`}
              className="h-[460px] shadow-2xl rounded-xl mt-28 ms-auto me-10"
              alt=""
            />
            <div>
              <h1 className="text-[46px] font-[100] mt-16">
                {movie.title.toUpperCase()}
              </h1>
              <p className="text-[20px] font-[700]">
                {movie.tagline.toUpperCase()}
              </p>
              <div className="flex justify-between mt-4">
                <div className="flex gap-1 items-center">
                  <i className="material-icons text-[gold] text-[16px]">star</i>
                  {movie.vote_average}
                </div>
                <div className="text-[#83a4ba] font-[500px]">
                  {movie.runtime}min/{movie.original_language}/
                  {movie.release_date}
                </div>
              </div>
              <h4 className="text-[16px] font-[700] mt-4">GENERS</h4>
              <div className="flex gap-6 mt-2">
                {movie.genres.map((i: { name: string }) => (
                  <div className="text-[#546e7a] flex gap-1 items-center font-[700] text-[14px]">
                    <i className="material-icons text-[15px]">trip_origin</i>
                    {i.name}
                  </div>
                ))}
              </div>
              <h4 className="text-[16px] font-[700] mt-4">THE SYNOPSIS</h4>
              <p className="mt-3">{movie.overview}</p>
              <h4 className="text-[16px] font-[700] mt-4">THE CASTS</h4>
              <Actors filmId={params.id!} />
            </div>
          </div>
          <Recomendation filmId={params.id!} />
        </>
      ) : (
        <div className="h-screen flex justify-center text-primary-base items-center">
          <VscLoading size={50} className="animate-spin w-60" />
        </div>
      )}
    </div>
  );
};

export default Movie;

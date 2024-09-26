import { useEffect, useRef, useState } from "react";
import urls from "../utils/url";
import MoviesItem from "./moviesItem";
import { useParams } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const params = useParams();
  const ref = useRef<any>(null);

  useEffect(() => {
    const fetchTmdb = async () => {
      setLoading(true);
      const data = await fetch(urls.tmdb(params.actions!, page));
      const response = await data.json();
      setMovies([...movies, ...response.results]);
      setLoading(false);
    };
    fetchTmdb();
  }, [page]);

  useEffect(() => {
    const fetchTmdb = async () => {
      setLoading(true);
      const data = await fetch(urls.tmdb(params.actions!, page));
      const response = await data.json();
      setMovies(response.results);
      setLoading(false);
    };
    fetchTmdb();
  }, [params.actions]);

  useEffect(() => {
    const observer = new IntersectionObserver((entiry) => {
      if (entiry[0].isIntersecting) {
        setPage(page + 1);
      }
    });
    if (ref.current && !loading) {
      observer.observe(ref.current);
    }
    () => {
      observer.disconnect();
    };
  }, [loading]);

  return (
    <div className="h-full overflow-auto pb-20">
      <div className="col-span-full text-[32px] font-extrabold mt-6 ms-5">
        POPULAR
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-6">
        {movies.map((i: any, index: number) => (
          <MoviesItem item={i} index={index} movies={movies} ref={ref} />
        ))}
      </div>
      {loading ? (
        <div className="flex justify-center text-[30px]">Loading</div>
      ) : null}
    </div>
  );
};

export default Movies;

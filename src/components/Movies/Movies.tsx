import { useEffect, useRef, useState } from "react";
import urls from "../../utils/url";
import MoviesItem from "./MoviesItem";
import { useParams } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";

const Movies = () => {
  const [movies, setMovies] = useState<any>([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [page, setPage] = useState(1);
  const params = useParams();
  const ref = useRef<any>(null);
  const observer = useRef<any>(null);

  useEffect(() => {
    if (page > 1) {
      const fetchTmdb = async () => {
        setPageLoading(true);
        const data = await fetch(
          urls.tmdb(params.discord!, page, params.genre)
        );
        const response = await data.json();
        setMovies([...movies, ...response.results]);
        setPageLoading(false);
      };
      fetchTmdb();
    }
  }, [page]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
    const fetchTmdb = async () => {
      setPageLoading(true);
      const data = await fetch(urls.tmdb(params.discord!, 1, params.genre));
      const response = await data.json();
      setMovies(response.results);
      setPageLoading(false);
    };
    fetchTmdb();
  }, [params.discord, params.genre]);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entiry) => {
      if (entiry[0].isIntersecting) {
        setPage(page + 1);
      }
    });
    if (ref.current && !pageLoading) {
      observer.current.observe(ref.current);
    }
    () => {
      observer.current.disconnect();
    };
  }, [pageLoading]);

  return (
    <>
      <div className="overflow-auto h-full pb-20">
        <div className="col-span-full text-[32px] font-extrabold mt-6 ms-5">
          POPULAR
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-6">
          {movies.map((i: any, index: number) => (
            <MoviesItem item={i} index={index} movies={movies} ref={ref} />
          ))}
        </div>
        {pageLoading ? (
          <div
            className={`flex justify-center text-primary-base text-[50px] ${
              page === 1 && " mt-32 items-center !text-[80px]"
            }`}
          >
            <VscLoading className="animate-spin" />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Movies;

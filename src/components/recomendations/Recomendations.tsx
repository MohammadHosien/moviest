import { useEffect, useState } from "react";
import urls from "../../utils/url";
import MoviesItem from "../movies/MoviesItem";

const Recomendation = ({ filmId }: { filmId: string }) => {
  const [recomendation, setRecomendation] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(urls.getRecomendation(filmId));
      const { results } = await response.json();
      setRecomendation(results);
    })();
  }, []);
  return (
    <>
      <h1 className="text-[24px] font-[700] ms-5 mt-5">Recommendations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-6">
        {recomendation.map((i, index) => (
          <MoviesItem index={index} movies={recomendation} item={i} />
        ))}
      </div>
    </>
  );
};

export default Recomendation;

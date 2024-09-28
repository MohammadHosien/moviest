import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import urls from "../../utils/url";
import { VscLoading } from "react-icons/vsc";

const Sidebar = () => {
  const [genres, setGenres] = useState<{ name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(urls.ganerlist());
      const data = await response.json();
      console.log(data);
      setGenres(data.genres);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <div className="w-[250px] hidden lg:block h-full bg-[#191C1F] overflow-auto">
        <h2 className="bg-primary-base flex gap-2 items-center justify-center font-[700] py-[18px] text-white">
          <i className="material-icons">movie_creation</i>
          Moviest
        </h2>
        <ul className="bg-[#191C1F] py-2 text-white">
          <p className="text-[11.2px] pt-[1.2rem] ps-[1.2rem] pb-2">Discover</p>
          <li
            className={`text-[14.4px] p-[.9rem] mt-1 text-[#83a4ba] cursor-pointer flex items-center gap-2 hover:bg-[#222B31] hover:text-primary-base transition-all ${
              !params.discord && "bg-[#222B31] text-primary-base"
            }`}
            onClick={() => navigate("/")}
          >
            <span className="material-icons text-[14.4px]">verified</span>
            Popular
          </li>
          <li
            className={`text-[14.4px] py-3 ps-4 text-[#83a4ba] flex items-center gap-2 cursor-pointer hover:bg-[#222B31] hover:text-primary-base transition-all ${
              params.discord === "top_rated"
                ? "bg-[#222B31] text-primary-base"
                : ""
            }`}
            onClick={() => navigate("/top_rated")}
          >
            <span className="material-icons text-[14.4px]">auto_awesome</span>
            Top Rated
          </li>
          <li
            className={`text-[14.4px] p-4 text-[#83a4ba] flex items-center gap-2 cursor-pointer hover:bg-[#222B31] hover:text-primary-base transition-all ${
              params.discord === "upcoming"
                ? "bg-[#222B31] text-primary-base"
                : ""
            }`}
            onClick={() => navigate("/upcoming")}
          >
            <span className="material-icons text-[14.4px]">
              hourglass_empty
            </span>
            Upcoming
          </li>
        </ul>
        <hr className="border-[#83a4ba] border-[1px] mx-4" />
        <p className="text-[11.2px] text-white pt-[1.2rem] ps-[1.2rem] pb-2">Genrse</p>
        <ul>
          {!loading ? (
            genres.map((i) => (
              <li
                className={`text-[14.4px] py-3 ps-4 text-[#83a4ba] flex items-center gap-2 cursor-pointer hover:bg-[#222B31] hover:text-primary-base transition-all ${
                  params.actions === "top_rated"
                    ? "bg-[#222B31] text-primary-base"
                    : ""
                }`}
              >
                <span className="material-icons text-[14.4px]">
                  trip_origin
                </span>
                {i.name}
              </li>
            ))
          ) : (
            <div className="flex justify-center mt-2 text-primary-base">
              <VscLoading size={50} className="animate-spin w-60" />
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

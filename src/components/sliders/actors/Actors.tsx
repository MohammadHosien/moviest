import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode,Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import urls from "../../../utils/url";
import ENV from "../../../utils/env";
import Image from "../../image/Image";

const Actors = ({ filmId }: { filmId: string }) => {
  const [actors, setActors] = useState<{ profile_path: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(urls.getActors(filmId));
      const getActors = await response.json();
      setActors(getActors.cast);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        autoplay={{ delay: 6000 }}
        freeMode={true}
        modules={[FreeMode,Autoplay]}
        className="!w-[600px] ms-0 mt-4"
      >
        {!loading ? (
          <>
            {actors.map((i) => (
              <SwiperSlide className="!size-[60px] relative overflow-hidden rounded-full">
                <Image
                  loaderClassName="!text-[20px] !w-[60px] min-h-[60px] overflow-hidden rounded-full"
                  className="object-contain absolute -top-5"
                  src={`${ENV.imgBaseUrl}/${i.profile_path}`}
                />
              </SwiperSlide>
            ))}
          </>
        ) : (
          <div>loading</div>
        )}
      </Swiper>
    </>
  );
};

export default Actors;

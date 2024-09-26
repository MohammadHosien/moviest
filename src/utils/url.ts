import ENV from "./env";

const urls = {
  tmdb: (params: string, page = 1) =>
    !params
      ? `${ENV.baseurl}discover/movie?api_key=${ENV.apikey}&&page=${page}`
      : `${ENV.baseurl}movie/${params}?api_key=${ENV.apikey}&&page=${page}`,
};

export default urls;

import ENV from "./env";

const urls = {
  tmdb: (discord: string, page = 1, genre?: string, v = "3") =>
    !discord
      ? !genre
        ? `${ENV.baseurl}/${v}/discover/movie?api_key=${ENV.apikey}&&page=${page}`
        : `${ENV.baseurl}/${v}/discover/movie?api_key=${ENV.apikey}&&page=${page}&&with_genres=${genre}`
      : `${ENV.baseurl}/${v}/movie/${discord}?api_key=${ENV.apikey}&&page=${page}`,
  ganerlist: (v = "3") => `
${ENV.baseurl}/${v}/genre/movie/list?api_key=${ENV.apikey}`,
};

export default urls;

import ENV from "./env";

const urls = {
  tmdb: (discord: string, page = 1, genre?: string, v = "3") =>
    !discord
      ? `${ENV.baseurl}/${v}/discover/movie?api_key=${
          ENV.apikey
        }&&page=${page}&&${genre ? `with_genres=${genre}` : ""}`
      : `${ENV.baseurl}/${v}/movie/${discord}?api_key=${ENV.apikey}&&page=${page}`,
  ganerlist: (v = "3") => `
${ENV.baseurl}/${v}/genre/movie/list?api_key=${ENV.apikey}`,
  getMovie: (id: string, v = "3") =>
    `${ENV.baseurl}/${v}/movie/${id}?api_key=${ENV.apikey}`,
  getActors: (id: string, v = "3") =>
    `${ENV.baseurl}/${v}/movie/${id}/credits?api_key=${ENV.apikey}`,
  getRecomendation: (id: string, v = "3") => `
${ENV.baseurl}/${v}/movie/${id}/recommendations?api_key=${ENV.apikey}`,
};

export default urls;

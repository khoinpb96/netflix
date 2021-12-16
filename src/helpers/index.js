import { request, tmdb, base_url } from "../api";

const getData = async () => {
  const res = await tmdb.get(request.getPopular);
  const rawData = await res.data.results;
  const data = rawData.map((data) => {
    return {
      ...data,
      backdrop_path: `${base_url}${data.backdrop_path}`,
      poster_path: `${base_url}${data.poster_path}`,
    };
  });
  return data;
};
export { getData };

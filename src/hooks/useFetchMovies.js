import { useEffect, useState } from "react";

export default function useFetchMovies(type, request) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${request}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
      );
      const data = await res.json();
      setData(data.results);
    };
    fetchData();
  }, [type, request]);

  return { data };
}

import { useEffect, useState } from "react";

export default function useFetchMovie(type, id) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
      );
      const data = await res.json();
      setData(data);
    };

    fetchMovie();
  }, []);

  return { data };
}

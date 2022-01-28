import { useEffect, useState } from "react";

export default function useFetchMovieDetail(type, id) {
  const [images, setImages] = useState([]);
  const [logo, setLogo] = useState({});
  // const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    const fetchMovieImages = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/images?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
      );
      const data = await res.json();
      setImages(data.backdrops.slice(0, 16));
    };

    const fetchMovieLogo = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/images?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
      );
      const data = await res.json();
      setLogo(data.logos.filter((logo) => logo.iso_639_1 === "en")[0]);
    };

    // const fetchMovieTrailer = async () => {
    //   const res = await fetch(
    //     `https://api.themoviedb.org/3/movie/${param.id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
    //   );
    //   const data = await res.json();
    //   setTrailer(data.results.filter((t) => t.name.includes("Official")));
    // };

    fetchMovieLogo();
    fetchMovieImages();
    // fetchMovieTrailer();
  }, []);

  return { images, logo };
}

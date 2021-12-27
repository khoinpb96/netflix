import { useEffect, useState } from "react";

import "./Hero.scss";
import { base_url, request, tmdb } from "../../api";

export default function Hero() {
  const [data, setData] = useState({});
  const img_size = "original";
  //Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await tmdb.get(request.getPopular);
        const data = await res.data.results;
        const randomIndex = Math.floor(Math.random() * 20);
        setData(data[randomIndex]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="hero">
      <div className="poster">
        <img
          src={`${base_url}${img_size}${data.backdrop_path}`}
          alt={data.title}
        />
      </div>

      <div className="content">
        <h2 className="title">{data.title}</h2>
        <p className="overview">{data.overview}</p>
        <span className="cta">
          <button>
            <i className="fas fa-play" />
            Play
          </button>
          <button>
            <i className="fas fa-info" />
            More Info
          </button>
        </span>
      </div>
    </div>
  );
}

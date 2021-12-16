import { useEffect, useState } from "react";
import { base_url, tmdb } from "../../api";

import "./Slider.scss";

export default function Slider({ title, request }) {
  const [data, setData] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(0);
  const paginations = [0, 1, 2, 3];
  const img_size = "w300";

  //Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await tmdb.get(request);
        const data = await res.data.results;
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log("re-render");

  return (
    <div className="slider">
      <h3>{title}</h3>
      <div className="pagi-container">
        {paginations.map((pagi) => (
          <div
            className={pagi === sliderIndex ? "pagi current" : "pagi"}
            key={pagi}
          />
        ))}
      </div>
      <div className="slides-container">
        <div
          className="slides"
          style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
        >
          {data.map((slide) => (
            <div className="slide" key={slide.id}>
              <img
                src={`${base_url}${img_size}${slide.poster_path}`}
                alt={slide.title}
              />
            </div>
          ))}
        </div>
        {sliderIndex !== 0 && (
          <button
            className="prev-btn"
            onClick={() => {
              if (sliderIndex > 0) setSliderIndex((prev) => prev - 1);
            }}
          >
            <i className="fas fa-chevron-left" />
          </button>
        )}
        {sliderIndex !== 3 && (
          <button
            className="next-btn"
            onClick={() => {
              if (sliderIndex < 3) setSliderIndex((prev) => prev + 1);
            }}
          >
            <i className="fas fa-chevron-right" />
          </button>
        )}
      </div>
    </div>
  );
}

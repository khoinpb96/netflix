import { useEffect, useRef, useState } from "react";
import { base_url, tmdb } from "../../api";

import "./test.scss";

export default function TestSlider({ title, request }) {
  const [data, setData] = useState([]);
  const img_size = "w300";

  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderRef = useRef();
  const sliderWidth = sliderRef?.current?.scrollWidth;

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

  //Slide
  useEffect(() => {
    sliderRef.current.scrollLeft = (sliderWidth / 4) * sliderIndex;
    console.log("index: ", sliderIndex);
    console.log(
      "new Left: ",
      (sliderRef.current.scrollLeft = (sliderWidth / 4) * sliderIndex)
    );
  }, [sliderIndex]);

  return (
    <div className="slider-test">
      <h3>{title}</h3>
      {/* <div className="pagi-container">
        {paginations.map((pagi) => (
          <div
            className={pagi === sliderIndex ? "pagi current" : "pagi"}
            key={pagi}
          />
        ))}
      </div> */}
      <div
        className="slides-container"
        ref={sliderRef}
        onScroll={(e) => {
          console.log("scrollLeft :", e.target.scrollLeft);
          console.log("scrollWidth :", e.target.scrollWidth);
          console.log("offsetWidth :", e.target.offsetWidth);
        }}
      >
        <div className="slides">
          {data.map((slide) => (
            <div className="slide" key={slide.id}>
              <img
                src={`${base_url}${img_size}${slide.poster_path}`}
                alt={slide.title}
              />
            </div>
          ))}
        </div>
        <button
          className="prev-btn"
          onClick={() => {
            if (sliderIndex > 0) setSliderIndex((prev) => prev - 1);
          }}
        >
          <i className="fas fa-chevron-left" />
        </button>
        <button
          className="next-btn"
          onClick={() => {
            if (sliderIndex < 3) setSliderIndex((prev) => prev + 1);
          }}
        >
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

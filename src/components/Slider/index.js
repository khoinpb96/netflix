import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IMG_BASE_URL } from "../../constants";
import useFetchMovies from "../../hooks/useFetchMovies";
import logo from "../../asset/logo.svg";
import "./Slider.scss";

const SlideLink = styled(Link)`
  transform: translateX(${(props) => props.direction});
  ${(props) =>
    `
    .slide-detail {
      opacity: ${props.active};
    }
  `}
  display: flex;
  min-width: 16.66666%;
  padding-right: 0.3125vw;
  transition: 0.3s;

  flex-direction: column;
  color: #fff;
  text-decoration: none;
`;

const SlideImage = styled.div`
  padding-top: 56.25%;
  background: url(${(props) => props.src});
  border-radius: 4px 4px 0 0;
  background-size: cover;
  position: relative;
`;
const img_size = "w780";

export default function Slider({ title, type, request }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const paginations = [0, 1, 2, 3];
  const [hoverSlide, setHoverSlide] = useState(null);
  const genreList = useSelector((state) => state.genre[type]);
  const { data } = useFetchMovies(type, request);

  //Handle SlideLink props
  const setSlideDirection = (index) => {
    if (index > hoverSlide) {
      return "25%";
    } else if (index < hoverSlide) {
      return "-25%";
    }
  };

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
          {data &&
            data.map((slide, index) => (
              <SlideLink
                to={`${type}/${slide.id}`}
                className="slide"
                key={slide.id}
                onMouseEnter={() => setHoverSlide(index + 1)}
                onMouseLeave={() => setHoverSlide(null)}
                direction={hoverSlide && setSlideDirection(index + 1)}
                active={hoverSlide - 1 === index ? 1 : 0}
              >
                <SlideImage
                  src={`${IMG_BASE_URL}${img_size}${slide.backdrop_path}`}
                >
                  <img src={logo} className="logo" alt="logo" />
                </SlideImage>

                <div className="slide-detail">
                  <div className="buttons">
                    <i className="fas fa-play" />
                    <i className="fas fa-plus" />
                    <i className="far fa-thumbs-up" />
                    <i className="far fa-thumbs-down" />
                  </div>
                  <div className="title">
                    {slide.title}
                    {slide.name}
                  </div>
                  <ul className="genre">
                    {slide.genre_ids.map((genreId, index) => {
                      const genres = genreList.filter(
                        (g2) => g2.id === genreId
                      );
                      return <li key={index}>{genres[0]?.name}</li>;
                    })}
                  </ul>
                </div>
              </SlideLink>
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

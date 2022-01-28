import { Link } from "react-router-dom";
import styled from "styled-components";

import { IMG_BASE_URL, IMG_SIZE } from "../../constants";
import useFetchMovies from "../../hooks/useFetchMovies";
import "./Hero.scss";

const HeroImage = styled.div``;

export default function Hero() {
  const { data } = useFetchMovies("movie", "popular");
  //Random 1 movie for hero
  const randomIndex = Math.floor(Math.random() * 20);
  const heroData = data[randomIndex];

  if (!heroData) return <p>Loading...</p>;
  return (
    <div className="hero">
      <div className="poster">
        <img
          src={`${IMG_BASE_URL}${IMG_SIZE}${heroData.backdrop_path}`}
          alt={heroData.title}
        />
      </div>

      <div className="content">
        <h2 className="title">{heroData.title}</h2>
        <p className="overview">{heroData.overview}</p>
        <span className="cta">
          <button>
            <i className="fas fa-play" />
            Play
          </button>
          <Link to={`${heroData.id}`}>
            <i className="fas fa-info" />
            More Info
          </Link>
        </span>
      </div>
    </div>
  );
}

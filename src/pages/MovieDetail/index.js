import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { IMG_BASE_URL, IMG_SIZE } from "../../constants";
import useFetchMovieDetail from "../../hooks/useFetchMovieDetail";
import useFetchMovie from "../../hooks/useFetchMovie";
import { addFav } from "../../redux/reducers/favoriteSlice";

import {
  MovieDetailPage,
  MovieBackdropContainer,
  MovieBackdrop,
  MovieLogo,
  MovieDetailContainer,
  TrailerContainer,
  ImageContainer,
  Button,
  PlayButton,
} from "./style";

export default function MovieDetail() {
  const param = useParams();
  const dispatch = useDispatch();
  const genreList = useSelector((state) => state.genre[param.type]);

  const { images, logo } = useFetchMovieDetail(param.type, param.id);
  const { data } = useFetchMovie(param.type, param.id);

  const movieGenre = data?.genres?.map((g) =>
    genreList.find((g2) => g2.id === g.id)
  );
  const [isClicked, setIsClicked] = useState(false);
  // const companies = data.production_companies?.filter((com) => com.logo_path);

  console.log(data);

  return (
    <MovieDetailPage>
      <MovieBackdropContainer>
        <MovieBackdrop
          src={`${IMG_BASE_URL}${IMG_SIZE}${data.backdrop_path}`}
        />

        <div className="backdrop" />

        <div className="movie-header">
          <MovieLogo src={`${IMG_BASE_URL}w300${logo.file_path}`} />
          <div className="buttons">
            <PlayButton>
              <i className="fas fa-play" />
              Play
            </PlayButton>
            <Button
              className={`${isClicked ? "fas fa-check" : "fas fa-plus"}`}
              onClick={() => {
                setIsClicked(true);
                dispatch(addFav(data));
              }}
              active={isClicked}
            />
            <Button className="far fa-thumbs-up" />
            <Button className="far fa-thumbs-down" />
          </div>
        </div>
      </MovieBackdropContainer>

      <MovieDetailContainer>
        <div className="left">
          <div
            style={{
              letterSpacing: 0.5,
              color: "#FFFFFFbb",
              fontSize: "2vw",
            }}
          >
            {data.overview}
          </div>
        </div>
        <div className="right" style={{ fontSize: "1.8vw" }}>
          <div className="genre">
            <label style={{ display: "block" }}>Genre:</label>
            {movieGenre?.map((g) => (
              <span
                style={{
                  color: "#FFFFFFbb",
                }}
                key={g.id}
              >
                {g.name}
                {movieGenre.length > 1 ? "," : ""}{" "}
              </span>
            ))}
          </div>
          <div className="movie-info">
            Release year:{" "}
            <span
              style={{
                color: "#FFFFFFbb",
              }}
            >
              {data?.release_date?.slice(0, 4)}
            </span>
            {data.adult && <span className="18">18+</span>}
          </div>
          <div>
            Duration:{" "}
            <span
              style={{
                color: "#FFFFFFbb",
              }}
            >
              {data.runtime} minutes
            </span>
          </div>
          <div>
            Status:{" "}
            <span
              style={{
                color: "#FFFFFFbb",
              }}
            >
              {data.status}
            </span>
          </div>
        </div>
      </MovieDetailContainer>

      <h2 style={{ margin: "3rem 4% 2rem" }}>Pictures</h2>
      <ImageContainer>
        {images?.map((img) => (
          <img
            src={`${IMG_BASE_URL}w300${img.file_path}`}
            key={img.file_path}
          />
        ))}
      </ImageContainer>

      {/* <h2 style={{ margin: "3rem 4% 2rem" }}>Produce by</h2>
      {companies.map((com) => (
        <h3>{com.name}</h3>
      ))} */}

      {/* <h2 style={{ margin: "3rem 4% 2rem" }}>Trailer & More</h2>
      <TrailerContainer>
        {trailer &&
          trailer.map((t) => (
            <iframe
              src={`https://www.youtube.com/embed/${t.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              key={t.key}
            />
          ))}
      </TrailerContainer> */}
    </MovieDetailPage>
  );
}

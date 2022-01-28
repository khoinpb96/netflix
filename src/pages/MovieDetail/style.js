import styled from "styled-components";

const MovieDetailPage = styled.main`
  position: relative;
`;

const MovieBackdropContainer = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
  }

  .backdrop {
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, #000000, transparent);
  }

  .movie-header {
    position: absolute;
    bottom: 3rem;
    left: 4%;

    .buttons {
      display: flex;
      gap: 0.8vw;
      align-items: center;
      margin-top: 0.8vw;
    }
  }
`;

const MovieBackdrop = styled.div`
  padding-top: 55%;
  background: url(${(props) => props.src});
  background-size: cover;
`;

const MovieDetailContainer = styled.div`
  padding: 0 4%;
  display: flex;
  gap: 10%;

  .left {
    width: 60vw;
  }

  .right {
    .movie-info {
      display: flex;
      align-items: center;

      span.18 {
        margin: 4px;
        padding: 4px;
        border: 1px solid #fff;
      }
    }
  }
`;

const MovieLogo = styled.div`
  padding-top: 35%;
  background: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 2rem;
  width: 30vw;
`;

const TrailerContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;

  iframe {
    min-width: 560px;
    height: 315px;
  }
`;

const Button = styled.i`
  width: 4vw;
  height: 4vw;
  border: 2px solid #909090;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.6vw;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #232323;
  color: #fff;
  transition: 0.3s;

  &:hover {
    border: 2px solid #fff;
    background-color: #fff;
    color: #000;
  }
`;

const PlayButton = styled.button`
  background: #fff;
  border: none;
  padding: 1vw 2vw;
  border-radius: 4px;

  display: flex;
  gap: 1vw;
  align-items: center;
  cursor: pointer;

  font-size: 2vw;

  i {
    color: #000;
  }
`;

const ImageContainer = styled.div`
  padding: 0 4%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px;

  img {
    width: 100%;
  }
`;

export {
  MovieDetailPage,
  MovieBackdropContainer,
  MovieBackdrop,
  MovieLogo,
  MovieDetailContainer,
  ImageContainer,
  TrailerContainer,
  Button,
  PlayButton,
};

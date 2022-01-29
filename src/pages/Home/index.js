import Hero from "../../components/Hero";
import Slider from "../../components/Slider";
import MovieDetailModal from "../../components/MovieDetailModal";
import styled from "styled-components";

const Homepage = styled.section`
  position: relative;
`;
export default function HomePage() {
  return (
    <Homepage>
      <Hero />
      <Slider title="Trending Now" type="movie" request="popular" />
      <Slider title="Hot TV Series" type="tv" request="popular" />
      <Slider title="At Threater Soon" type="movie" request="upcoming" />
      <MovieDetailModal />
    </Homepage>
  );
}

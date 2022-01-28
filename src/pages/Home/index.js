import Hero from "../../components/Hero";
import Slider from "../../components/Slider";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Slider title="Trending Now" type="movie" request="popular" />
      <Slider title="Hot TV Series" type="tv" request="popular" />
      <Slider title="At Threater Soon" type="movie" request="upcoming" />
    </main>
  );
}

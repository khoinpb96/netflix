import { request } from "../api";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

export default function Browser() {
  return (
    <section>
      <Hero />
      <Slider title="Top Popular" request={request.getPopular} />
      <Slider title="Top Rated" request={request.getTopRated} />
      <Slider title="Upcoming" request={request.getUpcoming} />
    </section>
  );
}

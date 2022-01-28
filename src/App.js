import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchMovieGenre, fetchTvGenre } from "./redux/thunk";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Favorite from "./pages/Favorite";
import HomePage from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import { NetflixPage } from "./styles";

export default function App() {
  //Fetch Genres into Redux when render app
  const dispatch = useDispatch();
  dispatch(fetchMovieGenre());
  dispatch(fetchTvGenre());

  return (
    <NetflixPage>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path=":type/:id" element={<MovieDetail />} />
        <Route path="search" element={<Search />} />
        <Route path="favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </NetflixPage>
  );
}

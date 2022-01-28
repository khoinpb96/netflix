import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
  SearchPageContainer,
  FilterContainer,
  SearchResults,
  Pagi,
  OpenMenuButton,
} from "./style";
import { useSelector } from "react-redux";

import { IMG_BASE_URL } from "../../constants";

export default function SearchPage() {
  const [params] = useSearchParams();
  const searchParam = params.get("q");
  const genreList = useSelector((state) => state.genre.genreList);

  const [searchData, setSearchData] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [page, setPage] = useState(1);

  //   const [sliderVal, setSliderVal] = useState([1990, 2021]);
  //   const [genreVal, setGenreVal] = useState(0);

  const [filterIsOpened, setfilterIsOpened] = useState(false);

  //Fetch pure data
  useEffect(() => {
    const fetchMovieDetail = async () => {
      const res = await fetch(
        ` https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${searchParam}&page=${page}`
      );
      const data = await res.json();
      console.log(data);
      setSearchData(data.results);
      setTotalPage(data.total_pages);
    };
    fetchMovieDetail();
  }, [page, params]);

  const handleGenreChange = (e) => {
    const result = searchData.filter((movie) =>
      movie.genre_ids.includes(+e.target.value)
    );
    console.log(result);
  };

  if (searchData.length === 0)
    return (
      <SearchPageContainer>
        Not found, please try another keyword or filter.
      </SearchPageContainer>
    );

  return (
    <SearchPageContainer>
      <h1>
        Result for: '{searchParam}'
        <OpenMenuButton
          className="fas fa-filter"
          onClick={() => setfilterIsOpened(true)}
        />
      </h1>

      <FilterContainer isOpened={filterIsOpened}>
        <h3>Sort by:</h3>
        <select name="sort" id="sort">
          <option>Popularity(Desc)</option>
          <option>Popularity(Asc)</option>
          <option>Score(Desc)</option>
          <option>Score(Asc)</option>
        </select>

        <h3>Filter</h3>
        {/* <h4>by Year:</h4>
        <label htmlFor="">From:</label> */}
        <h4>by Genre:</h4>
        <select name="genre" id="genre" onChange={handleGenreChange}>
          {genreList &&
            genreList.map((genre) => (
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
            ))}
        </select>

        <Button variant="contained" onClick={() => setfilterIsOpened(false)}>
          Done
        </Button>
        <Button
          variant="contained"
          //   onClick={() => {
          //     setGenreVal(0);
          //   }}
        >
          Clear
        </Button>
      </FilterContainer>

      <SearchResults>
        {searchData &&
          searchData.map((result) => (
            <Link to={`${result.id}`} key={result.id}>
              <img
                src={`${IMG_BASE_URL}w342${result.poster_path}`}
                alt={result.title}
              />
            </Link>
          ))}
      </SearchResults>

      {totalPage && <Pagi count={totalPage} onChange={(e, p) => setPage(p)} />}
    </SearchPageContainer>
  );
}

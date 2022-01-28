import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FavPage, SearchResults } from "./style";

export default function Favorite() {
  const favList = useSelector((state) => state.fav.favList);
  console.log(favList);

  return (
    <FavPage>
      <h1 style={{ marginBottom: "3rem" }}>Your Favorites</h1>
      {favList.length === 0 && (
        <p>
          You don't have any fav, try to add some by click to the + button in
          movie page
        </p>
      )}
      <SearchResults>
        {favList?.map((fav) => (
          <Link to={`${fav.id}`} key={fav.id}>
            <img
              src={`https://cdn.imgproxify.com/image?url=https://image.tmdb.org/t/p/w342${fav.poster_path}`}
              alt={fav.title}
            />
          </Link>
        ))}
      </SearchResults>
    </FavPage>
  );
}

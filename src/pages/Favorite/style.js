import styled from "styled-components";

const FavPage = styled.main`
  position: relative;
  padding: 68px 4% 3rem;
  min-height: 100vh;
`;

const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  a {
    display: flex;
    width: calc(23vw - 1rem);

    img {
      width: 100%;
      border-radius: 8px;
    }
  }
`;

export { FavPage, SearchResults };

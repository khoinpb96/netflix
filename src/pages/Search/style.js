import styled from "styled-components";
import { Pagination } from "@mui/material";

const SearchPageContainer = styled.section`
  padding: 68px 4% 3rem;
  min-height: 100vh;

  h1 {
    margin: 3rem 0;
    display: flex;
    justify-content: space-between;
  }
`;

const FilterContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 40%;
  background: black;
  right: 0;

  padding: 2rem;

  transition: 0.5s;
  transform: translateX(${(props) => (props.isOpened ? 0 : "100%")});
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

const OpenMenuButton = styled.i`
  cursor: pointer;
  font-size: 1.4rem;
`;

const Pagi = styled(Pagination)`
  ul {
    justify-content: flex-end;
    margin-top: 2rem;
  }
`;

export {
  SearchPageContainer,
  FilterContainer,
  SearchResults,
  Pagi,
  OpenMenuButton,
};

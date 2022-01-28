import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Search from "./Search";
import Noti from "./Noti";
import User from "./User";

const HeaderContainer = styled.header`
  padding: 0 4%;
  height: 68px;
  width: 100%;

  display: flex;
  align-items: center;
  background-color: transparent;
  transition: 0.3s;
  z-index: 2;

  position: fixed;

  &.active {
    background-color: black;
  }
  .right-nav {
    display: flex;
    gap: 8px;
  }
`;

export default function Header() {
  //Change navbar color when scrolling
  const [isScrolled, setIsScrolled] = useState(false);
  const checkScroll = () => {
    if (window.scrollY > 0) setIsScrolled(true);
    else setIsScrolled(false);
  };
  window.addEventListener("scroll", checkScroll);

  return (
    <HeaderContainer className={isScrolled ? "active " : "header"}>
      <Link to="/" style={{ marginRight: "auto" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="header logo"
          className="logo"
          style={{ width: 92.5 }}
        />
      </Link>
      <div className="right-nav">
        <Search />
        <Noti />
        <User />
      </div>
    </HeaderContainer>
  );
}

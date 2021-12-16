import { useState } from "react";

import "./Header.scss";
import Search from "./Search";
import Noti from "./Noti";
import User from "./User";
import Navbar from "./Navbar";

export default function Header() {
  //Change navbar color when scrolling
  const [isScrolled, setIsScrolled] = useState(false);
  const checkScroll = () => {
    if (window.scrollY > 0) setIsScrolled(true);
    else setIsScrolled(false);
  };
  window.addEventListener("scroll", checkScroll);

  return (
    <header className={isScrolled ? "active" : ""}>
      <Navbar />
      <div className="right-nav">
        <Search />
        <Noti />
        <User />
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar() {
  return (
    <>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="header logo"
          className="logo"
        />
      </Link>
      <ul className="left-nav">
        <li>
          <Link to="/browser">Home</Link>
        </li>
        <li>
          <Link to="/genre">TV Shows</Link>
        </li>
        <li>
          <Link to="/genre">Movies</Link>
        </li>
        <li>
          <Link to="/latest">New & Popular</Link>
        </li>
        <li>
          <Link to="/my-list">My List</Link>
        </li>
      </ul>
    </>
  );
}

import { useState } from "react";

import "./Footer.scss";
import MemberLinks from "./MemberLinks";
import Socials from "./Socials";

export default function Footer() {
  const randomCode = `${Math.floor(Math.random() * 899) + 100}-${
    Math.floor(Math.random() * 899) + 100
  }`;
  const [isShowed, setIsShowed] = useState(false);

  return (
    <footer>
      <Socials />
      <MemberLinks />
      <button
        className="user-code"
        onClick={() => {
          setIsShowed((prev) => !prev);
        }}
      >
        {isShowed ? randomCode : "Service Code"}
      </button>
      <div className="copyright">Clone by Khoinpb, based on Netflix</div>
    </footer>
  );
}

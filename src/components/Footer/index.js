import { useState } from "react";

import MemberLinks from "./MemberLinks";
import Socials from "./Socials";
import styled from "styled-components";

const FooterContainer = styled.footer`
  max-width: 980px;
  margin: 5rem auto 0;
  padding: 0 4%;
`;
const Usercode = styled.footer`
  background-color: transparent;
  padding: 0.5rem;
  margin-bottom: 20px;
  color: grey;
  border: solid 1px grey;
  cursor: pointer;
`;
const Copyright = styled.footer`
  font-size: 11px;
  padding-bottom: 1rem;
  color: grey;
`;

export default function Footer() {
  const randomCode = `${Math.floor(Math.random() * 899) + 100}-${
    Math.floor(Math.random() * 899) + 100
  }`;
  const [isShowed, setIsShowed] = useState(false);

  return (
    <FooterContainer>
      <Socials />
      <MemberLinks />
      <Usercode
        className="user-code"
        onClick={() => {
          setIsShowed((prev) => !prev);
        }}
      >
        {isShowed ? randomCode : "Service Code"}
      </Usercode>
      <Copyright className="copyright">
        Clone by Khoinpb, based on Netflix
      </Copyright>
    </FooterContainer>
  );
}

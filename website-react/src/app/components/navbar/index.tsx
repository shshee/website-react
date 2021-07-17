import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navitems";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
        flex
        flex-row
        max-w-screen-2xl
        w-full
        items-center
        lg: pl-12
        lg: pr-12
        justify-between
    `};
`;

const LogoContainer = styled.div``;

export function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
}

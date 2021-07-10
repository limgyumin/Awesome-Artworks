import React from "react";
import styled from "styled-components";
import logo from "assets/images/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContents>
        <HeaderLogo src={logo} alt={logo} />
      </HeaderContents>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.bgWhite};
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 4rem;
  -webkit-box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
`;

const HeaderContents = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.img`
  width: auto;
  height: 1.6rem;
`;

export default Header;

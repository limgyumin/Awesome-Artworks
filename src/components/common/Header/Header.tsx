import React from "react";
import styled from "styled-components";
import logo from "assets/images/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <HeaderLogo src={logo} alt={logo} />
      </HeaderWrap>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 4rem;
  background-color: ${({ theme }) => theme.colors.bgWhite};
  -webkit-box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
`;

const HeaderWrap = styled.div`
  @media screen and (max-width: 1697px) {
    width: 1328px;
  }

  @media screen and (max-width: 1361px) {
    width: 992px;
  }

  @media screen and (max-width: 1025px) {
    width: calc(100% - 1rem);
  }

  width: 1664px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.img`
  width: auto;
  height: 1.6rem;
`;

export default Header;

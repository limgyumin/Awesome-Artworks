import React from "react";
import styled from "styled-components";

const ArtworksLoading = () => {
  return (
    <ArtworksLoadingContainer>
      <ArtworksLoadingImageWrap>
        <ArtworksLoadingImage />
      </ArtworksLoadingImageWrap>
      <ArtworksLoadingTitle />
      <ArtworksLoadingUser>
        <ArtworkLoadingUserAvatar />
        <ArtworkLoadingUserName />
      </ArtworksLoadingUser>
    </ArtworksLoadingContainer>
  );
};

const ArtworksLoadingContainer = styled.div`
  @media screen and (max-width: 1025px) {
    width: calc(50% - 1rem);
  }

  width: 20rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ArtworksLoadingImageWrap = styled.div`
  position: relative;
  padding-top: 80%;
  cursor: pointer;
  border-radius: 0.4rem;
  overflow: hidden;
`;

const ArtworksLoadingImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.colors.ftllGray};
`;

const ArtworksLoadingTitle = styled.div`
  margin-top: 0.8rem;
  width: 80%;
  height: 1.025rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.ftllGray};
`;

const ArtworksLoadingUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const ArtworkLoadingUserAvatar = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${({ theme }) => theme.colors.ftllGray};
`;

const ArtworkLoadingUserName = styled.div`
  width: 40%;
  height: 0.825rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.ftllGray};
`;

export default ArtworksLoading;

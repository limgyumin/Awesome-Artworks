import React from "react";
import useFetchArtworks from "hooks/artwork/useFetchArtworks";
import styled from "styled-components";
import ArtworkItem from "./ArtworkItem";
import ArtworksLoading from "./ArtworksLoading";

const Artworks = () => {
  const { artworks, lastEl } = useFetchArtworks();

  return (
    <ArtworksContainer>
      <ArtworkWrap>
        <ArtworksList>
          {artworks.map((artwork, idx) =>
            artworks.length - 1 === idx ? (
              <ArtworkItem key={artwork.id} artwork={artwork} lastEl={lastEl} />
            ) : (
              <ArtworkItem key={artwork.id} artwork={artwork} />
            )
          )}
        </ArtworksList>
      </ArtworkWrap>
    </ArtworksContainer>
  );
};

const ArtworksContainer = styled.div`
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
  min-height: 100vh;
  margin: 0 auto;
  padding: 7rem 0 5rem;
`;

const ArtworkWrap = styled.div`
  flex: 1 1 0%;
`;

const ArtworksList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
`;

export default Artworks;

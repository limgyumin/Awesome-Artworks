import React from "react";
import useFetchArtworks from "hooks/artwork/useFetchArtworks";
import styled from "styled-components";
import ArtworkItem from "./ArtworkItem";

const Artworks = () => {
  const { artworks } = useFetchArtworks();

  return (
    <ArtworksWrapper>
      {artworks.map((artwork) => (
        <ArtworkItem key={artwork.id} artwork={artwork} />
      ))}
    </ArtworksWrapper>
  );
};

const ArtworksWrapper = styled.div`
  width: 1600px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 7rem 0 5rem;
  display: flex;
  flex-wrap: wrap;
`;

export default Artworks;

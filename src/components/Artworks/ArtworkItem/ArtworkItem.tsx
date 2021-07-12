import { GiphyImage } from "types/giphy.type";
import React from "react";
import styled from "styled-components";
import { ellipsis } from "styles/lib";
import useLoadImage from "hooks/util/useLoadImage";
import ArtworkItemUser from "./ArtworkItemUser";

type ArtworkItemProps = {
  artwork: GiphyImage;
  lastEl?: (node?: Element | null | undefined) => void;
};

const ArtworkItem: React.FC<ArtworkItemProps> = ({ artwork, lastEl }) => {
  const { isLoaded, handleLoadImage } = useLoadImage();

  const { title, user, images } = artwork;
  const { url } = images.original;

  return (
    <ArtworkItemContainer ref={lastEl}>
      <ArtworkItemImageWrap>
        <ArtworkItemImageSkeleton hidden={isLoaded} />
        <ArtworkItemImage
          src={url}
          alt={url}
          hidden={!isLoaded}
          onLoad={handleLoadImage}
        />
      </ArtworkItemImageWrap>
      <ArtworkItemTitle>{title}</ArtworkItemTitle>
      {user && <ArtworkItemUser user={user} />}
    </ArtworkItemContainer>
  );
};

const ArtworkItemContainer = styled.div`
  @media screen and (max-width: 1025px) {
    width: calc(50% - 1rem);
  }

  width: 20rem;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ArtworkItemImageWrap = styled.div`
  position: relative;
  padding-top: 80%;
  cursor: pointer;
  border-radius: 0.4rem;
  overflow: hidden;
`;

const ArtworkItemImageSkeleton = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.colors.ftllGray};
`;

const ArtworkItemImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  object-fit: cover;
`;

const ArtworkItemTitle = styled.h3`
  margin-top: 0.8rem;
  font-size: 1.025rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ftBlack};
  ${ellipsis(1)}
`;

export default ArtworkItem;

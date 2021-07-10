import { GiphyImage } from "types/giphy.type";
import React from "react";
import styled from "styled-components";
import { ellipsis } from "styles/lib";

type ArtworkItemProps = {
  artwork: GiphyImage;
};

const ArtworkItem: React.FC<ArtworkItemProps> = ({ artwork }) => {
  const { title, user, images } = artwork;
  const { url } = images.original;

  return (
    <ArtworkItemContainer>
      <ArtworkItemImageWrap>
        <ArtworkItemImage src={url} alt={url} />
      </ArtworkItemImageWrap>
      <ArtworkItemTitle>{title}</ArtworkItemTitle>
      {user && user.avatar_url && (
        <ArtworkItemUser>
          <ArtworkItemUserAvatar src={user.avatar_url} alt={user.avatar_url} />
          <ArtworkItemUserName>{user.username}</ArtworkItemUserName>
        </ArtworkItemUser>
      )}
    </ArtworkItemContainer>
  );
};

const ArtworkItemContainer = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ArtworkItemImageWrap = styled.div`
  position: relative;
  padding-top: 80%;
  cursor: pointer;
  border-radius: 0.4rem;
  overflow: hidden;
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

const ArtworkItemUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const ArtworkItemUserAvatar = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  margin-right: 0.5rem;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
`;

const ArtworkItemUserName = styled.p`
  font-size: 0.925rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.ftBlack};
`;

export default ArtworkItem;

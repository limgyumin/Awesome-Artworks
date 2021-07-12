import useLoadImage from "hooks/util/useLoadImage";
import React from "react";
import styled from "styled-components";
import { GiphyUser } from "types/giphy.type";

type ArtworkItemUserProps = {
  user: GiphyUser;
};

const ArtworkItemUser: React.FC<ArtworkItemUserProps> = ({ user }) => {
  const { isLoaded, handleLoadImage } = useLoadImage();
  const { avatar_url, username } = user;

  return (
    <ArtworkItemUserContainer>
      <ArtworkItemUserAvatarSkeleton hidden={isLoaded} />
      <ArtworkItemUserAvatar
        src={avatar_url}
        alt={avatar_url}
        hidden={!isLoaded}
        onLoad={handleLoadImage}
      />
      <ArtworkItemUserName>{username}</ArtworkItemUserName>
    </ArtworkItemUserContainer>
  );
};

const ArtworkItemUserContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const ArtworkItemUserAvatarSkeleton = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${({ theme }) => theme.colors.ftllGray};
`;

const ArtworkItemUserAvatar = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  margin-right: 0.5rem;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
`;

const ArtworkItemUserName = styled.p`
  font-size: 0.825rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.ftGray};
`;

export default ArtworkItemUser;

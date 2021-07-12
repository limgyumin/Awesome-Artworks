import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { useCallback, useEffect } from "react";
import { fetchGiphyImagesAsync, increasePage } from "modules/giphy";
import { FETCH_ARTWORKS_LIMIT } from "constants/artwork";
import { FetchGiphyImagesPayload } from "types/giphy.type";
import { useInView } from "react-intersection-observer";

const useFetchArtworks = () => {
  const { loading, error, data } = useSelector(
    (state: RootState) => state.giphy
  );
  const { page, total, artworks } = data;

  const dispatch = useDispatch();

  const [lastEl, isInView] = useInView({ threshold: 0 });

  const handleFetchArtworks = useCallback(() => {
    const payload: FetchGiphyImagesPayload = {
      page,
      limit: FETCH_ARTWORKS_LIMIT,
    };

    dispatch(fetchGiphyImagesAsync.request(payload));
  }, [page, dispatch]);

  const handleIncreasePage = useCallback(() => {
    const isArtworksLeft = artworks.length < total;

    if (isInView && !loading && isArtworksLeft) {
      dispatch(increasePage());
    }
  }, [isInView]);

  useEffect(() => {
    handleIncreasePage();
  }, [handleIncreasePage]);

  useEffect(() => {
    handleFetchArtworks();
  }, [handleFetchArtworks]);

  return {
    artworks,
    lastEl,
  };
};

export default useFetchArtworks;

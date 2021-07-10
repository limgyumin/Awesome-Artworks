import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { useCallback, useEffect } from "react";
import { fetchGiphyImagesAsync } from "modules/giphy";
import { FETCH_ARTWORKS_LIMIT } from "constants/artwork";
import { FetchGiphyImagesPayload } from "types/giphy.type";

const useFetchArtworks = () => {
  const { loading, error, data } = useSelector(
    (state: RootState) => state.giphy
  );
  const { page, total, artworks } = data;

  const dispatch = useDispatch();

  const handleFetchArtworks = useCallback(() => {
    const payload: FetchGiphyImagesPayload = {
      page,
      limit: FETCH_ARTWORKS_LIMIT,
    };

    dispatch(fetchGiphyImagesAsync.request(payload));
  }, [page, dispatch]);

  useEffect(() => {
    handleFetchArtworks();
  }, [handleFetchArtworks]);

  return {
    artworks,
  };
};

export default useFetchArtworks;

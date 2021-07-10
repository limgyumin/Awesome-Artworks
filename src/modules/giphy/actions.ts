import { GiphyImage } from "types/giphy.type";
import { AxiosError } from "axios";
import { createAction, createAsyncAction } from "typesafe-actions";

export const FETCH_GIPHY_IMAGES = "artwork/FETCH_GIPHY_IMAGES";
export const FETCH_GIPHY_IMAGES_SUCCESS = "artwork/FETCH_GIPHY_IMAGES_SUCCESS";
export const FETCH_GIPHY_IMAGES_FAILURE = "artwork/FETCH_GIPHY_IMAGES_FAILURE";

export const INCREASE_PAGE = "artwork/INCREASE_PAGE";
export const RESET_PAGE = "artwork/RESET_PAGE";

export const fetchGiphyImagesAsync = createAsyncAction(
  FETCH_GIPHY_IMAGES,
  FETCH_GIPHY_IMAGES_SUCCESS,
  FETCH_GIPHY_IMAGES_FAILURE
)<
  { page: number; limit: number },
  { total: number; artworks: GiphyImage[] },
  AxiosError
>();

export const increasePage = createAction(INCREASE_PAGE)();
export const resetPage = createAction(RESET_PAGE)();

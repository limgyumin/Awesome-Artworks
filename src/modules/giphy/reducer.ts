import { distinct, merge } from "lib/images";
import { createReducer } from "typesafe-actions";
import {
  FETCH_GIPHY_IMAGES,
  FETCH_GIPHY_IMAGES_SUCCESS,
  FETCH_GIPHY_IMAGES_FAILURE,
  INCREASE_PAGE,
  RESET_PAGE,
} from "./actions";
import { GiphyAction, GiphyState } from "./types";

const initialState: GiphyState = {
  loading: false,
  error: null,
  data: {
    page: 1,
    total: 0,
    artworks: [],
  },
};

const giphy = createReducer<GiphyState, GiphyAction>(initialState, {
  [FETCH_GIPHY_IMAGES]: (state) => {
    if (state.data.page === 1) {
      return {
        ...state,
        loading: true,
        error: null,
        data: {
          ...state.data,
          page: 1,
          total: 0,
          artworks: [],
        },
      };
    } else {
      return {
        ...state,
        loading: true,
        error: null,
        data: {
          ...state.data,
        },
      };
    }
  },
  [FETCH_GIPHY_IMAGES_SUCCESS]: (state, action) => {
    if (state.data.page === 1) {
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          ...state.data,
          ...action.payload,
          artworks: distinct(action.payload.artworks),
        },
      };
    } else {
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          ...state.data,
          ...action.payload,
          artworks: merge(state.data.artworks, action.payload.artworks),
        },
      };
    }
  },
  [FETCH_GIPHY_IMAGES_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
  [INCREASE_PAGE]: (state) => ({
    ...state,
    data: {
      ...state.data,
      page: state.data.page + 1,
    },
  }),
  [RESET_PAGE]: (state) => ({
    ...state,
    data: {
      ...state.data,
      page: 1,
    },
  }),
});

export default giphy;

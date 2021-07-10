import { GiphyImage } from "types/giphy.type";
import { AxiosError } from "axios";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type GiphyAction = ActionType<typeof actions>;

export type GiphyState = {
  loading: boolean;
  error: AxiosError | null;
  data: {
    page: number;
    total: number;
    artworks: GiphyImage[];
  };
};

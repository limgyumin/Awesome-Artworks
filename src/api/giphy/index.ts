import axios from "axios";
import * as config from "config/config.json";
import { FetchGiphyImagesPayload, GiphyResponse } from "./types";

export const fetchGiphyImages = async ({
  page,
  limit,
}: FetchGiphyImagesPayload): Promise<GiphyResponse> => {
  const { API_KEY, BASE_URL } = config.API;

  const offset = page * limit;

  const url = `${BASE_URL}/gifs/trending`;

  const params = {
    api_key: API_KEY,
    offset,
    limit,
  };

  const { data } = await axios.get<GiphyResponse>(url, { params });

  return data;
};

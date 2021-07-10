interface GiphyUser {
  avatar_url: string;
  username: string;
}

export interface GiphyImage {
  id: string;
  title: string;
  user?: GiphyUser;
  images: {
    original: {
      url: string;
    };
  };
}

export interface GiphyResponse {
  data: GiphyImage[];
  pagination: {
    total_count: number;
  };
}

export interface FetchGiphyImagesPayload {
  page: number;
  limit: number;
}

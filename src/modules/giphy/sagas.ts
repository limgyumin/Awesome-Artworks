import { call, put, takeEvery } from "redux-saga/effects";
import { fetchGiphyImages } from "api/giphy";
import { GiphyResponse } from "types/giphy.type";
import { fetchGiphyImagesAsync, FETCH_GIPHY_IMAGES } from "./actions";

function* fetchGiphyImagesSaga(
  action: ReturnType<typeof fetchGiphyImagesAsync.request>
) {
  try {
    const response: GiphyResponse = yield call(
      fetchGiphyImages,
      action.payload
    );

    const result = {
      total: response.pagination.total_count,
      artworks: response.data,
    };

    yield put(fetchGiphyImagesAsync.success(result));
  } catch (err) {
    yield put(fetchGiphyImagesAsync.failure(err));
  }
}

export function* giphySaga() {
  yield takeEvery(FETCH_GIPHY_IMAGES, fetchGiphyImagesSaga);
}

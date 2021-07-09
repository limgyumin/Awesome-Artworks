import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import giphy from "./giphy";
import { giphySaga } from "./giphy";

const rootReducer = combineReducers({
  giphy,
});

export function* rootSaga() {
  yield all([giphySaga()]);
}
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middlewares = [sagaMiddleware];

  const isProduction = process.env.NODE_ENV === "production";

  const enhancer = isProduction
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));

  return createStore(rootReducer, enhancer);
};

const store = configureStore();

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof rootReducer>;

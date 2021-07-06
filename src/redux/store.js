import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducers from "./reducers/reducers";

const store = createStore(reducers, applyMiddleware(logger));
store.subscribe(() => {});
export default store;

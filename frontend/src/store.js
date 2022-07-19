import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { userLoginReducer } from "./reducers/LoginReducers";

const middleware = [thunk];
const reducer = combineReducers({
  userLoginReducer: userLoginReducer,
});
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

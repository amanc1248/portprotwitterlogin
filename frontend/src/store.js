import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { userLoginReducer, userSignupReducer } from "./reducers/userReducers";

const middleware = [thunk];
const reducer = combineReducers({
  userLoginReducer: userLoginReducer,
  userSignupReducer: userSignupReducer,
});
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

const middleware = [thunk];
const reducer = combineReducers({
  // your reducers
});
const initialState = {
  adminLoginReducer: { adminLogin: null },
};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

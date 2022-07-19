import {
  USER__LOGIN,
  USER__LOGIN__FAILURE,
  USER__LOGIN__SUCCESS,
} from "../constants/loginconstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER__LOGIN:
      return { loading: true };
    case USER__LOGIN__SUCCESS:
      return { loading: false, userData: action.payload };
    case USER__LOGIN__FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

import {
  USER__LOGIN,
  USER__LOGIN__FAILURE,
  USER__LOGIN__SUCCESS,
  USER__SIGNUP,
  USER__SIGNUP__FAILURE,
  USER__SIGNUP__SUCCESS,
} from "../constants/userConstants";

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER__SIGNUP:
      return { loading: true };
    case USER__SIGNUP__SUCCESS:
      return { loading: false, userSignup: action.payload };
    case USER__SIGNUP__FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER__LOGIN:
      return { loading: true };
    case USER__LOGIN__SUCCESS:
      return { loading: false, userLogin: action.payload };
    case USER__LOGIN__FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

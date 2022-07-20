import {
  USER__LOGIN,
  USER__LOGIN__FAILURE,
  USER__LOGIN__SUCCESS,
  USER__SIGNUP,
  USER__SIGNUP__FAILURE,
  USER__SIGNUP__SUCCESS,
} from "../constants/userConstants";

const axios = require("axios");

// signup action
export const userSignupAction = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER__SIGNUP,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/users/signup`,
      { username, password },
      config
    );
    console.log(data);
    dispatch({
      type: USER__SIGNUP__SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER__SIGNUP__FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// login action
export const userLoginAction = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER__LOGIN,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/users/login`,
      { username, password },
      config
    );
    console.log(data);
    dispatch({
      type: USER__LOGIN__SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER__LOGIN__FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

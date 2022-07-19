import {
  USER__LOGIN,
  USER__LOGIN__FAILURE,
  USER__LOGIN__SUCCESS,
} from "../constants/loginconstants";

const axios = require("axios");

// login action
export const loginAction = (email, password) => async (dispatch) => {
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
      `/auth/twitter`,
      { email, password },
      config
    );
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

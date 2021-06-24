import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectDesignerToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const DESIGNER_LOGIN_SUCCESS = "DESIGNER_LOGIN_SUCCESS";
export const DESIGNER_TOKEN_STILL_VALID = "DESIGNER_TOKEN_STILL_VALID";
export const DESIGNER_LOG_OUT = "DESIGNER_LOG_OUT";

const designerloginSuccess = (designerWithToken) => {
  return {
    type: DESIGNER_LOGIN_SUCCESS,
    payload: designerWithToken,
  };
};

export const designertokenStillValid = (designerWithoutToken) => ({
  type: DESIGNER_TOKEN_STILL_VALID,
  payload: designerWithoutToken,
});

export const designerlogOut = () => ({ type: DESIGNER_LOG_OUT });

export const designersignUp = (name, email, password, adress, bankaccount) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/designer/signup`, {
        name,
        email,
        password,
        adress,
        bankaccount,
      });
      console.log("response", response);
      dispatch(designerloginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const designerlogin = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/designer/login`, {
        email,
        password,
      });

      dispatch(designerloginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getDesignerWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectDesignerToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/designer/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(designertokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(designerlogOut());
      dispatch(appDoneLoading());
    }
  };
};

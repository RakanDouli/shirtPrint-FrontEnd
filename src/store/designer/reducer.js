import {
  DESIGNER_LOG_OUT,
  DESIGNER_LOGIN_SUCCESS,
  DESIGNER_TOKEN_STILL_VALID,
} from "./actions";

const initialState = {
  token: localStorage.getItem("designerToken"),
  name: null,
  email: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DESIGNER_LOGIN_SUCCESS:
      localStorage.setItem("designerToken", action.payload.token);
      return { ...state, ...action.payload };

    case DESIGNER_LOG_OUT:
      localStorage.removeItem("designerToken");
      return { ...initialState, token: null };

    case DESIGNER_TOKEN_STILL_VALID:
      // console.log("action.payload", action.payload, state);
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export default reducer;

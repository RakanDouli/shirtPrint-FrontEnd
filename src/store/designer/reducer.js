import {
  DESIGNER_LOG_OUT,
  DESIGNER_LOGIN_SUCCESS,
  DESIGNER_TOKEN_STILL_VALID,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DESIGNER_LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case DESIGNER_LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case DESIGNER_TOKEN_STILL_VALID:
      console.log("action.payload", action.payload);
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export default reducer;

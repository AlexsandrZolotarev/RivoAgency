import { usersApi } from "../api/api";
import { setCookie } from "../cookie/cookie";
const SET_USER = "SET_USER";
const SET_NAME = "SET_NAME";

const linkImageUser =
  "https://alexsandrzolotarev.github.io/RivoAgency/src/assets/NotFound/notFound.webp";
let initialState = {
  user: null,
  userImage : linkImageUser,
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      setCookie("userId",action.data.id, {secure: true, 'max-age': 3600})
      return { ...state, user: action.data };
    case SET_NAME:
      return { ...state, user: {
        name:action.username
      }};
    default:
      return state;
  }
};
export const getUserThunk = (userId) => {
  return (dispatch) => {
    usersApi.getUser(userId).then((data) => {
      dispatch(setUser(data));
    });
  };
};

export const setUserThunk = (userData) => {
  return (dispatch) => {
    usersApi.setUser(userData).then((data) => {
      dispatch(setUser(data));
    });
  };
};

export const setAuthUser = (data) => ({ type: SET_USER, data });
export const setUser = (data) => ({ type: SET_USER, data });
export const setName = (username) => ({ type: SET_NAME, username });

export default authReducer;

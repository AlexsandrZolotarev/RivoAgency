const SET_USER = "SET_USER";
const linkImageUser = "https://alexsandrzolotarev.github.io/RivoAgency/src/assets/NotFound/notFound.webp";
let initialState = {
  user:null,
  imgUser: JSON.parse(localStorage.user).img || linkImageUser,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.user = JSON.stringify(action.data, null, 2);
      return { ...state, user:action.data};
    default:
      return state;
  }
};

export const setAuthUser = (data) => ({type:SET_USER,data});
export default authReducer;

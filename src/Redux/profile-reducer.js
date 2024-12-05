const UPDATE_TEXT = "UPDATE_TEXT";
const CHANGE_PROFILE = "CHANGE_PROFILE";
let initialState = {
  profile: {
    name: JSON.parse(localStorage.user).name,
    email: JSON.parse(localStorage.user).email,
    status: JSON.parse(localStorage.user).status,
    id: JSON.parse(localStorage.user).id,
    img: "",
  },
};
const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case UPDATE_TEXT: {
      stateCopy.profile = { ...state.profile };
      stateCopy.profile[action.newInput.target.name] =
        action.newInput.target.value;
      return stateCopy;
    }
    case CHANGE_PROFILE: {
      if (stateCopy.profile.img === "")
        stateCopy.profile.img = JSON.parse(localStorage.user).img;
      localStorage.user = JSON.stringify(stateCopy.profile, null, 2);
      return stateCopy;
    }
    default:
      return state;
  }
};
export const updateText = (input) => ({
  type: UPDATE_TEXT,
  newInput: input,
});
export const changeProfile = () => ({
  type: CHANGE_PROFILE,
});

export default profileReducer;

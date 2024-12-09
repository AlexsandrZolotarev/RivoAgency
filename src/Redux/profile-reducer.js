const UPDATE_TEXT = "UPDATE_TEXT";
const CHANGE_PROFILE = "CHANGE_PROFILE";
const ADD_PROFILE = "ADD_PROFILE";
const UPDATE_PHONE = "UPDATE_PHONE";
let initialState = {
  profile: {
    email: "",
    id: "",
    img: "",
    name: "",
    password:"",
    registrationDate:"",
    BirthDate:"",
    phone:"",
    status: "",  
  },
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE: {
      state.profile = JSON.parse(localStorage.user);
      return {...state};
    }
    case UPDATE_PHONE: {
      state.profile.phone = action.value;
      return  {...state}
    }
    case UPDATE_TEXT: {
      state.profile = { ...state.profile };
      state.profile[action.newInput.target.name] =
      action.newInput.target.value;
      return  {...state};
    }
    case CHANGE_PROFILE: {
      localStorage.user = JSON.stringify(state.profile, null, 2);
      return {...state,
        profile: 
        {
          img: (state.profile.img === "") ? JSON.parse(localStorage.user).img : "",
          ...state.profile
        }
       };
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
export const addProfile = () => ({
  type: ADD_PROFILE,
});
export const updatePhone = (value) => ({
  type: UPDATE_PHONE,
  value: value,
})

export default profileReducer;

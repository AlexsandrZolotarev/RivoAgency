

export const setUser = (props) => {
  localStorage.user = JSON.stringify(props);
};
export const checkingForRegistration = () => {
  return localStorage.user;
};


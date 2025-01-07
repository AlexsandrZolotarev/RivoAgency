export const setCookie = (name, value, options = {}) => {
  options = {
    path: "/",
    ...options,
  };
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  let updateCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updateCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updateCookie += "=" + optionValue;
    }
  }
  document.cookie = updateCookie;
};
export const getCookie = (name)=> {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : null;
}
export const deleteCookie = (name) => {
  setCookie(name, "", {
    'max-age': -1
  })
}
export const checkingForRegistration = () => {
  return getCookie("userId");
};
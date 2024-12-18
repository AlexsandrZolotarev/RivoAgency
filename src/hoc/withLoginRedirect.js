import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "../cookie/cookie";

export const withLoginRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!getCookie("userId")) {
        return <Navigate to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }
  return RedirectComponent;
};
export const withProfileRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!getCookie("userId")) {
        return <Navigate to="/Profile" />;
      }
      return <Component {...this.props} />;
    }
  }
  return RedirectComponent;
};

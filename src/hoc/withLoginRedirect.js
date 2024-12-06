import React from "react";
import { Navigate } from "react-router-dom";

export const withLoginRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!localStorage.length) {
        return <Navigate to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }
  return RedirectComponent;
};

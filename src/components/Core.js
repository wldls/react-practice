import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { setToken } from "api/index";

const Core = ({ location }) => {
  useEffect(() => {
    const token = localStorage.getItem("trelloToken");

    if (location.pathname === "/") {
      localStorage.setItem("layoutTheme", "home");
    }

    if (!!token) {
      setToken(token);
    }
    return () => {
      if (!!token) {
        setToken(token);
      }
    };
  });
  return null;
};

export default withRouter(Core);

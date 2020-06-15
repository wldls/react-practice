import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ authenticated, children, ...rest }) => {
  const auth = localStorage.getItem("trelloToken");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default AuthRoute;

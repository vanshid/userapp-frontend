import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return true ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}

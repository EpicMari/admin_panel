import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Dashboard from "../views/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.dashboard} component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import HeaderTemplate from "../templates/HeaderTemplate";
import Dashboard from "../views/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <HeaderTemplate>
        <Switch>
          <Route exact path={routes.dashboard} component={Dashboard} />
        </Switch>
      </HeaderTemplate>
    </BrowserRouter>
  );
};

export default Router;

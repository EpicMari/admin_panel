import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import HeaderTemplate from "../templates/HeaderTemplate";
import Dashboard from "../views/Dashboard";
import Orders from "../views/Orders";
import Messages from "../views/Messages";
import Trash from "../views/Trash";
import HelpSupport from "../views/HelpSupport";
import Settings from "../views/Settings";
import Login from "../views/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <HeaderTemplate>
        <Switch>
          <Route exact path={routes.dashboard} component={Dashboard} />
          <Route path={routes.orders} component={Orders} />
          <Route path={routes.messages} component={Messages} />
          <Route path={routes.trash} component={Trash} />
          <Route path={routes.help} component={HelpSupport} />
          <Route path={routes.settings} component={Settings} />
          <Route path={routes.login} component={Login} />
        </Switch>
      </HeaderTemplate>
    </BrowserRouter>
  );
};

export default Router;

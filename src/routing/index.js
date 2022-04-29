import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../routes";
import Dashboard from "../views/Dashboard";
import Orders from "../views/Orders";
import Messages from "../views/Messages";
import Trash from "../views/Trash";
import Settings from "../views/Settings";
import LoggedRoute from "./LoggedRoute";
import AuthContext from "../context";
import Login from "../views/Login/index";
import Register from "../views/Register/index";

const Router = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        {typeof currentUser === "object" && <Redirect to={routes.dashboard} />}
        <Switch>
          <LoggedRoute
            exact
            path={routes.dashboard}
            component={Dashboard}
            isLog={currentUser}
          />
          <LoggedRoute
            path={routes.orders}
            component={Orders}
            isLog={currentUser}
          />
          <LoggedRoute
            path={routes.messages}
            component={Messages}
            isLog={currentUser}
          />
          <LoggedRoute
            path={routes.trash}
            component={Trash}
            isLog={currentUser}
          />
          <LoggedRoute
            path={routes.settings}
            component={Settings}
            isLog={currentUser}
          />
          <Route path={routes.login} component={Login} />
          <Route path={routes.register} component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;

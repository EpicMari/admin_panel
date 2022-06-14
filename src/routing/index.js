import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../routes";
import Dashboard from "../views/Dashboard";
import Messages from "../views/Messages";
import LoggedRoute from "./LoggedRoute";
import AuthContext from "../context";
import Login from "../views/Login";
import Register from "../views/Register";
import Orders from "../views/Orders";
import Trash from "../views/Trash";

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
          <Route path={routes.login} component={Login} />
          <Route path={routes.register} component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { routes } from '../routes';
import NavigationTemplate from '../templates/NavigationTemplate';

const LoggedRoute = ({ component: Component, ...rest }) => {
  return (
    <NavigationTemplate>
      <Route
        {...rest}
        render={(props) =>
          typeof rest.isLog === 'object' ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: routes.login }} />
          )
        }
      />
    </NavigationTemplate>
  );
};

export default LoggedRoute;

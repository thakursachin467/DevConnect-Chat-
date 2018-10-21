import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, isAuthanticated, ...rest }) => (<Route
  {...rest}
  render={props =>
    isAuthanticated ? (<Component {...props} />) : <Redirect to="/auth" />

  }
></Route>)



export default PrivateRoute;
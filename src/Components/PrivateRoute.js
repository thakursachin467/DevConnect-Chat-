import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, isAuthanticated, currentUser, ...rest }) => (<Route
  {...rest}
  render={props =>
    isAuthanticated ? (<Component {...props} currentUser={currentUser} />) : <Redirect to="/auth" />

  }
></Route>)



export default PrivateRoute;
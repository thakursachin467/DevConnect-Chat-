import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, isAuthanticated, currentUser, notify, ...rest }) => (<Route
  {...rest}
  render={props =>
    isAuthanticated ? (<Component {...props} notify={notify} currentUser={currentUser} />) : <Redirect to="/auth" />

  }
></Route>)



export default PrivateRoute;
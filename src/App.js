import React, { Component } from 'react';
import Content from './Components/Content';
import Auth from './Components/Auth/Auth';
import GitLogin from './Components/Auth/GitLogin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import PrivateRoute from './Components/PrivateRoute';
import HomeTemp from './Components/HomeTemp';
import Logout from './Components/Logout';
import InviteHandler from './Containers/InviteLink';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: "https://21d5dbfe8d0a4438a56a24d340f4a113@sentry.io/1411859"
 });

if (localStorage.authtoken) {
  const userData = jwt_decode(localStorage.authtoken);

  /**
   * ? check for expired user
   */
  const currentTime = Date.now() / 1000;
  if (userData.exp < currentTime) {
    localStorage.removeItem('authtoken');
    /**
     * ? redirect to login
     */
    window.location.href = "/auth";
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorize: false,
      currentUser: ''
    }
  }
  notify = (msg) => (toast(msg), {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
  componentWillMount() {
    if (localStorage.authtoken) {
      const userData = jwt_decode(localStorage.authtoken);
      this.setState({ authorize: true, currentUser: userData.id })
      /**
       * ? check for expired user
       */
      const currentTime = Date.now() / 1000;
      if (userData.exp < currentTime) {

      }
    }
  }


  render() {

    return (
      <BrowserRouter>
        <React.Fragment>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
          />
          <Switch>
            <Route exact path='/' component={HomeTemp} />
            <Route exact path='/auth' component={Auth} />
            <Route exact path='/auth/github' component={GitLogin} />
            <PrivateRoute exact path='/team' isAuthanticated={this.state.authorize} currentUser={this.state.currentUser} component={Content} notify={this.notify} />
            <PrivateRoute exact path='/team/:id' isAuthanticated={this.state.authorize} currentUser={this.state.currentUser} component={Content} notify={this.notify} />
            <PrivateRoute exact path='/invite/:link' isAuthanticated={this.state.authorize} currentUser={this.state.currentUser} component={InviteHandler} />
            <PrivateRoute exact path='/logout' isAuthanticated={this.state.authorize} component={Logout} />
          </Switch>
        </React.Fragment>


      </BrowserRouter>



    );
  }
}

export default App;

import React, { Component } from 'react';
import Content from './Components/Content';
import Auth from './Components/Auth/Auth';
import GitLogin from './Components/Auth/GitLogin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import PrivateRoute from './Components/PrivateRoute';
import './App.css';


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
        <Switch>
          <Route exact path='/auth' component={Auth} />
          <Route exact path='/auth/github' component={GitLogin} />
          <Route exact path='/team' render={props => <Content currentUser={this.state.currentUser} />} />
          { /*<PrivateRoute exact path='/team' isAuthanticated={this.state.authorize} currentUser={this.state.currentUser} component={Content} /> */}
        </Switch>

      </BrowserRouter>



    );
  }
}

export default App;

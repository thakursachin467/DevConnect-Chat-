import React, { Component } from 'react';
import Content from './Components/Content';
import Login from './Components/Auth/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/auth' component={Login} />
          <Route exact path='/team' component={Content} />
        </Switch>

      </BrowserRouter>



    );
  }
}

export default App;

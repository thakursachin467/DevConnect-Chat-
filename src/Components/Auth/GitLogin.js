import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import Loading from '../../Common/Loader';
import * as Sentry from '@sentry/browser';

class GitLogin extends Component {
  state = {
    loading: true,
    error: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  componentDidMount() {
    axios.get(`https://ancient-temple-53657.herokuapp.com/api/auth/github${this.props.location.search}`)
      .then((res) => {
        const { token } = res.data;
        //set token local storage
        localStorage.setItem("authtoken", token);
        this.setState({ loading: false })
      })
      .catch((err) => {
        Sentry.captureException(err);
      })
  }
  render() {
    let content;
    if (this.state.loading) {
      content = <Loading />;

    } else {
      content = <Redirect to='/team' />
    }
    return (
      <div>
        {content}
      </div>

    )
  }
}


export default GitLogin;
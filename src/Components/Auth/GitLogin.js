import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";
class GitLogin extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    axios.get(`/api/auth/github${this.props.location.search}`)
      .then((res) => {
        const { token } = res.data;
        //set token local storage
        localStorage.setItem("authtoken", token);
        this.setState({ loading: false })
      })
      .catch((err) => {
        console.log(err.data);
      })
  }
  render() {
    let content;
    if (this.state.loading) {
      content = <div>Loading</div>;

    } else {
      content = <Redirect to='/auth' />
    }
    return (
      <div>
        {content}
      </div>

    )
  }
}


export default GitLogin;
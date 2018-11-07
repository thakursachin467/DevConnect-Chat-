import React, { Component } from 'react'
import Loader from '../Common/Loading';
import { Redirect } from 'react-router-dom';
class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    localStorage.removeItem('authtoken');
    this.setState({ loading: false });
  }
  render() {

    return (
      this.state.loading ? <Loader /> : <Redirect to='/' />
    )
  }
}

export default Logout;

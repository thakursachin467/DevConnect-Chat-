import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Loader from '../Common/Loader';

class InviteHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      teamId: ''
    }
  }
  componentDidMount() {
    const teamId = this.props.match.params.link;
    const { currentUser } = this.props;
    console.log(this.props);
    axios.post(`https://ancient-temple-53657.herokuapp.com/api/room/add/${teamId}`, {

      user: currentUser

    })
      .then((res) => {
        console.log(res);
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
      })

  }
  render() {
    const { loading } = this.state;
    let content;
    if (loading) {
      content = (<Loader />)
    } else {
      content = (<Redirect to={`/team/${this.state.teamId}`} />)
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}

export default InviteHandler;
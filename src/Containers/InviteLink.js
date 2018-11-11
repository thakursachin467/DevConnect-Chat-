import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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
    console.log(this.props.match.params.link);
    setTimeout(() => {
      this.setState({ loading: false, teamId: teamId })
    }, 5000)
  }
  render() {
    const { loading } = this.state;
    let content;
    if (loading) {
      content = (<div>Loading...............</div>)
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
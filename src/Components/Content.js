import React, { Component } from 'react'
import Message from '../Containers/Message';
import Sidebar from '../Containers/Sidebar';
import User from '../Containers/Users';
import Header from '../Containers/Hearder';
import Input from '../Containers/InputBox';
import { ChatManager, TokenProvider } from '@pusher/chatkit'

class Content extends Component {
  state = {
    currentUser: {}
  }
  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: 'v1:us1:3dd62a71-d604-4985-bbb9-5965ea8bb128',
      userId: this.props.currentUser,
      tokenProvider: new TokenProvider({ url: '/api/auth/authenticate' })
    })
    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser: currentUser })
        console.log('Successful connection', currentUser)
      })
      .catch(err => {
        console.log('Error on connection', err)
      })
  }

  render() {
    return (
      <div className='app-layout'>
        <User />
        <Sidebar currentUser={this.state.currentUser} />
        <Header
          teamName='Team Name goes here(currently active)'
        />
        <Message />
        <Input />
      </div>
    )
  }
}


export default Content;

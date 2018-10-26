import React, { Component } from 'react'
import Message from '../Containers/Message';
import Sidebar from '../Containers/Sidebar';
import User from '../Containers/Users';
import Header from '../Containers/Hearder';
import Input from '../Containers/InputBox';
import { ChatManager, TokenProvider } from '@pusher/chatkit'
import _ from 'lodash';
import Loader from '../Common/Loading';

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {},
      Messages: [],
      rooms: [],
      hasRooms: false,
      placeHolder: ['Grab Your Coffee', 'Compiling your code', 'Fixing errors', 'Loading your content', 'Debugging your code', 'Logging the console', 'Configuration files', 'Committing your changes', 'Connecting to the community', 'Brewing some coffee', 'Installing caffeine'],
    }

  }
  updateRoomList() {
    this.setState({ rooms: [...this.state.currentUser.rooms] });
  }
  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: 'v1:us1:3dd62a71-d604-4985-bbb9-5965ea8bb128',
      userId: this.props.currentUser,
      tokenProvider: new TokenProvider({ url: '/api/auth/authenticate' })
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser: currentUser })
        currentUser.subscribeToRoom({
          roomId: 19371676,
          hooks: {
            onNewMessage: message => {
              this.setState({
                Messages: [...this.state.Messages, message]
              })
            }
          }
        })
        this.setState({ rooms: [...currentUser.rooms], hasRooms: true })

        console.log('Successful connection', currentUser.rooms)
      })
      .catch(err => {
        console.log('Error on connection', err)
      })
  }

  render() {
    if (!this.state.hasRooms) {
      var x = Math.floor((Math.random() * 11) + 1);
      const placeHolder = this.state.placeHolder[x];
      return (
        <Loader placeHolder={placeHolder} />

      )
    }
    let currenTeam;
    const { rooms, hasRooms } = this.state;
    if (this.props.match.params.id == undefined) {
      currenTeam = rooms[0];
    } else {
      if (hasRooms) {
        const index = _.findIndex(rooms, room => room.id == this.props.match.params.id);
        currenTeam = rooms[index];
      }
    }

    return (
      <div className='app-layout'>
        <User />
        <Sidebar
          currentUser={this.state.currentUser}
          rooms={this.state.rooms}
          updateRoomList={this.updateRoomList.bind(this)}
        />
        <Header
          team={currenTeam}
        />
        <Message
          message={this.state.Messages}
          User={this.props.currentUser} />
        <Input
          user={this.props.currentUser}
          currentUser={this.state.currentUser}
          roomId={currenTeam.id}
        />
      </div>
    )
  }
}


export default Content;

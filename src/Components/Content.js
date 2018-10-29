import React, { Component } from 'react'
import Message from '../Containers/Message';
import Sidebar from '../Containers/Sidebar';
import User from '../Containers/Users';
import Header from '../Containers/Hearder';
import Input from '../Containers/InputBox';
import { ChatManager, TokenProvider } from '@pusher/chatkit'
import _ from 'lodash';
import Loader from '../Common/Loading';
import Placeholder from '../img/placeholder.png';
import SettingModal from '../Common/SettingModal';
import TeamModal from '../Common/TeamModal';
class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {},
      Messages: [],
      rooms: [],
      hasRooms: false,
      placeHolder: ['Grab Your Coffee', 'Compiling your code', 'Fixing errors', 'Loading your content', 'Debugging your code', 'Logging the console', 'Configuration files', 'Committing your changes', 'Connecting to the community', 'Brewing some coffee', 'Installing caffeine'],
      currentRoom: {},
      openSettingModal: false,
      openAddTeamModal: false
    }
    this.subscribeToRoom = this.subscribeToRoom.bind(this);
    this.getRooms = this.getPublicRooms.bind(this);
    this.initialLoad = this.initialLoad.bind(this);
    this.modalOpenSetting = this.modalOpenSetting.bind(this);
    this.openAddTeamModal = this.openAddTeamModal.bind(this);
    this.createTeam = this.createTeam.bind(this);
  }
  updateRoomList() {
    this.setState({ rooms: [...this.state.currentUser.rooms] });
  }

  initialLoad() {
    let currenTeam;
    const { rooms, hasRooms } = this.state;
    if (this.props.match.params.id == undefined) {
      return false;
    } else {
      if (hasRooms) {
        const index = _.findIndex(rooms, room => room.id == this.props.match.params.id);
        if (index == -1) {
          return window.location.href('/team');
        }
        currenTeam = rooms[index];
        this.setState({ currentRoom: currenTeam });
        return true;

      }
    }
    return false;

  }

  createTeam(teamName) {
    console.log(teamName);
    const { currentUser } = this.state;
    currentUser.createRoom({
      name: teamName,
      private: true,
    }).then(room => {
      console.log(`Created room called ${currentUser.rooms}`)
      this.updateRoomList();
    })
      .catch(err => {
        console.log(`Error creating room ${err}`)
      })

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
        this.currentUser = currentUser;
        this.setState({ rooms: [...currentUser.rooms], hasRooms: true, currentUser: currentUser })
        if (this.initialLoad()) {
          this.subscribeToRoom(this.state.currentRoom.id, this.state.currentRoom);
        }
        this.getPublicRooms()
        console.log('Successful connection', currentUser.rooms)
      })
      .catch(err => {
        console.log('Error on connection', err)
      })
  }


  modalOpenSetting() {
    this.setState({ openSettingModal: !this.state.openSettingModal });

  }

  openAddTeamModal() {
    this.setState({ openAddTeamModal: !this.state.openAddTeamModal });
  }

  onJoinTeamClick() {
    console.log('object');

  }

  getPublicRooms() {
    this.currentUser.getJoinableRooms()
      .then(rooms => {

      })
      .catch(err => {
        console.log(`Error getting joinable rooms: ${err}`)
      })
  }

  subscribeToRoom(roomId, roomName) {
    this.setState({ Messages: [], currentRoom: roomName });
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onNewMessage: message => {
          this.setState({
            Messages: [...this.state.Messages, message]
          })
        }
      }
    })
  }

  render() {
    const { currentRoom, currentUser } = this.state;
    if (!this.state.hasRooms) {
      var x = Math.floor((Math.random() * 11) + 1);
      const placeHolder = this.state.placeHolder[x];
      return (
        <Loader placeHolder={placeHolder} />

      )
    }


    return (
      <div className='app-layout'>
        <TeamModal
          createTeam={this.createTeam}
          open={this.state.openAddTeamModal}
          close={this.openAddTeamModal}
        />
        <SettingModal
          open={this.state.openSettingModal}
          close={this.modalOpenSetting}
        />
        {
          currentRoom.name ?
            <React.Fragment>
              <User
                users={currentRoom.users}
                currentUser={currentUser}

              />
              <Header
                team={currentRoom}
              />
              <Message
                message={this.state.Messages}
                User={this.props.currentUser} />
              {
                currentRoom ? <Input
                  user={this.props.currentUser}
                  currentUser={this.state.currentUser}
                  roomId={currentRoom.id}
                /> : null
              }
            </React.Fragment>

            : (
              <div>
                <img src={Placeholder} height='250px' width='250px' style={{ marginLeft: '50%', marginRight: 'auto', display: 'block', marginTop: '24%' }} />
                <h3 style={{ marginLeft: '60%', marginRight: 'auto', display: 'block', marginTop: '2%' }} >Or</h3>
                <button
                  className='joinTeamBtn'
                  onClick={this.onJoinTeamClick.bind(this)}
                >
                  Join a team
                </button>
              </div>
            )
        }

        {
          this.state.currentUser.name ? (
            <Sidebar
              subscribeToRoom={this.subscribeToRoom}
              currentUser={this.state.currentUser}
              rooms={this.state.rooms}
              updateRoomList={this.updateRoomList.bind(this)}
              modalOpenSetting={this.modalOpenSetting}
              openAddTeamModal={this.openAddTeamModal}
            />
          ) : (
              <div>Please join a team</div>
            )
        }




      </div>
    )
  }
}


export default Content;

import React, { Component } from 'react'
import Message from '../Containers/Message';
import Sidebar from '../Containers/Sidebar';
import User from '../Containers/Users';
import Header from '../Containers/Hearder';
import Input from '../Containers/InputBox';
import axios from 'axios';
import { ChatManager, TokenProvider } from '@pusher/chatkit';
import _ from 'lodash';
import Loader from '../Common/Loading';
import Placeholder from '../img/placeholder.png';
import SettingModal from '../Common/InviteForm';
import TeamModal from '../Common/TeamModal';
import DeleteModal from '../Common/DeleteModal';
import Modal from '../Common/Modal';
class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {},
      Messages: [],
      rooms: [],
      showGithubData: false,
      hasRooms: false,
      placeHolder: ['Grab Your Coffee', 'Compiling your code', 'Fixing errors', 'Loading your content', 'Debugging your code', 'Logging the console', 'Configuration files', 'Committing your changes', 'Connecting to the community', 'Brewing some coffee', 'Installing caffeine'],
      currentRoom: {},
      openSettingModal: false,
      openAddTeamModal: false,
      inviteLink: '',
      currentId: '',
      deleteModal: false,
      showRemoveUsers: false,
      ModalData: {},
      userRepos: {},
      showRepos: false
    }
    this.showRemoveUsers = this.showRemoveUsers.bind(this);
    this.subscribeToRoom = this.subscribeToRoom.bind(this);
    this.getRooms = this.getPublicRooms.bind(this);
    this.initialLoad = this.initialLoad.bind(this);
    this.modalOpenSetting = this.modalOpenSetting.bind(this);
    this.openAddTeamModal = this.openAddTeamModal.bind(this);
    this.createTeam = this.createTeam.bind(this);
    this.joinTeam = this.joinTeam.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.toggleGithubData = this.toggleGithubData.bind(this);
    this.UserLeaveTeam = this.UserLeaveTeam.bind(this);
    this.fetchMessage = this.fetchMessage.bind(this);
    this.joinRoomUsingLink = this.joinRoomUsingLink.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
    this.removeUser = this.removeUser.bind(this);

  }

  showRemoveUsers() {
    let Data;
    const { currentRoom, showRemoveUsers } = this.state;
    if (showRemoveUsers) {
      Data = {};
    } else {
      Data = {
        Name: 'All Users in the team',
        items: currentRoom.users,
        removeUser: this.removeUser
      }
    }

    this.setState({ ModalData: { Data }, showRemoveUsers: !this.state.showRemoveUsers })
  }

  removeUser(userId) {
    const { currentRoom } = this.state;
    axios.post(`https://ancient-temple-53657.herokuapp.com/api/room/removeUser/${currentRoom.id}`, {
      userId: userId
    })
      .then((res) => {
        this.showRemoveUsers();
        this.props.notify('User Succesfully Deleted!!!');
      })
      .catch((err) => {
        this.showRemoveUsers();
      })
  }

  fetchReps = () => {
    const { currentUser } = this.state;
    const id = currentUser.id;
    axios.get(`http://localhost:5000/api/githubs/all/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  toggleGithubData() {
    this.setState({ showGithubData: !this.state.showGithubData });
  }

  deleteRoomModal = () => {
    this.setState({ deleteModal: !this.state.deleteModal });
  }

  deleteRoom() {
    this.setState({ deleteModal: !this.state.deleteModal });
    const { currentRoom, currentUser } = this.state;
    console.log(currentRoom.id);
    if (currentRoom.createdByUserId === currentUser.id) {
      axios.post(`https://ancient-temple-53657.herokuapp.com/api/room/delete/${currentRoom.id}`)
        .then((res) => {
          if (res.data.sucess === true) {
            this.props.notify('Room successfully Deleted!!!');
            this.setState({ currentRoom: {} });
            this.props.history.push({
              pathname: '/team'
            });
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }

  }

  updateRoomList() {
    this.setState({ rooms: [...this.state.currentUser.rooms] });
  }

  UserLeaveTeam(teamId) {
    const { currentUser, currentRoom } = this.state;
    currentUser.leaveRoom({ roomId: Number(teamId) })
      .then(room => {
        this.props.notify(`You left ${currentRoom.name}`);
        this.updateRoomList();
        this.setState({ currentRoom: {} });


      })
      .catch(err => {
        console.log(`Error leaving room ${teamId}: ${err}`)
      })
  }

  sendMessage(message) {
    const { currentUser, currentRoom } = this.state;
    currentUser.sendMessage({
      text: message,
      roomId: currentRoom.id
    })
      .then(messageId => {
        this.setState({ message: '' })
        console.log(`Added message to ${currentRoom.name}`)
      })
      .catch(err => {
        console.log(`Error adding message to ${currentRoom.name}: ${err}`)
      })
  }
  joinRoomUsingLink(teamId) {
    let currenTeam;
    const { rooms } = this.state;
    const index = _.findIndex(rooms, room => room.id == teamId);
    currenTeam = rooms[index];
    this.setState({ currentRoom: currenTeam });
  }
  joinTeam(teamId) {
    const { currentUser } = this.state;
    const link = teamId.replace('https://admiring-snyder-dead31.netlify.com/invite/', '');
    axios.post(`https://ancient-temple-53657.herokuapp.com/api/room/add/${link}`, {

      user: currentUser.id

    })
      .then((res) => {
        console.log(res.data);
        this.updateRoomList();
        this.joinRoomUsingLink(res.data.team);

      })
      .catch((err) => {
        console.log(err);
      })


  }

  initialLoad() {
    this.props.notify(`Welcome back ${this.state.currentUser.name}`);
    let currenTeam;
    console.log(this.props.match.params.id)
    const { rooms, hasRooms } = this.state;
    if (this.props.match.params.id == undefined) {
      return false;
    } else {
      if (hasRooms) {
        const index = _.findIndex(rooms, room => room.id == this.props.match.params.id);
        if (index == -1) {
          return this.props.history.push({
            pathname: '/team'
          });
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
      this.props.notify(`Created room called ${room.name}`);
      this.updateRoomList();
    })
      .catch(err => {
        console.log(`Error creating room ${err}`)
      })

  }

  componentDidMount() {
    this.props.notify(`Successfully Logged in as ${this.props.currentUser}`);
    const chatManager = new ChatManager({
      instanceLocator: 'v1:us1:3dd62a71-d604-4985-bbb9-5965ea8bb128',
      userId: this.props.currentUser,
      tokenProvider: new TokenProvider({ url: 'http://localhost:5000/api/auth/authenticate' })
    });

    chatManager
      .connect({
        onAddedToRoom: room => {
          this.props.notify(`You have been added to ${room.name}`);
          this.updateRoomList();
        },
        onRemovedFromRoom: room => {
          this.updateRoomList();
        },
        onRoomUpdated: room => {
          this.updateRoomList();
        },
        onRoomDeleted: room => {
          this.updateRoomList();
        },
        onPresenceChanged: (state, user) => {
          console.log(`User ${user.name} is ${state.current}`)
        }
      })
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

  fetchMessage(messageId) {
    const { currentUser, currentRoom } = this.state;
    currentUser.fetchMessages({
      roomId: currentRoom.id,
      initialId: Number(messageId),
      direction: 'older',
      limit: 10,
    })
      .then(messages => {
        this.setState({ Messages: [...messages, ...this.state.Messages], currentId: messages[messages.length - 1].id });
      })
      .catch(err => {
        console.log(`Error fetching messages: ${err}`)
      })
  }

  modalOpenSetting() {
    const { currentRoom } = this.state;
    this.setState({ inviteLink: '' });
    this.setState({ openSettingModal: !this.state.openSettingModal });
    axios.post(`https://ancient-temple-53657.herokuapp.com/api/room/invite/${currentRoom.id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ inviteLink: res.data.token });
      })
      .catch((err) => {
        console.log(err)
      })

  }

  updateCurrentRoom = () => { this.setState({ currentRoom: this.state.currentRoom }) }
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
          /* if (message.senderId !== this.state.currentUser.id) {
             this.props.notify('New Message Received');
           } */
          if (message.roomId === this.state.currentRoom.id) {
            this.setState({
              Messages: [...this.state.Messages, message]
              , currentId: message.id
            })
          }

        },
        onUserStartedTyping: user => {
          console.log(`User ${user.name} started typing`)
        },
        onUserJoined: user => {
          this.props.notify(`${user.id} just joined the room`);
          this.updateCurrentRoom();
        },
        onUserLeft: user => {
          this.props.notify(`${user.id} just left the room`);
          this.updateCurrentRoom();
        },
        onNewReadCursor: cursor => {
          console.log(cursor)
        },
        onUserStoppedTyping: user => {
          console.log(`User ${user.name} stopped typing`)
        },
        onPresenceChanged: (state, user) => {
          console.log(`User ${user.name} is ${state.current}`)
        },
        onNewReadCursor: cursor => {
          console.log(cursor);
        }
      },
      messageLimit: 15
    })
  }

  render() {
    const { currentRoom, currentUser, inviteLink } = this.state;
    if (!this.state.hasRooms) {
      var x = Math.floor((Math.random() * 10) + 1);
      const placeHolder = this.state.placeHolder[x];
      return (
        <Loader placeHolder={placeHolder} />

      )
    }


    return (
      <div className='app-layout'>
        <Modal
          data={this.state.ModalData}
          open={this.state.showRemoveUsers}
          close={this.showRemoveUsers}

        />
        <DeleteModal
          open={this.state.deleteModal}
          close={this.deleteRoomModal}
          deleteRoom={this.deleteRoom}
          teamName={currentRoom.name}
        />
        <TeamModal
          createTeam={this.createTeam}
          open={this.state.openAddTeamModal}
          close={this.openAddTeamModal}
          joinTeam={this.joinTeam}
        />
        <SettingModal
          open={this.state.openSettingModal}
          close={this.modalOpenSetting}
          name={currentRoom.name}
          link={inviteLink}
        />
        {
          currentRoom.name ?
            <React.Fragment>
              <User
                github={this.state.showGithubData}
                users={currentRoom.users}
                currentUser={currentUser}

              />
              <Header
                deleteRoom={this.deleteRoomModal}
                creator={currentRoom.createdByUserId}
                currentUser={currentUser.id}
                team={currentRoom}
                modalOpenSetting={this.modalOpenSetting}
                github={this.state.showGithubData}
                githubData={this.toggleGithubData}
                leaveRoom={this.UserLeaveTeam}
                open={this.showRemoveUsers}

              />
              <Message
                currentId={this.state.currentId}
                users={currentRoom.users}
                message={this.state.Messages}
                User={this.props.currentUser}
                fetchMessage={this.fetchMessage}
              />
              {
                currentRoom ? <Input

                  sendMessage={this.sendMessage}

                /> : null
              }
            </React.Fragment>

            : (
              <div>
                <img src={Placeholder} height='250px' width='180px' style={{ marginLeft: '50%', marginRight: 'auto', display: 'block', marginTop: '24%', marginLeft: '54%' }} />
                <h3 style={{ marginLeft: '60%', marginRight: 'auto', display: 'block', marginTop: '2%' }} >Or</h3>
                <button
                  className='joinTeamBtn'
                  onClick={this.onJoinTeamClick.bind(this)}
                  disabled
                >
                  Join a team from sidebar
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

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIds: [],
      rooms: []
    }
  }



  onCreateClick() {
    const { currentUser, updateRoomList } = this.props;
    console.log(updateRoomList)
    currentUser.createRoom({
      name: 'new sachin',
      private: true,
    }).then(room => {
      console.log(`Created room called ${currentUser.rooms}`)
      updateRoomList();
    })
      .catch(err => {
        console.log(`Error creating room ${err}`)
      })
  }

  render() {
    const { rooms } = this.props;
    let room = (<div>Loading rooms</div>);
    if (rooms.length > 0) {
      room = rooms.map(room => {
        return <NavLink
          key={room.id}
          to={`/team/${room.id}`}
          style={{ textDecoration: 'none', color: 'white' }}
          activeClassName='active'
        >
          <li
            onClick={() => { this.props.subscribeToRoom(room.id, room) }}>
            {room.name}
          </li>
        </NavLink>


      })
    }
    return (
      <div className='channels ' >
        <div className='box-channel-name box'>
          All Teams
      </div>
        <ul className='channel-list box-channel'>
          {
            room
          }

        </ul>
        <div style={{ cursor: 'pointer' }} onClick={this.onCreateClick.bind(this)} className='inner-team'>
          <span>Add a Team</span>
        </div>
      </div>
    )
  }

}


export default Sidebar;
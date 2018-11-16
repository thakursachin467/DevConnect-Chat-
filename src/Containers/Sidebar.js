import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIds: [],
      rooms: []
    }
  }



  /*onCreateClick() {
    const { currentUser, updateRoomList } = this.props;
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
  } */

  render() {
    const { rooms } = this.props;
    let room = (<div style={{ marginLeft: '25%', marginTop: '50%' }}>No rooms Found</div>);
    if (rooms.length > 0) {
      room = rooms.map(room => {
        return <NavLink
          key={room.id}
          to={`/team/${room.id}`}
          style={{ textDecoration: 'none', color: 'white' }}
          activeClassName='active'
        >
          <div >
            <li onClick={() => { this.props.subscribeToRoom(room.id, room) }}>
              {room.name}
            </li>

          </div>


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
        <li style={{ listStyleType: 'none' }}></li>
        <li style={{ listStyleType: 'none' }}></li>
        <li style={{ listStyleType: 'none' }}></li>
        <div className='inner-team' style={{ marginTop: '12px' }}>
          <div style={{ cursor: 'pointer' }} onClick={this.props.openAddTeamModal} className='inner-team-btn'>
            <span>Add a Team</span>
          </div>
        </div>

      </div >
    )
  }

}


export default Sidebar;
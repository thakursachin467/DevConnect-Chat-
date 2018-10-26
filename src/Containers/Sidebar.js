import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
        return <Link key={room.id} to={`/team/${room.id}`} style={{ textDecoration: 'none', color: 'white' }}>
          <li >{room.name}</li>
        </Link>


      })
    }
    return (
      <div className='channels ' >
        <div className='box-channel-name box'>
          All Teams
      </div>
        <ul className='channel-list box-channel'>
          <li style={{ cursor: 'pointer' }} onClick={this.onCreateClick.bind(this)}>
            Create a Team
            </li>
          {
            room
          }


        </ul>
      </div>
    )
  }

}


export default Sidebar;
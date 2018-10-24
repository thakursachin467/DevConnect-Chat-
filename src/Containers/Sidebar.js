import React, { Component } from 'react'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIds: []
    }
  }
  onCreateClick() {
    const { currentUser } = this.props;
    console.log(currentUser);
    console.log('object')
    currentUser.createRoom({
      name: 'general',
      private: true,
      addUserIds: ['craig', 'kate']
    }).then(room => {
      console.log(`Created room called ${room.name}`)
    })
      .catch(err => {
        console.log(`Error creating room ${err}`)
      })
  }

  render() {
    return (
      <div className='channels ' >
        <div className='box-channel-name box'>
          All Teams
      </div>
        <ul className='channel-list box-channel'>
          <li style={{ cursor: 'pointer' }} onClick={this.onCreateClick.bind(this)}>
            Create a Team
            </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li>last</li>
        </ul>
      </div>
    )
  }

}


export default Sidebar;
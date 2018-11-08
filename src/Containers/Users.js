import React from 'react';
import DropDown from '../Common/DropDown';

const Users = (props) => {
  const { users, currentUser, github } = props;
  let content;
  if (github) {
    content = (
      <span >
        <li>github data will be shown here</li>
      </span>
    )
  } else {
    content = (
      users.map(user => {
        return (<li className="online-user-list" key={user.id}>
          <img className={user.presence.state === 'online' ? 'avatar-online' : "avatar-offline"} alt="Avatar" src={user.avatarURL ? user.avatarURL : 'https://us.123rf.com/450wm/triken/triken1608/triken160800029/61320775-stock-vector-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg?ver=6'} />
          <div className="about">
            <div className="name">{user.name}</div>
            <div className="status">
              <span className={'dot' + ' ' + (user.presence.state === 'online' ? 'online' : 'offline')}></span>
              <span className='text-muted'>
                {user.presence.state === 'online' ? ' online' : 'offline'}
              </span>
            </div>
          </div>
        </li>)
      })

    )
  }


  return (
    <div className='teams '>
      <div className='online-user-box '>
        <div className="search ">
          <input type="text" placeholder="search" />
          <i className="fas fa-search"></i>
        </div>

      </div>
      <ul className='online-list'>

        {content}


      </ul>
      <li style={{ listStyleType: 'none' }}></li>
      <div style={{ height: '4rem' }}>

      </div>
      <div className="inner">
        <div className='inner-card'>
          <img className="avatar" alt="Avatar" src={currentUser.avatarURL ? currentUser.avatarURL : 'https://us.123rf.com/450wm/triken/triken1608/triken160800029/61320775-stock-vector-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg?ver=6'} />
          <div className="channels-footer-details">
            <div className="about">
              <DropDown name={currentUser.name} />
              <div className="status">
                <span className='dot online'></span> online
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Users;

import React from 'react'
import DropDown from '../Common/DropDown';
export function CurrentUser({ currentUser }) {
  return <div className="inner">
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
  </div>;
}

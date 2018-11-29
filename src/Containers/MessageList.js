import React from 'react'
import Moment from 'react-moment';
export function MessageList({
  message,
  User,
  calendarStrings,
  presenceStore,
  usersObject,
  refProp,
  currentId
}) {

  return <li
    ref={currentId === message.id ? refProp : null}
    className={message.senderId === User ? 'Current-User' : 'Other-user'}
    key={message.id}>
    <img className={presenceStore[message.senderId] ? presenceStore[message.senderId].state === 'online' ? 'avatar-online' : "avatar-offline" : 'avatar-offline'} alt="Avatar" src={usersObject[message.senderId] ? usersObject[message.senderId] : "https://us.123rf.com/450wm/triken/triken1608/triken160800029/61320775-stock-vector-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg?ver=6"} />
    <span className={'dot' + ' ' + (presenceStore[message.senderId] ? presenceStore[message.senderId].state === 'online' ? 'online' : 'offline' : 'offline')}></span>
    <strong>{message.senderId === User ? ' You' : usersObject[message.senderId] ? message.senderId : 'User Removed'}</strong> <span className="message-data-time">
      <Moment calendar={calendarStrings}>
        {message.createdAt}
      </Moment>
    </span>
    <div className='message-body'>
      <span className='message-text'>{message.text}</span>
    </div>

  </li>;
}

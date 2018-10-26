import React from 'react'
import Moment from 'react-moment';
const Message = (props) => {
  let loading = true;
  if (props.message.length > 0) {
    loading = false;
  }
  if (loading) {
    return (<div className="lds-hourglass" style={{ alignSelf: 'center', margin: 'auto' }}></div>)
  }
  const calendarStrings = {
    lastDay: '[Yesterday at] LT',
    sameDay: '[Today at] LT',
    lastWeek: '[last] dddd [at] LT',
    sameElse: 'L'
  };
  return (
    <div className='messages box-message'>
      <ul className='message-list'>
        {
          props.message.map(message => {
            return (
              <li className='Other-user' key={message.id}>
                <img className="avatar-online" alt="Avatar" src="https://us.123rf.com/450wm/triken/triken1608/triken160800029/61320775-stock-vector-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg?ver=6" /> <span className='dot online'></span> <strong>{message.senderId}</strong> <span className="message-data-time">
                  <Moment calendar={calendarStrings}>
                    {
                      message.createdAt}
                  </Moment>
                </span>
                <div className='message-body'>
                  <span className='message-text'>{message.text}</span>
                </div>

              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Message;
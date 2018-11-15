import { MessageList } from './MessageList';
import React, { Component } from 'react'


class Message extends Component {
  constructor(props) {
    super(props)
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }



  scrollToBottom(el) {
    if (el == null) {

    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }

  }

  handleScroll() {
    const { fetchMessage, message } = this.props;
    if (this.scroller && this.scroller.scrollTop <= 0) {
      fetchMessage(message[0].id)
    }
  }

  render() {
    let loading = true;
    let usersObject = {};
    const { users, User } = this.props;
    usersObject = users.reduce((acc, cur) => ({ ...acc, [cur.id]: cur.avatarURL }), {});
    const presenceStore = users[0].presenceStore.store;

    if (this.props.message.length > 0) {
      loading = false;

    }
    if (loading) {
      return (<div className="lds-hourglass" style={{ alignSelf: 'center', margin: 'auto' }}></div>)
    }
    const calendarStrings = {
      lastDay: '[Yesterday at] LT',
      sameDay: '[Today at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    };
    return (
      <div
        className='messages box-message'
        onScroll={this.handleScroll}
        ref={(scroller) => {
          this.scroller = scroller;
        }}
      >

        <ul className='message-list' >
          {
            this.props.message.map(message => {
              return (
                <MessageList
                  key={message.id}
                  message={message}
                  presenceStore={presenceStore}
                  User={User}
                  usersObject={usersObject}
                  calendarStrings={calendarStrings} />
              )
            })
          }
          <div style={{ float: "left", clear: "both" }} ref={(el) => {
            this.scrollToBottom(el)
          }} >
          </div>
        </ul>


      </div>
    )
  }

}

export default Message;
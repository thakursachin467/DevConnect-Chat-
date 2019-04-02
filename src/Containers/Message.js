import { MessageList } from './MessageList';
import React, { Component } from 'react'


class Message extends Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.myRef = React.createRef();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }


  scrollToBottom() {
    const el = this.myRef;
    console.log(el.current);
    if (el.current === null) {

    } else {
      el.current.scrollIntoView({ behavior: "instant", block: "nearest", inline: "nearest" });
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
    usersObject = users.users;
    console.log(this.props.message);
    const presenceStore = users.presenceStore;
    if (this.props.message.length > 0) {
      loading = false;

    }
    if (loading) {
      return (<div  style={{ alignSelf: 'center', margin: 'auto' }}>No Message Found</div>)
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
                  calendarStrings={calendarStrings}
                  currentId={this.props.currentId}
                  refProp={this.myRef}
                />
              )
            })
          }

        </ul>


      </div>
    )
  }

}

export default Message;
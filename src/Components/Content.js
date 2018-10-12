import React, { Component } from 'react'
import Message from '../Containers/Message';
import Sidebar from '../Containers/Sidebar';
import User from '../Containers/Users';
import Header from '../Containers/Hearder';
import Input from '../Containers/InputBox';
class Content extends Component {
  render() {
    return (
      <div className='app-layout'>
        <User />
        <Sidebar />
        <Header
          teamName='Team Name goes here(currently active)'
        />
        <Message />
        <Input />
      </div>
    )
  }
}


export default Content;

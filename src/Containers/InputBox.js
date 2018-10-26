import React from 'react'
import { Input } from 'semantic-ui-react'
class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      user: '',
      roomId: '',
      currentUser: {}
    }
  }

  componentDidMount() {
    this.setState({ currentUser: this.props.currentUser, roomId: this.props.roomId, user: this.props.user });

  }
  render() {
    console.log(this.state)
    return (
      <div className='input box message'>
        <Input type='text' placeholder='Start Chatting' />
      </div>
    )
  }

}

export default InputBox;

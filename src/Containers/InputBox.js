import React from 'react'
import { Input } from 'semantic-ui-react'
class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      user: '',
    }
  }

  componentDidMount() {
    this.setState({ currentUser: this.props.currentUser, user: this.props.user });

  }
  onSubmit(e) {
    e.preventDefault()
    const { text } = this.state;
    const { roomId, currentUser } = this.props;
    currentUser.sendMessage({
      text: text,
      roomId: roomId
    })
      .then(messageId => {
        this.setState({ text: '' })
        console.log(`Added message to ${roomId.name}`)
      })
      .catch(err => {
        console.log(`Error adding message to ${roomId.name}: ${err}`)
      })

  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div className='input box message'>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type='text'
            placeholder='Start Chatting'
            name='text'
            value={this.state.text}
            onChange={this.onChange.bind(this)}
          />
        </form>

      </div>
    )
  }

}

export default InputBox;

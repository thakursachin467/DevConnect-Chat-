import React from 'react'
class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      user: '',
    }
  }

  componentDidMount() {
    this.setState({ currentUser: this.props.currentUser, user: this.props.user });

  }
  onSubmit(e) {
    e.preventDefault()
    const { message } = this.state;
    const { roomId, currentUser } = this.props;
    currentUser.sendMessage({
      text: message,
      roomId: roomId
    })
      .then(messageId => {
        this.setState({ message: '' })
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
            name='message'
            autoComplete="off"
            value={this.state.message}
            onChange={this.onChange.bind(this)}
          />
        </form>

      </div>
    )
  }

}

export default InputBox;

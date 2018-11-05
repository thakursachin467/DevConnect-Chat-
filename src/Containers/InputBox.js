import React from 'react'
class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',

    }
  }

  onSubmit(e) {
    e.preventDefault()
    const { message } = this.state;
    this.setState({ message: '' })
    this.props.sendMessage(message);


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

import React from 'react'
import { Modal, Input } from 'semantic-ui-react'


class InviteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'copy'
    }
    this.copyText = this.copyText.bind(this);
  }
  copyText() {
    this.input.select();
    document.execCommand('copy');
    this.setState({ text: 'copied' })
    setTimeout(() => {
      this.setState({ text: 'copy' })
      this.props.close()
    }, 1000)
  }
  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.close} dimmer='blurring' size='small'>
        <Modal.Header>Invite Friends to {this.props.name}</Modal.Header>
        <Modal.Content >
          <Input
            ref={(input) => this.input = input}
            style={{ width: '80%' }}
            action={{ color: 'teal', labelPosition: 'right', icon: 'copy', content: this.state.text, onClick: () => this.copyText() }}
            value={this.props.link}
          />

        </Modal.Content>
      </Modal>
    )
  }

}

export default InviteForm;
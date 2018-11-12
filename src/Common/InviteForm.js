import React from 'react'
import { Modal, Input } from 'semantic-ui-react'

const InviteForm = (props) => (
  <Modal open={props.open} onClose={props.close} dimmer='blurring' size='huge'>
    <Modal.Header>Invite Friends to {props.name}</Modal.Header>
    <Modal.Content >
      <Input value={props.link} style={{ width: '100%' }} />
    </Modal.Content>
  </Modal>
)

export default InviteForm;
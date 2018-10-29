import React from 'react'
import { Modal } from 'semantic-ui-react'

const ModalModalExample = (props) => (
  <Modal open={props.open} onClose={props.close} dimmer='blurring'>
    <Modal.Header>Settings will be displayed here</Modal.Header>
    <Modal.Content >

    </Modal.Content>
  </Modal>
)

export default ModalModalExample;
import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const DeleteModal = (props) => {

  return (
    <Modal open={props.open} basic size='small'>
      <Header icon='archive' content='Delete Team' />
      <Modal.Content>
        <p>
          Are you Sure you want to delete {props.teamName}?
      </p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={props.close} basic color='red' inverted>
          <Icon name='remove' /> No
      </Button>
        <Button onClick={props.deleteRoom} color='green' inverted>
          <Icon name='checkmark' /> Yes
      </Button>
      </Modal.Actions>
    </Modal>
  )
}



export default DeleteModal;
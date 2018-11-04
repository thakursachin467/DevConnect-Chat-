import React from 'react';
import { Modal, Button, Form, Input } from 'semantic-ui-react'
export class TeamJoinForm extends React.Component {
  render() {

    return <React.Fragment>
      <Modal.Content style={{
        height: '30%'
      }}>
        <Form onSubmit={this.props.onSubmit} style={{
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }} size='large'>
          <Form.Field width={16} required>
            <label>Team Id</label>
            <Input name='teamId' value={this.props.teamId} onChange={this.props.onChange} placeholder='Team Id' />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button icon='cancel' labelPosition='right' content='Go back' color='black' onClick={this.props.joinTeam.bind(this)} />

        <Button positive icon='checkmark' labelPosition='right' content="Create" onClick={this.props.onTeamJoinSubmit.bind(this)} />
      </Modal.Actions>
    </React.Fragment>;
  }

}

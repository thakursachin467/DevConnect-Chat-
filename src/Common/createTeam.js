import React from 'react';
import { Modal, Button, Form, Input, Header } from 'semantic-ui-react'

export class CreateTeam extends React.Component {
  render() {

    return <React.Fragment>
      <Header style={{ textAlign: 'center', borderBottom: '0px solid white' }}>Create a Team.</Header>
      <p style={{ marginLeft: '10px', color: 'black', fontSize: '1.2rem' }}>By creating a team you will have access to free text messages amongst your team and friends.</p>
      <Modal.Content style={{
        height: '30%'
      }}>
        <Form onSubmit={this.props.onSubmit} style={{
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }} size='large'>
          <Form.Field width={16} required>
            <label>Team Name</label>
            <Input name='team' value={this.props.team} onChange={this.props.onChange} placeholder='Team Name' />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button icon='cancel' labelPosition='right' content='Go back' color='black' onClick={this.props.createTeam} />

        <Button positive icon='checkmark' labelPosition='right' content="Create" onClick={this.props.onSubmit} />
      </Modal.Actions>
    </React.Fragment>;
  }

}

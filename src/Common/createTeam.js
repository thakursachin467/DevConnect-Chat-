import React from 'react';
import { Modal, Button, Divider, Grid, Header, Icon, Segment, Form, Input } from 'semantic-ui-react'

export class CreateTeam extends React.Component {
  render() {
    const {
      height,
      width,
      marginLeft,
      marginRight
    } = this.props;
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

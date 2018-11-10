import React from 'react';
import { Modal, Button, Form, Input, Header } from 'semantic-ui-react'
export class TeamJoinForm extends React.Component {
  render() {

    return <React.Fragment>
      <Header style={{ textAlign: 'center', borderBottom: '0px solid white' }}>Join a Team.</Header>
      <p style={{ marginLeft: '10px', color: 'black', fontSize: '1.2rem' }}>Enter an invite link below to join existing team.The invite will look something like this:
        <br />
        <span style={{ opacity: '0.5' }}>https://admiring-snyder-dead31.netlify.com/invite/CoolDevelopers</span>
        <br />
        <span style={{ opacity: '0.5' }}>https://admiring-snyder-dead31.netlify.com/invite/qKPjQyI</span>
      </p>
      <Modal.Content style={{
        height: '30%'
      }}>
        <Form onSubmit={this.props.onSubmit} style={{
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }} size='large'>
          <Form.Field width={16} required>
            <label style={{ marginLeft: '0rem' }}>Enter the invite link below</label>
            <Input name='teamId' value={this.props.teamId} onChange={this.props.onChange} placeholder='https://admiring-snyder-dead31.netlify.com/invite/qKPjQyI' />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button icon='cancel' labelPosition='right' content='Go back' color='black' onClick={this.props.joinTeam.bind(this)} />

        <Button positive icon='checkmark' labelPosition='right' content="Join" onClick={this.props.onTeamJoinSubmit.bind(this)} />
      </Modal.Actions>
    </React.Fragment>;
  }

}

import { CreateTeam } from './createTeam';
import { JoinTeam } from './joinTeam';
import React from 'react'
import { Modal, Button, Divider, Grid, Header, Icon, Segment, Form, Input } from 'semantic-ui-react'

class ModalModalExample extends React.Component {
  constructor() {
    super()
    this.state = {
      createTeam: false,
      joinTeam: false,
      team: '',
      teamId: ''
    }
    this.joinTeam = this.joinTeam.bind(this);
    this.createTeam = this.createTeam.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.createTeam(this.state.team);
    this.setState({ team: ' ' });
    this.createTeam();
    this.props.close();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  joinTeam() {
    this.setState({ joinTeam: !this.state.joinTeam })

  }
  createTeam() {
    this.setState({ createTeam: !this.state.createTeam })
  }

  onTeamJoinSubmit(e) {
    e.preventDefault();
    this.props.joinTeam(this.state.teamId);
    this.setState({ teamId: '' });
    this.props.close();

  }

  render() {
    let content;
    const { createTeam, joinTeam } = this.state;
    if (createTeam | joinTeam) {
      if (createTeam) {
        content = (
          <CreateTeam team={this.state.team} height={height} width={width} marginLeft={marginLeft} marginRight={marginRight} onSubmit={this.onSubmit} onChange={this.onChange} createTeam={this.createTeam} />


        )
      }
      if (joinTeam) {
        content = <React.Fragment>
          <Modal.Content style={{ height: '30%' }}>
            <Form
              onSubmit={this.onSubmit}
              style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
              size='large'
            >
              <Form.Field
                width={16}
                required>
                <label>Team Id</label>
                <Input
                  name='teamId'
                  value={this.state.teamId}
                  onChange={this.onChange}
                  placeholder='Team Id' />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              icon='cancel'
              labelPosition='right'
              content='Go back'
              color='black'
              onClick={this.joinTeam.bind(this)} />

            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Create"
              onClick={this.onTeamJoinSubmit.bind(this)}
            />
          </Modal.Actions>
        </React.Fragment>
      }
    } else {
      /* content = (
         <Button.Group >
           <Button size='large' onClick={this.createTeam}>Create a Team</Button>
           <Button.Or />
           <Button positive size='large' onClick={this.joinTeam}> Join a Team</Button>
         </Button.Group>
       ) */
      content = (
        <JoinTeam height={height} cursor={cursor} backgroundColor={backgroundColor} fontWeight={fontWeight} fontSize={fontSize} createTeam={this.createTeam} joinTeam={this.joinTeam} />

      )
    }


    return (
      <Modal open={this.props.open} onClose={this.props.close} size='small' style={{ height: '65%' }}>
        <Header style={{ textAlign: 'center', borderBottom: '0px solid white' }}>Please choose an option</Header>

        {content}



      </Modal>
    )
  }
}



export default ModalModalExample;
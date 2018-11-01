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
          <React.Fragment>
            <Modal.Content style={{ height: '30%' }}>
              <Form
                onSubmit={this.onSubmit}
                style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
                size='large'
              >
                <Form.Field
                  width={16}
                  required>
                  <label>Team Name</label>
                  <Input
                    name='team'
                    value={this.state.team}
                    onChange={this.onChange}
                    placeholder='Team Name' />
                </Form.Field>
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button
                icon='cancel'
                labelPosition='right'
                content='Go back'
                color='black'
                onClick={this.createTeam} />

              <Button
                positive
                icon='checkmark'
                labelPosition='right'
                content="Create"
                onClick={this.onSubmit}
              />
            </Modal.Actions>
          </React.Fragment>


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
        <React.Fragment>
          <Modal.Content style={{ height: '70%' }}>
            <Segment size='large' style={{ height: '100%' }} raised>
              <Grid columns={2} textAlign='center'>
                <Divider vertical>Or</Divider>
                <Grid.Row verticalAlign='middle'>
                  <Grid.Column onClick={this.createTeam} style={{ cursor: 'pointer' }} >
                    <Header icon style={{ backgroundColor: 'white' }}>
                      <Icon name='user' />
                      <p style={{ fontWeight: '200', fontSize: '12' }}>Create a team and invite your friends. it's free </p>
                      <Button size='large' onClick={this.createTeam}>Create a Team</Button>
                    </Header>
                  </Grid.Column>
                  <Grid.Column onClick={this.joinTeam} style={{ cursor: 'pointer' }}>
                    <Header icon style={{ backgroundColor: 'white' }}>
                      <Icon name='users' />
                      <p style={{ fontWeight: '200' }}>Enter an invite code and instantly join your friends team.</p>
                      <Button positive size='large' onClick={this.joinTeam}> Join a Team(under construction)</Button>
                    </Header>

                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Modal.Content>
        </React.Fragment>

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
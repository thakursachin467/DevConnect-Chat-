import React from 'react'
import { Modal, Button, Divider, Grid, Header, Icon, Search, Segment, Content } from 'semantic-ui-react'

class ModalModalExample extends React.Component {
  constructor() {
    super()
    this.state = {
      createTeam: false,
      joinTeam: false
    }
    this.joinTeam = this.joinTeam.bind(this);
    this.createTeam = this.createTeam.bind(this);
  }

  joinTeam() {
    this.setState({ joinTeam: !this.state.joinTeam })

  }
  createTeam() {
    this.setState({ createTeam: !this.state.createTeam })
  }
  render() {
    let content;
    const { createTeam, joinTeam } = this.state;
    if (createTeam | joinTeam) {
      content = (
        <div>this</div>
      )
    } else {
      /* content = (
         <Button.Group >
           <Button size='large' onClick={this.createTeam}>Create a Team</Button>
           <Button.Or />
           <Button positive size='large' onClick={this.joinTeam}> Join a Team</Button>
         </Button.Group>
       ) */
      content = (
        <Segment size='large' style={{ height: '100%' }}>
          <Grid columns={2} textAlign='center'>
            <Divider vertical>Or</Divider>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header icon style={{ backgroundColor: 'white' }}>
                  <Icon name='user' />
                  <p style={{ fontWeight: '200', fontSize: '12' }}>Create a team and invite your friends. it's free </p>
                  <Button size='large' onClick={this.createTeam}>Create a Team</Button>


                </Header>


              </Grid.Column>
              <Grid.Column>
                <Header icon style={{ backgroundColor: 'white' }}>
                  <Icon name='users' />
                  <p style={{ fontWeight: '200' }}>Enter an invite code and instantly join your friends team.</p>
                  <Button positive size='large' onClick={this.joinTeam}> Join a Team</Button>
                </Header>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      )
    }
    return (
      <Modal open={this.props.open} onClose={this.props.close} size='small' style={{ height: '65%' }}>
        <Header style={{ textAlign: 'center', borderBottom: '0px solid white' }}>Please choose an option</Header>
        <Modal.Content style={{ height: '70%' }}>
          {content}
        </Modal.Content>

        <Modal.Actions>
          <Button color='black' onClick={this.joinTeam}>
            Go back
            </Button>
          <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content="Create"
            onClick={this.joinTeam}
          />
        </Modal.Actions>
      </Modal>
    )
  }
}



export default ModalModalExample;
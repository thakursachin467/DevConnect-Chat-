import React from 'react';
import { Modal, Button, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react'


export function SelectOption(props) {
  return <React.Fragment>
    <Modal.Content style={{
      height: '70%'
    }}>
      <Segment size='large' style={{
        height: '100%'
      }} raised>
        <Grid columns={2} textAlign='center'>
          <Divider vertical>Or</Divider>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column onClick={props.createTeam} style={{
              cursor: 'pointer'
            }}>
              <Header icon style={{
                backgroundColor: 'white'
              }}>
                <Icon name='user' />
                <p style={{
                  fontWeight: '200',
                  fontSize: '12'
                }}>Create a team and invite your friends. it's free </p>
                <Button size='large' onClick={props.createTeam}>Create a Team</Button>
              </Header>
            </Grid.Column>
            <Grid.Column onClick={props.joinTeam} style={{
              cursor: 'pointer'
            }}>
              <Header icon style={{
                backgroundColor: 'white'
              }}>
                <Icon name='users' />
                <p style={{
                  fontWeight: '200'
                }}>Enter an invite code and instantly join your friends team.</p>
                <Button positive size='large' onClick={props.joinTeam}> Join a Team(under construction)</Button>
              </Header>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Modal.Content>
  </React.Fragment>;
}

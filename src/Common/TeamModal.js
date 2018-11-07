import { TeamJoinForm } from './TeamJoinForm';
import { CreateTeam } from './createTeam';
import { SelectOption } from './SelectOption';
import React from 'react'
import { Modal, Header } from 'semantic-ui-react'

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
          <CreateTeam team={this.state.team} onSubmit={this.onSubmit} onChange={this.onChange} createTeam={this.createTeam} />


        )
      }
      if (joinTeam) {
        content = <TeamJoinForm teamId={this.state.teamId} onSubmit={this.onSubmit} onChange={this.onChange} joinTeam={this.joinTeam} onTeamJoinSubmit={this.onTeamJoinSubmit.bind(this)} />
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
        <SelectOption createTeam={this.createTeam} joinTeam={this.joinTeam} />

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
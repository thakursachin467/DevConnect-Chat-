import React from 'react'
import { Icon, Dropdown } from 'semantic-ui-react'
export function HeaderLinks(props) {
  const { leaveRoom, teamId, modalOpenSetting, currentUser, creator, deleteRoom, open } = props;
  const trigger = (
    <span>
      <Icon name='angle down' size='large' />
    </span>
  )
  let options;
  if (currentUser === creator) {
    options = [
      { icon: 'add user', key: 'invite', text: 'Invite a friend', onClick: () => modalOpenSetting() },
      { icon: 'git', key: 'repo', text: 'Link a repo' },
      (currentUser === creator ? { icon: 'delete', key: 'Delete', text: 'Delete team', onClick: () => deleteRoom() } : ''),
      (currentUser === creator ? { icon: 'remove user', key: 'Remove', text: 'Remove a User', onClick: () => open() } : ''),
      { icon: 'sign-out', key: 'leave', text: 'leave team', onClick: () => leaveRoom(teamId) },

    ]
  } else {
    options = [
      { icon: 'add user', key: 'invite', text: 'Invite a friend', onClick: () => modalOpenSetting() },
      { icon: 'git', key: 'repo', text: 'Link a repo' },
      { icon: 'sign-out', key: 'leave', text: 'leave team', onClick: () => leaveRoom(teamId) },

    ]
  }

  return (
    <React.Fragment>

      <span style={{
        float: 'right',
        cursor: 'pointer',
        marginRight: '10px',
        marginLeft: '10px'
      }}>
        <Dropdown trigger={trigger} icon={null} options={options} direction='left' pointing='top left' />
      </span>
      {
        props.github ? <span style={{
          float: 'right',
          cursor: 'pointer'
        }}
          onClick={props.githubData}
        >
          <Icon name='users' size='large' />
        </span>
          :
          <span style={{
            float: 'right',
            cursor: 'pointer'
          }}
            onClick={props.githubData}
          >
            <Icon name='github' size='large' />
          </span>
      }

    </React.Fragment>);
}

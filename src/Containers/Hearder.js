import { HeaderLinks } from './HeaderLinks';
import React from 'react'

const Header = (props) => {
  const { team, modalOpenSetting, currentUser, creator, deleteRoom } = props;
  return (
    <div className='header1 box'>{
      team.name ? team.name : 'Join a Team'

    }
      <HeaderLinks
        deleteRoom={deleteRoom}
        creator={creator}
        currentUser={currentUser}
        githubData={props.githubData}
        github={props.github}
        teamId={team.id}
        modalOpenSetting={modalOpenSetting}
        leaveRoom={props.leaveRoom}
        open={props.open}

      />

    </div>
  )
}

export default Header;

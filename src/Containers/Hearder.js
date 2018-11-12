import { HeaderLinks } from './HeaderLinks';
import React from 'react'

const Header = (props) => {
  const { team, modalOpenSetting } = props;
  return (
    <div className='header box'>{
      team.name ? team.name : 'Join a Team'

    }
      <HeaderLinks
        githubData={props.githubData}
        github={props.github}
        teamId={team.id}
        modalOpenSetting={modalOpenSetting}
        leaveRoom={props.leaveRoom}
      />

    </div>
  )
}

export default Header;

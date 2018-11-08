import { HeaderLinks } from './HeaderLinks';
import React from 'react'

const Header = (props) => {
  const { team } = props;
  return (
    <div className='header box'>{
      team.name ? team.name : 'Join a Team'

    }
      <HeaderLinks
        githubData={props.githubData}
        github={props.github}
        teamId={team.id}
        leaveRoom={props.leaveRoom}
      />

    </div>
  )
}

export default Header;

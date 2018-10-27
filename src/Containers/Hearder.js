import React from 'react'

const Header = (props) => {
  const { team } = props;

  return (
    <div className='header box'>{
      team.name ? team.name : 'Join a Team'

    }
    </div>
  )
}

export default Header;

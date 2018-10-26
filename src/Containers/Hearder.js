import React from 'react'

const Header = (props) => {
  const { team } = props;
  return (
    <div className='header box'>{team.name}</div>
  )
}

export default Header;

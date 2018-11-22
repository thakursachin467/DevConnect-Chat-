import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const DropdownTriggerExample = (props) => {
  const options = [
    {
      key: 'user',
      text: (
        <span>
          Signed in as <strong>{props.name}</strong>
        </span>
      ),
      disabled: true,
    },
    { key: 'profile', text: 'Your Profile', icon: 'user' },
    { key: 'stars', text: 'Your Repository', icon: 'folder' },
    //{ key: 'explore', text: 'Explore' },
    //{ key: 'integrations', text: 'Integrations' },
    //{ key: 'help', text: 'Help' },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: () => window.location.href = '/logout' },
  ]
  const trigger = (
    <span>
      Hello, {props.name}
    </span>
  )
  return (
    <Dropdown upward trigger={trigger} options={options} direction='left' />
  )

}

export default DropdownTriggerExample
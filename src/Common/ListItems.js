import React from 'react'
import { Image, List } from 'semantic-ui-react'

const ListItems = (props) => {
  console.log(props);
  return (

    <List.Item >
      <Image avatar src={props.item.avatarURL} />
      <List.Content>
        <List.Header as='a' onClick={() => props.remove(props.item.id)}>{props.item.name}</List.Header>
      </List.Content>
    </List.Item>

  )
}

export default ListItems;
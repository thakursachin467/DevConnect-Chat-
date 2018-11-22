import React from 'react';
import { Modal } from 'semantic-ui-react';
import ListItems from './ListItems';
import { List } from 'semantic-ui-react';
const ModalCommon = (props) => {
  const { data, open, close } = props;
  return (<Modal open={open} onClose={close}>
    <Modal.Header style={{ textAlign: 'center' }}>{open ? data.Data.Name : ''}</Modal.Header>
    <Modal.Content >
      {
        open ?
          <List divided horizontal size='massive'>
            {data.Data.items.map((item) => {
              return <ListItems item={item} key={item.id} remove={data.Data.removeUser} />

            })}</List> : ''
      }

    </Modal.Content>
  </Modal>);
}

export default ModalCommon;


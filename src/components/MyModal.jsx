import React, { Fragment } from 'react';

// Bootstrap
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap';

function MyModal({ visible, onToggle, className, content }) {
  return (
    <Fragment>
      <Modal isOpen={visible} toggle={onToggle} className={className}>
        <ModalBody>
          {content}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={onToggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
}

export default MyModal;
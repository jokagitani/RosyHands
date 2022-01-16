import React, { useContext } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const PopupModal = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className="modal-style">Add to Cart</Button>}
    >
      <Modal.Header>{props.title}</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={props.url} wrapped />
        <Modal.Description>
          <Header>{props.name}</Header>
          <p>{props.description}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button className="button-theme" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          class="modal-style"
          labelPosition="right"
          icon="shopping cart"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default PopupModal;

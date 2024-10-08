import { Button, Form, Modal } from "react-bootstrap";
import { CreateModalProps } from "../types";
import { useState } from "react";
import { createType } from "../../../http/deviceApi";

export const CreateType = ({
  show,
  onHide
}: CreateModalProps) => {
  const [value, setValue] = useState('');
  const createNewType = () => {
      createType({ name: value})
        .then(() => {
          setValue('')
          onHide()
        })
  };
  
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            placeholder='Введите название типа'
            onChange={(e) => setValue(e.target.value)}
          />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={createNewType}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

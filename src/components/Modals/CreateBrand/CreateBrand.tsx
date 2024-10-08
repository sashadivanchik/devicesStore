import { Button, Form, Modal } from "react-bootstrap";
import { CreateModalProps } from "../types";
import { useState } from "react";
import { createBrand } from "../../../http/deviceApi";

export const CreateBrand = ({
  show,
  onHide
}: CreateModalProps) => {

  const [value, setValue] = useState('');
  const createNewBrand = () => {
    createBrand({ name: value})
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
          Добавить новый бренд
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Control
            placeholder='Введите название бренда'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={createNewBrand}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

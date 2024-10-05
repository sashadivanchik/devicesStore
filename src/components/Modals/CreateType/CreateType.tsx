import { Button, Form, Modal } from "react-bootstrap";
import { CreateModalProps } from "../types";

export const CreateType = ({
  show,
  onHide
}: CreateModalProps) => {
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
          <Form.Control placeholder='Введите название типа'/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

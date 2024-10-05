import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Context } from "../../../main";
import { CreateModalProps } from "../types";

type DeviceCommonType = { id: number; name: string };

type Info = {
  title: string;
  description: string;
  number: number;
};

type TypeDevices = DeviceCommonType;
type BrandDevices = DeviceCommonType;

export const CreateDevice = observer(({
  show,
  onHide
}: CreateModalProps) => {
  // @ts-ignore
  const { device } = useContext(Context);
  const [info, setInfo] = useState<Info[]>([]);

  const setDeviceInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  };

  const removeInfoItem = (number: number) => {
    setInfo(info.filter((item) => item.number !== number))
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
          Добавить новый девайс
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Dropdown className='mt-2'>
            <Dropdown.Toggle>
              Веберите тип
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((item: TypeDevices) => {
                return <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
              })}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className='mt-2'>
            <Dropdown.Toggle>
              Веберите бренд
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((item: BrandDevices) => {
                return <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
              })}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            className='mt-2'
            placeholder='Введите название устройства'
          />

          <Form.Control
            className='mt-2'
            placeholder='Введите стоимость устройства'
            type='number'
          />

          <Form.Control
            className='mt-2'
            type='file'
          />

          <hr/>

          <Button onClick={() => setDeviceInfo()}>Добавить новое свойство</Button>

          <div>
            {  info.map((item) => {
              return (
                <Row className='mt-2' key={item.number}>
                  <Col>
                   <Form.Control
                    className='mt-2'
                    placeholder='Введите название свойства'
                  />
                  </Col>
                  <Col>
                   <Form.Control
                      className='mt-2'
                      placeholder='Введите значение свойства'
                    />
                  </Col>
                  <Col>
                    <Button onClick={() => removeInfoItem(item.number)}>удалить</Button>
                  </Col>
                </Row>
              )
            }) }
          </div>

        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
});

import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../main";
import { CreateModalProps } from "../types";
import { createDevice, fetchBrand, fetchTypes } from "../../../http/deviceApi";

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
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState<Info[]>([]);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data))
    fetchBrand().then((data) => device.setBrands(data))
  }, [])

  const setDeviceInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  };

  const removeInfoItem = (number: number) => {
    setInfo(info.filter((item) => item.number !== number))
  };

  const selectFile = (e: any) => {
    setFile(e.target.files[0])
  };

  // @ts-ignore
  const changeInfo = (key: 'title' | "description", value, number) => {
    setInfo(info.map((item) => item.number === number ? {...item, [key]: value} : item))
  };

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    // @ts-ignore
    formData.append('img', file)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('typeId', device.selectedType.id)
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then(() => onHide())
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
              {device.selectedType.name || 'Выберите тип'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((item: TypeDevices) => {
                return (
                  <Dropdown.Item
                    key={item.id}
                    onClick={() => device.setSelectedType(item)}
                  >
                    {item.name}
                  </Dropdown.Item>)
              })}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className='mt-2'>
            <Dropdown.Toggle>
              {device.selectedBrand.name || 'Выберите брэнд'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((item: BrandDevices) => {
                return (
                  <Dropdown.Item
                    key={item.id}
                    onClick={() => device.setSelectedBrand(item)}
                  >
                    {item.name}
                  </Dropdown.Item>)
              })}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            className='mt-2'
            placeholder='Введите название устройства'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Form.Control
            className='mt-2'
            placeholder='Введите стоимость устройства'
            type='number'
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />

          <Form.Control
            className='mt-2'
            type='file'
            onChange={selectFile}
          />

          <hr/>

          <Button onClick={() => setDeviceInfo()}>Добавить новое свойство</Button>

          <div>
            {  info.map((item: { title: string; description: string; number: number}) => {
              return (
                <Row className='mt-2' key={item.number}>
                  <Col>
                   <Form.Control
                    className='mt-2'
                    placeholder='Введите название свойства'
                    value={item.title}
                    onChange={(e) => changeInfo('title', e.target.value, item.number)}
                  />
                  </Col>
                  <Col>
                   <Form.Control
                      className='mt-2'
                      placeholder='Введите описание устройства'
                      value={item.description}
                      onChange={(e) => changeInfo('description', e.target.value, item.number)}
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
        <Button onClick={addDevice}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
});

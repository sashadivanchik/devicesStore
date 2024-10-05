import { Button, Container } from "react-bootstrap";
import { CreateType } from "../../components/Modals/CreateType/CreateType";
import { CreateBrand } from "../../components/Modals/CreateBrand/CreateBrand";
import { CreateDevice } from "../../components/Modals/CreateDevice/CreateDevice";
import { useState } from "react";

export const Admin = () => {
  const [typeShow, setTypeShow] = useState(false);
  const [brandShow, setBrandShow] = useState(false);
  const [deviceShow, setDeviceShow] = useState(false);

  return (
    <Container className='d-flex flex-column'>
      <Button className='mt-2' onClick={() => setTypeShow(true)}>Добавить тип</Button>
      <Button className='mt-2' onClick={() => setBrandShow(true)}>Добавить бренд</Button>
      <Button className='mt-2' onClick={() => setDeviceShow(true)}>Добавить устройство</Button>

      <CreateType show={typeShow} onHide={() => setTypeShow(false)}/>
      <CreateBrand show={brandShow} onHide={() => setBrandShow(false)}/>
      <CreateDevice show={deviceShow} onHide={() => setDeviceShow(false)}/>
    </Container>
  );
};

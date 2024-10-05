import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../main";
import { Row } from "react-bootstrap";
import { DeviceItem } from "../DeviceItem/DeviceItem";

export const DevicesList = observer(() => {
  // @ts-ignore
  const { device } = useContext(Context);

  return (
    <Row className='d-flex'>
      {
        device.devices.map((device: any) => {
          return <DeviceItem key={device.id} device={device}/>
        })
      }
    </Row>
  );
});

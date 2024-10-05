import { Card, Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../pages/utils/paths";

type DeviceProps = {
  device: any
}

export const DeviceItem = ({
  device
}: DeviceProps) => {
  const navigate = useNavigate()
  console.log(1, navigate)
  return (
    <Col md={3} onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
      <Card style={{ width: 300, cursor: 'pointer' }} border='light'>
        <Image width={150} height={150} src={device.img} />
        <div>{device.name}</div>
        <div>{device.rating}</div>
      </Card>
    </Col>
  );
};
// onClick={() => history(DEVICE_ROUTE + '/' + device.id)}

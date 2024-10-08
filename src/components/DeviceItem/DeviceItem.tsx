import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../pages/utils/paths";

type DeviceProps = {
  device: any
}

export const DeviceItem = ({
  device
}: DeviceProps) => {
  const navigate = useNavigate();
  return (
    <Col md={3} onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
      <Card style={{ width: 300, cursor: 'pointer' }} border='light'>
        <Image width={150} height={150} src={import.meta.env.VITE_APP_URL + device.img} />
        <div>{device.name}</div>
        <div>{device.rating}</div>
      </Card>
    </Col>
  );
};

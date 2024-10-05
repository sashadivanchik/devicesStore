import { Col, Container, Row } from "react-bootstrap";
import { TypeBar } from "../../components/TypeBar/TypeBar";
import { BrandBar } from "../../components/BrandBar/BrandBar";
import { DevicesList } from "../../components/DevicesList/DevicesList";

export const Shop = () => {
  return (
    <Container>
      <Row>
        <Col md={3} className='mt-3'>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DevicesList />
        </Col>
      </Row>
    </Container>
  );
};

import { Col, Container, Row } from "react-bootstrap";
import { TypeBar } from "../../components/TypeBar/TypeBar";
import { BrandBar } from "../../components/BrandBar/BrandBar";
import { DevicesList } from "../../components/DevicesList/DevicesList";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../../main";
import { fetchBrand, fetchDevices, fetchTypes } from "../../http/deviceApi";
import { Pages } from "../../components/Pages/Pages";

export const Shop = observer(() => {
  // @ts-ignore
  const { device } = useContext(Context);

  useEffect(() => {
      fetchTypes().then((data) => device.setTypes(data))
      fetchBrand().then((data) => device.setBrands(data))
      fetchDevices(null, null, 1, 2).then((data) => {
        device.setDevices(data.rows)
        device.setTotalCount(data.count)
      })
  }, [])

  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then((data) => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page, device.selectedType, device.selectedBrand])


  return (
    <Container>
      <Row>
        <Col md={3} className='mt-3'>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DevicesList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

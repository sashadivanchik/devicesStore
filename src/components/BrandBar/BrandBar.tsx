import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../main";
import { Card, Row } from "react-bootstrap";

export const BrandBar = observer(() => {
  // @ts-ignore
  const { device } = useContext(Context);

  return (
    <Row xs={1} md={2} className="g-4">
      {device.brands.map((brand: { id: number; name: string;}) => {
        return (
          <Card
            className='p-3'
            style={{ cursor: 'pointer'}}
            key={brand.id}
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          >
            {brand.name}
          </Card>
        )
      })}
    </Row>

  );
});

import { Button, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneDevices } from "../../http/deviceApi";

export const Device = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevices(id).then((data) => setDevice(data))
  }, [id])

  return (
    <div>
      <Image src={import.meta.env.VITE_APP_URL + device.img || ''} width={300} height={300} />
      <div>{device.name}</div>
      <div>{device.price}</div>

      <h2>Характеристики</h2>
      <div>
        { device.info.map((item: any) => {
          return <div key={item.id}>{item.title} : {item.description}</div>
        })}
      </div>
      <Button variant='outline-dark'>
        Добавить в корзину
      </Button>
    </div>
  );
};

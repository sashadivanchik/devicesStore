import { Button, Image } from "react-bootstrap";

export const Device = () => {
  const device =  {id: 1, name: 'iPhone 12', price: 25000, rating: 5, img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg'};
  const description = [
    { id: 1, title: 'Оперативная память', description: '5 гб'},
    { id: 2, title: 'Камера', description: '12 мп'},
    { id: 3, title: 'Процессор', description: 'Пентиум 3'},
    { id: 4, title: 'Количество ядер', description: '2'},
    { id: 5, title: 'Аккумулятор', description: '4000'}
  ]
  return (
    <div>
      <Image src={device.img} width={300} height={300} />
      <div>{device.name}</div>
      <div>{device.price}</div>

      <h2>Характеристики</h2>
      <div>
        { description.map((item) => {
          return <div key={item.id}>{item.title} : {item.description}</div>
        })}
      </div>
      <Button variant='outline-dark'>
        Добавить в корзину
      </Button>
    </div>
  );
};

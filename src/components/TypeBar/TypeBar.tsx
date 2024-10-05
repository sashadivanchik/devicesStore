import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../main";
import { ListGroup } from "react-bootstrap";

export const TypeBar = observer(() => {
  // @ts-ignore
  const { device } = useContext(Context);
  return (
    <ListGroup>
      {device.types.map((item: { id: number; name: string;}) => {
        return (
          <ListGroup.Item
            style={{ cursor: 'pointer'}}
            active={item.id === device.selectedType.id}
            onClick={() => device.setSelectedType(item)}
            key={item.id}
          >
            {item.name}
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  );
});

import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../main";
import { Pagination } from "react-bootstrap";

export const Pages = observer(() => {
  // @ts-ignore
  const { device } = useContext(Context);

  const pageCount = Math.ceil(device.totalCount / device.limit)
  console.log(device)
  const pages = [];
  console.log(device.totalCount, device.limit)
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1)
  }

  return (
    <Pagination className='mt-5'>
      {pages.map((item) => {
        return (
          <Pagination.Item
            key={item}
            active={device.page === item}
            onClick={() => device.setPage(item)}
          >
            {item}
          </Pagination.Item>
        )
      })}
    </Pagination>
  );
});

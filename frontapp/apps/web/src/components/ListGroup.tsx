import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let items = [
  //   "New York",
  //   "London",
  //   "Tokyo",
  //   "Paris",
  //   "San Fransisco",
  //   "Seattle",
  // ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // items = [];

  // let message = items.length == 0 ? <p>No item exist</p> : null;

  const getMessage = () => {
    return items.length == 0 && <p>No item exist</p>;
  };

  // const getEvent = (event: MouseEvent) => {
  //   console.log(event);
  // };

  // const handleClick = (index: number, item: string) => {
  //   console.log(index, item);
  // };

  return (
    <>
      <h1>{heading}</h1>
      {/* {message} */}
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              // handleClick(index, item);
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

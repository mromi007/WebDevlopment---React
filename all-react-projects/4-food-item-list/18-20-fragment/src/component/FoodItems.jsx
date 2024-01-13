import { useState } from "react";
import Item from "./Items";

let Foodltems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([])

  let onBuyButton = (item, event) => {
     let newItems = [...activeItems, item];
     setActiveItems(newItems);
  }

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItem={item}
            bought={activeItems.includes(item)}
            handleBuyBtn={(event) => onBuyButton(item, event)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default Foodltems;

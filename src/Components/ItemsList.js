import React, { useContext } from "react";
import Item from "./Item";
import { ItemsContext } from "../App";

function ItemsList() {
  const [items, setItems] = useContext(ItemsContext);
  console.log("ItemsList comp:", items);
  return (
    <ul>
      {items?.map((item, idx) => (
        <Item item={item} key={idx} />
      ))}
    </ul>
  );
}

export default ItemsList;

import React, { useContext } from "react";
import { ItemsContext } from "../App";

function Item({ item }) {
  const [items, setItems] = useContext(ItemsContext);
  const packedChangeHandler = (e) => {
    setItems((prevState) =>
      prevState.map((prevStateItem) =>
        prevStateItem.id === item.id
          ? { ...prevStateItem, isPacked: !prevStateItem.isPacked }
          : prevStateItem
      )
    );
  };
  const deleteItemHandler = (e) => {
    const newItems = items.filter((i, idx) => i.id !== item.id);
    setItems([...newItems]);
  };
  return (
    <li>
      <input
        type="checkbox"
        name="isPacked"
        id="isPacked"
        checked={item.isPacked}
        onChange={packedChangeHandler}
      />
      <span style={item.isPacked ? { textDecoration: "line-through" } : {}}>
        {item.count} {item.itemName}
      </span>{" "}
      <span onClick={deleteItemHandler} data-itemid={item.id}>
        ❌
      </span>
    </li>
  );
}

export default Item;

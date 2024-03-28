import React, { useContext } from "react";
import { ItemsContext } from "../App";

function SortingItems() {
  const [items, setItems] = useContext(ItemsContext);
  const handleChangeSorting = (e) => {
    switch (e.target.value) {
      case "inputOrder":
        const sortedItems = items.slice().sort((a, b) => a.count - b.count);
        setItems([...sortedItems]);
        break;
      case "desc":
        const filteredItems = items
          .slice()
          .sort((a, b) => a.itemName.localeCompare(b.itemName));
        console.log(filteredItems);
        setItems([...filteredItems]);
        break;
      case "packed":
        const filteredUncheckedItems = items
          .slice()
          .sort((x, y) =>
            x.isPacked === y.isPacked ? 0 : x.isPacked ? -1 : 1
          );
        console.log(filteredUncheckedItems);
        setItems([...filteredUncheckedItems]);
        break;
      default:
        break;
    }
  };
  const clearListHandler = () => {
    setItems([]);
  };
  return (
    <div className="actions">
      <select onChange={handleChangeSorting}>
        <option value={"inputOrder"}>Sort By Input Order</option>
        <option value={"desc"}>Sort By Description</option>
        <option value={"packed"}>Sort By Packed Status</option>
      </select>
      <button onClick={clearListHandler}>Clear List</button>
    </div>
  );
}

export default SortingItems;

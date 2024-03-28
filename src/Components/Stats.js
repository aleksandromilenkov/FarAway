import React, { useContext } from "react";
import { ItemsContext } from "../App";
function Stats() {
  const [items, setItems] = useContext(ItemsContext);
  const itemsLength = items.reduce((acc, val) => acc + +val.count, 0);
  const packedItems = items.filter((item) => item.isPacked === true);
  const packedItemsLength = packedItems.reduce(
    (acc, val) => acc + +val.count,
    0
  );
  let packedItemsPercentage = (packedItemsLength * 100) / itemsLength;
  if (packedItemsLength === 0) {
    packedItemsPercentage = 0;
  }
  console.log("stats");
  return (
    <footer className="stats">
      <em>
        {packedItemsPercentage === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${itemsLength} items in your list and you already packed ${
              packedItems.length
            } items (${packedItemsPercentage.toFixed(2)}%)`}
      </em>
    </footer>
  );
}

export default Stats;

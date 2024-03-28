import React from "react";
import ItemsList from "./ItemsList";
import SortingItems from "./SortingItems";

function PackingList() {
  return (
    <div className="list">
      <ItemsList />
      <SortingItems />
    </div>
  );
}

export default PackingList;

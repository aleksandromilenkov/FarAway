import React, { useContext } from "react";
import { ItemsContext } from "../App";

function TripForm() {
  const [items, setItems] = useContext(ItemsContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isNaN(e.target.numberOfItems.value)) {
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 10000),
      count: e.target.numberOfItems.value,
      itemName: e.target.itemName.value,
      isPacked: false,
    };
    setItems((prevState) => [...prevState, item]);
    e.target.numberOfItems.value = "";
    e.target.itemName.value = "";
  };
  return (
    <form action="" className="add-form" onSubmit={handleFormSubmit}>
      <label htmlFor="numberOfItems">What do you need for your trip?</label>
      <input type="number" name="numberOfItems" id="numberOfItems" />
      <input type="text" name="itemName" id="itemName" placeholder="Item..." />
      <button type="submit">ADD</button>
    </form>
  );
}

export default TripForm;

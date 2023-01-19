import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearch(searched) {
    const filteredItems = itemData.filter((item) =>
      item.name.toUpperCase().includes(searched.toUpperCase())
    );
    setItems(filteredItems);
  }

  function handleAdd(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
        items={items}
        onSearch={handleSearch}
        onItemFormSubmit={handleAdd}
      />
    </div>
  );
}

export default App;

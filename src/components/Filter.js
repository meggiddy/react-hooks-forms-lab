import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  const [filter, setFilter] = useState("");
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        value={filter}
        placeholder="Search..."
        onChange={(event) => {
          setFilter(event.target.value);
          onSearchChange(event.target.value);
        }}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

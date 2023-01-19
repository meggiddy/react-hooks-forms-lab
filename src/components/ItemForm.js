import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  return (
    <form className="NewItem">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          name="name"
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button
        onSubmit={(event) => {
          const newItem = {
            id: uuid(),
            name,
            category,
          };
          onItemFormSubmit(newItem)
        }}
        type="submit"
      >
        Add to List
      </button>
    </form>
  );
}

export default ItemForm;

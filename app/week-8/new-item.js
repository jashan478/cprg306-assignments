"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    onAddItem({
      id: Date.now(),
      name,
      quantity,
      category,
    });
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Add Item</h2>

      <div className="flex flex-col gap-2 mb-2">
        <input
          type="text"
          placeholder="Item name (e.g., milk, 4 L 🥛)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="number"
          min="1"
          max="20"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border p-2 rounded"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="produce">Produce</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="dairy">Dairy</option>
          <option value="household">Household</option>
          <option value="dry goods">Dry Goods</option>
          <option value="canned goods">Canned Goods</option>
        </select>
      </div>

      <button
        type="submit"
        className="px-3 py-1 bg-green-500 text-white rounded"
      >
        Add Item
      </button>
    </form>
  );
}



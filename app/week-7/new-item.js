"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity((n) => Math.min(n + 1, 20));
  const decrement = () => setQuantity((n) => Math.max(n - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newItem = { name, quantity, category };
    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-80 space-y-4"
    >
      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700">
          Item Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., milk, 4 L 🥛"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700">
          Quantity (1–20)
        </label>
        <p className="mb-2 text-sm font-medium">
          Current: <span className="text-blue-600 font-semibold">{quantity}</span>
        </p>

        <div className="flex space-x-4 items-center">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-4 py-2 rounded font-bold transition ${
              quantity === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-gray-300 hover:bg-gray-400 text-gray-900"
            }`}
          >
            −
          </button>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`px-4 py-2 rounded font-bold transition ${
              quantity === 20
                ? "bg-blue-300 text-white cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            +
          </button>
        </div>

        <p className="mt-2 text-xs text-gray-500">Allowed range: 1–20</p>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="rounded bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 w-full"
      >
        Add Item
      </button>
    </form>
  );
}

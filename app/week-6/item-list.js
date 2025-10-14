"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="flex flex-col items-center w-full">
      {/* Sort Buttons Row */}
      <div className="flex items-center justify-center gap-3 mb-6 w-full max-w-md">
        <span className="font-semibold">Sort by:</span>

        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-1 border rounded ${
            sortBy === "name"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-black border-gray-300"
          }`}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-1 border rounded ${
            sortBy === "category"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-black border-gray-300"
          }`}
        >
          Category
        </button>
      </div>

      {/* Grocery List */}
      <ul className="flex flex-col gap-3 w-full max-w-md">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}



"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

 return (
  <div className="w-full max-w-2xl mx-auto flex flex-col items-start">
    {/* Sort buttons */}
    <div className="flex items-center gap-3 mb-5">
      <span className="font-medium text-gray-600">Sort by:</span>
      <button
        onClick={() => setSortBy("name")}
        className={`px-4 py-1 rounded text-sm ${
          sortBy === "name"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        className={`px-4 py-1 rounded text-sm ${
          sortBy === "category"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Category
      </button>
    </div>

    {/* Item list */}
    <ul className="w-full flex flex-col gap-3">
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

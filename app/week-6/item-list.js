"use client";
 
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";
 
export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
 
 
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });
 
  return (
    <div className="p-3">
   
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-gray-500 font-medium">Sort by:</span>
 
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-1 rounded ${
            sortBy === "name"
              ? "bg-blue-600 text-white"
              : "bg-white border text-gray-800 hover:bg-gray-100"
          }`}
        >
          Name
        </button>
 
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-1 rounded ${
            sortBy === "category"
              ? "bg-blue-600 text-white"
              : "bg-white border text-gray-800 hover:bg-gray-100"
          }`}
        >
          Category
        </button>
      </div>
 
   
      <ul className="space-y-2 p-3 mr-20">
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
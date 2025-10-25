"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    const itemWithId = { 
      ...newItem, 
      id: Math.random().toString(36).substring(2, 9) 
    };
    setItems((prevItems) => [...prevItems, itemWithId]);
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Week 7 — Shopping List</h1>

     
      <div className="bg-white text-gray-900 rounded-lg shadow-xl w-[460px] p-6 mb-8">
        <NewItem onAddItem={handleAddItem} />
      </div>

  
      <div className="w-[460px]">
        <ItemList items={items} />
      </div>
    </main>
  );
}
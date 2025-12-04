"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../../contexts/AuthContexts";

import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [selectedIngredient, setSelectedIngredient] = useState("");

  useEffect(() => {
    if (!user) return;
    loadItems();
  }, [user]);

  async function loadItems() {
    const data = await getItems(user.uid);
    setItems(data);
  }

  async function handleAddItem() {
    if (!name.trim()) return;

    const newItem = { name, quantity, category };
    const id = await addItem(user.uid, newItem);

    setItems([...items, { id, ...newItem }]);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  const handleSort = (key) => setSortBy(key);

  const sortedItems = [...items].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])+/g, "")
      .trim()
      .toLowerCase();

    setSelectedIngredient(cleanedName);
  };

  if (!user) {
    return (
      <p className="p-4 text-center text-red-500">
        You must be logged in to view this page.
      </p>
    );
  }

  return (
    <main className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping List + Meal Ideas</h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        <section className="flex-1">
          <div className="border rounded p-4 bg-white shadow mb-6">
            <label className="block font-medium mb-1">Item Name</label>
            <input
              type="text"
              placeholder="e.g., milk, 4 L 🥛"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded p-2 mb-3"
            />

            <label className="block font-medium mb-1">Quantity (1–20)</label>
            <div className="flex items-center gap-3 mb-3">
              <p className="text-gray-700">Current: {quantity}</p>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                −
              </button>
              <button
                onClick={() => setQuantity(Math.min(20, quantity + 1))}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                +
              </button>
            </div>

            <label className="block font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded p-2 mb-4"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="household">Household</option>
            </select>

            <button
              onClick={handleAddItem}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Add Item
            </button>
          </div>

          <div className="mb-4 flex items-center gap-2">
            <p className="font-medium">Sort by:</p>
            <button
              onClick={() => handleSort("name")}
              className={`px-3 py-1 rounded ${
                sortBy === "name"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Name
            </button>
            <button
              onClick={() => handleSort("category")}
              className={`px-3 py-1 rounded ${
                sortBy === "category"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Category
            </button>
          </div>

          <ItemList items={sortedItems} onSelect={handleItemSelect} />
        </section>

        <section className="flex-1 p-4">
          <MealIdeas ingredient={selectedIngredient} />
        </section>
      </div>
    </main>
  );
}



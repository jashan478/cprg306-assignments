"use client";

import { useState, useEffect } from "react";

// --- Function to fetch meal ideas from TheMealDB API ---
async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMeals() {
      if (!ingredient) {
        setMeals([]);
        return;
      }

      
      const cleanIngredient = ingredient
        .split(",")[0]
        .replace(
          /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])+/g,
          ""
        )
        .trim()
        .toLowerCase();

      const fetched = await fetchMealIdeas(cleanIngredient);
      setMeals(fetched);
    }

    loadMeals();
  }, [ingredient]);

  return (
    <div className="text-gray-900 dark:text-white">
      <h2 className="text-xl font-semibold mb-4">
        {ingredient
          ? `Meal ideas for “${ingredient}”`
          : "Meal ideas (select an item)"}
      </h2>

      {/* No item selected */}
      {!ingredient && (
        <p className="text-gray-600 dark:text-gray-400">
          Choose an item to see ideas.
        </p>
      )}

      {/* No meals found */}
      {ingredient && meals.length === 0 && (
        <p className="text-gray-600 dark:text-gray-400">
          No meals found for this ingredient.
        </p>
      )}

      {/* Meal list */}
      {meals.length > 0 && (
        <ul className="grid grid-cols-2 gap-3">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="border border-gray-300 dark:border-gray-600 
                         rounded-xl px-4 py-3 text-center 
                         bg-white dark:bg-gray-900
                         shadow-sm hover:shadow-md 
                         hover:bg-gray-100 dark:hover:bg-gray-800 
                         transition duration-200"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

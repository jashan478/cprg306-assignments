// item-list.js
import Item from "./item";

export default function ItemList() {
  const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "Dairy",
  };

  const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "Bakery",
  };

  const item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "Dairy",
  };

  const item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "Produce",
  };

  const item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "Produce",
  };

  const item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "Meat",
  };

  const item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "Canned Goods",
  };

  const item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "Dry Goods",
  };

  const item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "Household",
  };

  const item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "Household",
  };

  const item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "Household",
  };

  const item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "Household",
  };

  const items = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
    item12,
  ];

  return (
    <section>
    <p>Hello</p>
    <ul className="space-y-2 p-3 mr-20">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
    </section>
  );
}

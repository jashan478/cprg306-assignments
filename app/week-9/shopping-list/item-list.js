import Item from "./item";

export default function ItemList({ items, onSelect }) {
  return (
    <ul className="space-y-3 w-full max-w-xl mx-auto">
      {items.map((item, index) => (
        <Item key={index} item={item} onSelect={onSelect} />
      ))}
    </ul>
  );
}


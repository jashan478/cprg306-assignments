export default function Item({ item, onSelect }) {
  return (
    <li
      onClick={() => onSelect(item)}
      className="w-full p-3 border rounded bg-white shadow-sm cursor-pointer hover:bg-gray-100"
    >
      <p className="font-medium text-black">{item.name}</p>
      <p className="text-black">Quantity: {item.quantity}</p>
      <p className="text-black capitalize">Category: {item.category}</p>
    </li>
  );
}








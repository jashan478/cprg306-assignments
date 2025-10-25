export default function Item({ name, quantity, category }) {
  return (
    <li className="w-full bg-white border rounded-lg shadow-sm p-4">
      <p className="font-medium text-gray-900">{name}</p>
      <p className="text-gray-700">Quantity: {quantity}</p>
      <p className="text-gray-700 capitalize">Category: {category}</p>
    </li>
  );
}

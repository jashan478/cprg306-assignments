export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-gray-300 rounded-lg p-4 w-full max-w-md mx-auto shadow-sm bg-white">
      <p className="font-medium text-lg">{name}</p>
      <p className="text-gray-700">Quantity: {quantity}</p>
      <p className="text-gray-700 capitalize">Category: {category}</p>
    </li>
  );
}


export default function Item({ name, quantity, category }) {
  return (
    <li className="w-full max-w-xl mx-auto p-2.5 border rounded bg-white">
      <p className="font-medium text-black pr-550px">{name}</p>
      <p className="font-medium text-black">Quantity: {quantity}</p>
      <p className="font-medium text-black">Category: {category}</p>
    </li>
  );
}    
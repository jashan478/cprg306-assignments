// page.js
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
      <h1 className=" text-2xl font-bold mb-0.25 text-gray-800">
        Shopping List
      </h1>
    <ItemList />
    </div>
  </main>
  );
}

import NewItem from "./new-item";
 
export default function Page() {
  return (
<main className="flex flex-col items-center">
      {/* Container for title + card */}
<div className="w-80">
<h1 className="text-2xl font-bold mb-4 text-left">Add New Item</h1>
<NewItem />
</div>
</main>
  );
}
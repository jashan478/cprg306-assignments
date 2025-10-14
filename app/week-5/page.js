import NewItem from "./new-item";
 
export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-80">
        <h1 className="text-2xl font-bold mb-4 text-left">Week 5 — New Item</h1>
        <NewItem />
      </div>
    </main>
  );
}

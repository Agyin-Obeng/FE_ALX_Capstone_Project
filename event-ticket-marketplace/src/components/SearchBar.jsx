export default function SearchBar() {
  return (
    <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg">
      <input
        type="text"
        placeholder="Search events..."
        className="flex-grow px-4 py-2 rounded border outline-none"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Search
      </button>
    </div>
  );
}

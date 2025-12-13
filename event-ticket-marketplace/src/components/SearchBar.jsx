import { useState, useEffect, useRef } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const debounceRef = useRef(null);

  // Call onSearch when user types, after 300ms of inactivity
  useEffect(() => {
    // clear previous timer
    if (debounceRef.current) clearTimeout(debounceRef.current);

    // set new timer
    debounceRef.current = setTimeout(() => {
      if (typeof onSearch === "function") onSearch(query.trim());
    }, 300);

    // cleanup on unmount or when query changes
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, onSearch]);

  // Immediate search on form submit / button click
  const handleSubmit = (e) => {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (typeof onSearch === "function") onSearch(query.trim());
  };

  // Optional: clear input helper
  const handleClear = () => {
    setQuery("");
    if (typeof onSearch === "function") onSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-4 bg-gray-100 rounded-lg"
    >
      <input
        type="text"
        placeholder="Search events..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow px-4 py-2 rounded border outline-none focus:ring focus:border-blue-500"
      />

      {query ? (
        <button
          type="button"
          onClick={handleClear}
          className="px-3 py-2 bg-gray-200 text-gray-700 rounded"
        >
          Clear
        </button>
      ) : null}

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

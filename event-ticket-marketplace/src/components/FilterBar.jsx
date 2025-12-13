import { useState } from "react";

export default function FilterBar({ onFilter }) {
  const categories = ["All", "Concert", "Conference", "Sports", "Festival"];
  const [active, setActive] = useState("All");

  const handleClick = (category) => {
    setActive(category);
    if (typeof onFilter === "function") {
      onFilter(category);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 bg-gray-100 p-3 rounded-lg">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-4 py-2 rounded-lg border transition 
            ${active === cat 
              ? "bg-blue-600 text-white border-blue-700" 
              : "bg-white text-gray-700 hover:bg-gray-200 border-gray-300"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

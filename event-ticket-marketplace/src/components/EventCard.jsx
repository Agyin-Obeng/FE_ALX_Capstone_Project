import { Link } from "react-router-dom";
import { useState } from "react";

export default function EventCard({ id, title, location, date, price, image }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    if (!id) return false;
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.includes(id);
  });

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId) => favId !== id);
      setIsFavorite(false);
    } else {
      updatedFavorites = [...favorites, id];
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <Link
      to={`/events/${id}`}
      className="group relative bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-44 sm:h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-3 text-xl hover:scale-110 transition"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-lg font-semibold leading-tight line-clamp-2">
          {title}
        </h2>

        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm text-gray-400">{date}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-blue-600 font-bold text-lg">
            GHS {price}
          </span>

          <span className="text-sm text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}

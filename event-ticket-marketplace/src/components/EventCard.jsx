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
      className="relative block bg-white rounded-lg border shadow p-4 hover:shadow-xl transition hover:-translate-y-1"
    >
      <div className="w-full h-44 sm:h-48 overflow-hidden rounded-md">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <h2 className="text-xl font-bold mt-3">{title}</h2>
      <p className="text-gray-600">{location}</p>
      <p className="text-gray-500">{date}</p>

      <div className="mt-2 flex justify-between items-center">
        <p className="font-semibold text-blue-600">GHS {price}</p>

        <button
          onClick={toggleFavorite}
          className="text-xl focus:outline-none transform transition-transform duration-200 hover:scale-125"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
    </Link>
  );
}

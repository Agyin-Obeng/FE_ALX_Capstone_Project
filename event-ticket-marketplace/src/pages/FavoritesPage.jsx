import EventCard from "../components/EventCard";
import events from "../eventsData";

export default function FavoritesPage() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteEvents = events.filter((e) => favorites.includes(e.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">My Favorites</h1>

      {favoriteEvents.length === 0 ? (
        <p className="text-gray-600">You have no favorite events yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favoriteEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      )}
    </div>
  );
}

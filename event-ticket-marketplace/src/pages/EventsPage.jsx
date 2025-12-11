import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

export default function EventsPage() {
  // temporary mock data
  const events = [
    {
      id: 1,
      title: "Live Concert: Agyin & Friends",
      location: "Accra, Ghana",
      date: "Feb 20, 2025",
      price: 150,
      image: "https://images.unsplash.com/photo-1485905552027-48c8b964273f"
    },
    {
      id: 2,
      title: "Tech Conference 2025",
      location: "Kumasi, Ghana",
      date: "Mar 14, 2025",
      price: 300,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Browse Events</h1>

      <SearchBar />
      <div className="mt-3">
      <FilterBar />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {events.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}

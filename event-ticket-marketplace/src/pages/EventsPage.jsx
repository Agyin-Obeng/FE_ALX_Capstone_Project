import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import EventCard from "../components/EventCard";
import { getEvents } from "../services/eventsService";

export default function EventsPage() {
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then((data) => {
        setAllEvents(data);
        setFilteredEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    const results = allEvents.filter((event) =>
      event.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(results);
  };

  const handleFilter = (category) => {
    if (category === "All") setFilteredEvents(allEvents);
    else setFilteredEvents(allEvents.filter((e) => e.category === category));
  };

  if (loading) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-600 text-lg">Loading events...</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Browse Events</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-3">
        <FilterBar onFilter={handleFilter} />
      </div>

      {/* Event Cards OR Empty State */}
      <div className="mt-6">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-lg border">
            <h2 className="text-2xl font-semibold text-gray-700">No events found</h2>
            <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

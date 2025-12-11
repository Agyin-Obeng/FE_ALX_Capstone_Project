export default function EventDetailPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img 
        src="https://images.unsplash.com/photo-1485905552027-48c8b964273f"
        alt="Event"
        className="w-full h-60 md:h-80 object-cover rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-6">Event Title</h1>
      <p className="text-gray-600 mt-2">Location: Accra, Ghana</p>
      <p className="text-gray-600">Date: Feb 20, 2025</p>

      <p className="text-blue-600 text-2xl font-semibold mt-4">GHS 150</p>

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
        Buy Ticket
      </button>
    </div>
  );
}

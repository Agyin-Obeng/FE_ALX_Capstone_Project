import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEventById } from "../services/eventsService";

export default function EventDetailPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  const totalPrice = event ? event.price * quantity : 0;



   useEffect(() => {
   let isMounted = true;

   async function loadEvent() {
     try {
        const data = await getEventById(id);
        if (isMounted) {
          setEvent(data);
         setError("");
        }
     } catch {
        if (isMounted) {
         setEvent(null);
         setError("Event not found");
        }
     } finally {
        if (isMounted) {
          setLoading(false);
       }
      }
   }

   setLoading(true);
   loadEvent();

   return () => {
     isMounted = false;
   };
  }, [id]);


  if (loading) {
    return <div className="p-10 text-center text-lg">Loading event…</div>;
  }

  if (error || !event) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">Event not found</h1>
        <Link to="/events" className="text-blue-600 underline mt-4 inline-block">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      
      {/* Back Navigation */}
      <Link
        to="/events"
        className="inline-block mb-6 text-blue-600 hover:underline"
      >
        ← Back to Events
      </Link>

      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Event Info */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Location:</span> {event.location}
          </p>

          <p className="text-gray-600 mb-6">
            <span className="font-semibold">Date:</span> {event.date}
          </p>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-3">
              About this event
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This event brings together amazing performances, insightful
              sessions, and unforgettable moments. Whether you’re attending
              for networking, entertainment, or learning, this is an
              experience you won’t want to miss.
            </p>
          </div>
          {showCheckout && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
    <div className="bg-white rounded-xl p-6 max-w-md w-full transform transition-all duration-300 animate-modal">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <p className="mb-2">
        <strong>Event:</strong> {event.title}
      </p>
      <p className="mb-2">
        <strong>Tickets:</strong> {quantity}
      </p>
      <p className="mb-4">
        <strong>Total:</strong> GHS {totalPrice}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => setShowCheckout(false)}
          className="flex-1 border py-2 rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            const history =
              JSON.parse(localStorage.getItem("checkoutHistory")) || [];

            history.push({
              eventId: event.id,
              title: event.title,
              quantity,
              total: event.price * quantity,
              date: new Date().toISOString(),
            });

          localStorage.setItem(
            "checkoutHistory",
            JSON.stringify(history)
          );

          alert("Payment successful!");
          setShowCheckout(false);
      }}

          className="flex-1 bg-blue-600 text-white py-2 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
)}

        </div>

        {/* Right: Purchase Card */}
        <div className="border rounded-xl p-6 shadow-sm h-fit">
  <p className="text-3xl font-bold text-blue-600 mb-4">
    GHS {totalPrice}
  </p>

  {/* Ticket Quantity */}
  <div className="mb-4">
    <label className="block text-gray-600 mb-2 font-medium">
      Number of Tickets
    </label>
   <div className="relative w-32">
  <select
    value={quantity}
    onChange={(e) => setQuantity(Number(e.target.value))}
    className="w-full appearance-none border rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    {[0, 1, 2, 3, 4, 5].map((num) => (
      <option key={num} value={num}>
        {num}
      </option>
    ))}
  </select>

  {/* Custom dropdown arrow */}
  <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
    ▼
  </span>
</div>
  </div>

  {/* Buy Ticket Button */}     
<button
  disabled={quantity === 0}
  onClick={() => setShowCheckout(true)}
  className={`w-full py-4 rounded-lg text-lg font-semibold transition
    ${
      quantity === 0
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-blue-600 text-white hover:bg-blue-700"
    }`}
>
  Buy Ticket
</button>


  <p className="text-sm text-gray-500 mt-3 text-center">
    Secure checkout • Instant confirmation
  </p>
</div>

      </div>
    </div>
  );
}

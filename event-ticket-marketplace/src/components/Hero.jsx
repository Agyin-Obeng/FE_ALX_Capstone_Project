import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold">Find Your Next Event</h1>
      <p className="mt-4 text-lg md:text-xl">
        Concerts, conferences, shows & more.
      </p>

      <Link 
        to="/events"
        className="inline-block mt-8 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200"
      >
        Browse Events
      </Link>
    </section>
  );
}

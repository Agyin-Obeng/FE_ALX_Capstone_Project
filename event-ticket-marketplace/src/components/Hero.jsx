import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Discover Events That Matter
        </h1>

        <p className="mt-6 text-lg md:text-xl text-blue-100">
          Concerts, conferences, workshops, and experiences across Ghana.
        </p>

        <Link
          to="/events"
          className="inline-block mt-10 px-10 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
        >
          Browse Events
        </Link>
      </div>
    </section>
  );
}

import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <Hero />

        <section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Popular Categories
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      
      <Link
        to="/events?category=Concert"
        className="group bg-white rounded-2xl p-6 sm:p-8 shadow hover:shadow-xl transition"
      >
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-3xl mb-6 group-hover:scale-110 transition">
          🎵
        </div>
        <h3 className="text-xl font-semibold mb-2">Concerts</h3>
        <p className="text-gray-600 text-sm">
          Live music, performances, and unforgettable shows.
        </p>
      </Link>

      <Link
        to="/events?category=Show"
        className="group bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
      >
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 text-3xl mb-6 group-hover:scale-110 transition">
          🎤
        </div>
        <h3 className="text-xl font-semibold mb-2">Shows</h3>
        <p className="text-gray-600 text-sm">
          Comedy, theater, talks, and live entertainment.
        </p>
      </Link>

      <Link
        to="/events?category=Sports"
        className="group bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
      >
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 text-3xl mb-6 group-hover:scale-110 transition">
          🏆
        </div>
        <h3 className="text-xl font-semibold mb-2">Sports</h3>
        <p className="text-gray-600 text-sm">
          Matches, tournaments, and competitive events.
        </p>
      </Link>

    </div>
  </div>
</section>

    </div>
  );
}

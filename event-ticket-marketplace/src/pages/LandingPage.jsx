import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <Hero />

        <section className="px-6 py-20 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">Popular Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
  <Link
    to="/events?category=Concert"
    className="p-8 bg-white shadow rounded-xl hover:shadow-lg transition text-center"
  >
    <div className="text-4xl mb-3">🎵</div>
    <h3 className="text-xl font-semibold">Concerts</h3>
  </Link>

  <Link
    to="/events?category=Show"
    className="p-8 bg-white shadow rounded-xl hover:shadow-lg transition text-center"
  >
    <div className="text-4xl mb-3">🎤</div>
    <h3 className="text-xl font-semibold">Shows</h3>
  </Link>

  <Link
    to="/events?category=Sports"
    className="p-8 bg-white shadow rounded-xl hover:shadow-lg transition text-center"
  >
    <div className="text-4xl mb-3">🏆</div>
    <h3 className="text-xl font-semibold">Sports</h3>
  </Link>
</div>

      </section>
    </div>
  );
}

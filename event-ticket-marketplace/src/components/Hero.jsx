import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Discover & Book <br className="hidden md:block" />
          Amazing Events
        </h1>

        <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          Concerts, conferences, sports, and live experiences — all in one place.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            to="/events"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 hover:scale-[1.02] transition-all"
          >
            Browse Events
          </Link>
        </div>
      </div>
    </section>
  );
}

import Hero from "../components/Hero";

export default function LandingPage() {
  return (
    <div>
      <Hero />

      <section className="px-4 sm:px-6 py-12 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">Popular Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white shadow rounded-lg">🎵 Concerts</div>
          <div className="p-6 bg-white shadow rounded-lg">🎤 Shows</div>
          <div className="p-6 bg-white shadow rounded-lg">🏆 Sports</div>
        </div>
      </section>
    </div>
  );
}

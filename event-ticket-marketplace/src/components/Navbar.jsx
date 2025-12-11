import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">Eventify</h1>

        <div className="flex gap-6 text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/events" className="hover:text-blue-600">Events</Link>
          <Link to="/login" className="hover:text-blue-600">Login</Link>
        </div>
      </div>
    </nav>
  );
}

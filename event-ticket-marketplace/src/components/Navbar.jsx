import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  // ✅ Hook must be INSIDE the component
  const { user, logout } = useAuth();

  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:opacity-80 transition"
        >
          Eventify
        </Link>

        {/* Navigation */}
        <div className="flex gap-4 sm:gap-6 text-gray-700 items-center text-sm sm:text-base">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/events" className="hover:text-blue-600">Events</Link>
          <Link to="/favorites" className="hover:text-blue-600">Favorites</Link>

          {user && (
            <Link to="/history" className="hover:text-blue-600">
            History
          </Link>
        )}


          {user ? (
            <button
              onClick={logout}
              className="hover:text-blue-600"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-blue-600 font-medium">
              Sign Up / Login
            </Link>

          )}
        </div>
      </div>
    </nav>
  );
}

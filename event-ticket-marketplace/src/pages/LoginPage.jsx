import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function LoginPage() {
  const { login } = useAuth();      // ✅ inside component
  const [email, setEmail] = useState(""); // ✅ inside component
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login to Eventify
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="button"
            onClick={() => {
                login(email);
                navigate("/");
            }}

            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">
                 Don’t have an account?{" "}
                  <Link to="/signup" className="text-blue-600 hover:underline">
                   Sign up
                </Link>
            </p>
        </form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Demo login — no real authentication
        </p>
      </div>
    </div>
  );
}

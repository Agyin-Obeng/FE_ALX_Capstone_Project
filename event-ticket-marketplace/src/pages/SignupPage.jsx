import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create an Account
        </h1>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full border rounded-lg px-4 py-3 mb-4"
        />

        <button
          onClick={() => {
          login(email);
          navigate("/");
        }}

          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
        >
          Sign Up
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          Demo signup — no real account created
        </p>
      </div>
    </div>
  );
}

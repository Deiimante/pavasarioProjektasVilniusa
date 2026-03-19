import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center text-center text-white" style={{ backgroundColor: "#007bff" }}>
      {/* Hero Content */}
      <div className="container">
        <h1 className="display-3 fw-bold mb-3">Welcome to Wealthwise</h1>
        <p className="lead mb-4">
          Your finance companion. Manage your wealth, track your goals, and achieve financial freedom.
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-light btn-lg"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="btn btn-outline-light btn-lg"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
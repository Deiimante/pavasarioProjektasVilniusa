import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Here you can later add backend / validation
    console.log("User:", { name, email, password });

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 vh-100">

        {/* LEFT SIDE */}
        <div className="col-lg-6 bg-white d-flex flex-column">
          
          {/* Header */}
          <header className="p-4 d-flex justify-content-start">
            <div className="d-flex align-items-center gap-2">
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded-3"
                style={{ width: "32px", height: "32px" }}
              >
                <i className="bi bi-cash text-white"></i>
              </div>
              <span className="fw-bold fs-5 mb-0">WealthWise</span>
            </div>
          </header>

          {/* Form */}
          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <div className="w-100" style={{ maxWidth: "420px", padding: "40px 20px" }}>

              <div className="mb-5 text-center">
                <h2 className="fw-bold">Join WealthWise</h2>
                <p className="text-muted">
                  Start your journey to better budget management.
                </p>
              </div>

              <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="mb-3">
                  <label className="form-label small fw-bold text-uppercase text-muted">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light border-0"
                    placeholder="Enter your full name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label small fw-bold text-uppercase text-muted">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg bg-light border-0"
                    placeholder="name@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label small fw-bold text-uppercase text-muted">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg bg-light border-0"
                    placeholder="Create a strong password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Terms */}
                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label small text-muted">
                    I agree to Terms & Privacy Policy
                  </label>
                </div>

                {/* Submit */}
                <button className="btn btn-primary btn-lg w-100 mb-4">
                  Create Account
                </button>

                {/* Login link */}
                <p className="text-center text-muted">
                  Already have an account?{" "}
                  <Link to="/login" className="fw-bold text-decoration-none">
                    Log In
                  </Link>
                </p>

              </form>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-6 bg-primary d-flex align-items-center justify-content-center text-white p-5">
          <div className="text-center">
            <i className="bi bi-cash-stack display-3"></i>
            <h1 className="fw-bold mt-3">WealthWise</h1>
            <p className="opacity-75">
              Manage your money smarter and reach your goals faster.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
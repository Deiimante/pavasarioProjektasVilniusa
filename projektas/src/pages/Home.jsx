mport "bootstrap/dist/css/bootstrap.min.css";
import "./theme.css";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container d-flex vh-100">

      {/* LEFT SIDE — BLUE PROMO PANEL */}
      <div className="home-left d-flex flex-column justify-content-center text-white p-5">
        <h1 className="fw-bold mb-4">Master your money with WealthWise.</h1>

        <p className="mb-4 home-left-text">
          Join thousands of users managing their budgets, tracking investments,
          and reaching financial freedom with clarity and confidence.
        </p>

        <div className="testimonial-box p-4 mt-3">
          <p className="mb-2">
            “WealthWise completely changed how I look at my monthly spending.
            I’ve saved over €5,000 in just six months.”
          </p>
          <h6 className="fw-bold mb-0">— David Chen, Financial Analyst</h6>
        </div>
      </div>

      {/* RIGHT SIDE — WHITE CONTENT PANEL */}
      <div className="home-right d-flex flex-column justify-content-center p-5">
        <h2 className="fw-bold mb-3">Welcome to WealthWise</h2>

        <p className="text-muted mb-4">
          Your finance companion. Manage your wealth, track your goals,
          and achieve financial freedom.
        </p>

        <div className="d-flex flex-column align-items-center gap-3 mt-4">
        <a href="/login" className="home-button home-button-primary">Login</a>
        <a href="/signup" className="home-button home-button-outline">Sign Up</a>
        </div>


      </div>

    </div>
  );
}
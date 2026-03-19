import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // adjust path if needed
import "./Dashboard.css"; // optional if you want custom styling

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleNew = () => {
    navigate("/Transactions");
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">

        {/* SIDEBAR */}
        <div className="col-auto p-0">
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="col p-4 dashboard-main">

          {/* HEADER */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold">Financial Overview</h2>
            </div>

            <div className="d-flex gap-2">
              
              <button className="btn btn-primary" onClick={handleNew}>
                + New Transaction
              </button>
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>

          {/* TOP CARDS */}
          <div className="row g-4 mb-4">

            <div className="col-md-4">
              <div className="card shadow-sm border-0 p-4 bg-primary text-white">
                <p className="mb-1 opacity-75">Total Balance</p>
                <h2 className="fw-bold">$12,450.00</h2>
                <small>↑ +2.5% this month</small>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0 p-4">
                <p className="mb-1 text-muted">Monthly Income</p>
                <h2 className="fw-bold">$5,200.00</h2>
                <small className="text-success fw-bold">+12% vs last month</small>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0 p-4">
                <p className="mb-1 text-muted">Monthly Expenses</p>
                <h2 className="fw-bold">$3,120.00</h2>
                <small className="text-danger fw-bold">↑ +5.4% vs last month</small>
              </div>
            </div>

          </div>

          {/* MIDDLE SECTION */}
          <div className="row g-4 mb-4">

            {/* SPENDING ANALYSIS */}
            <div className="col-lg-8">
              <div className="card shadow-sm border-0 p-4 h-100">
                <h4 className="fw-bold mb-3">Spending Analysis</h4>
                <p className="text-muted mb-1">Breakdown of your monthly expenses</p>
                <h5 className="fw-bold">$3,120 TOTAL</h5>

                <ul className="list-group list-group-flush mt-3">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Housing</span>
                    <strong>$1,248 (40%)</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Food & Dining</span>
                    <strong>$780 (25%)</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Entertainment</span>
                    <strong>$468 (15%)</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Others</span>
                    <strong>$624 (20%)</strong>
                  </li>
                </ul>

                <button className="btn btn-link mt-3 p-0">View Full Report &gt;</button>
              </div>
            </div>

            {/* RECENT ACTIVITY */}
            <div className="col-lg-4">
              <div className="card shadow-sm border-0 p-4 h-100">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="fw-bold">Recent Activity</h4>
                  <button className="btn btn-link p-0">See All</button>
                </div>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Apple Store</strong>
                    <p className="text-muted small mb-1">Gadgets & Tech • 2h ago</p>
                    <span className="text-danger fw-bold">- $199.00</span>
                  </li>

                  <li className="list-group-item">
                    <strong>The Coffee House</strong>
                    <p className="text-muted small mb-1">Food & Drink • 5h ago</p>
                    <span className="text-danger fw-bold">- $12.50</span>
                  </li>

                  <li className="list-group-item">
                    <strong>Salary Deposit</strong>
                    <p className="text-muted small mb-1">Monthly Income • Yesterday</p>
                    <span className="text-success fw-bold">+ $4,200.00</span>
                  </li>

                  <li className="list-group-item">
                    <strong>Utility Bill</strong>
                    <p className="text-muted small mb-1">Bills • 2 days ago</p>
                    <span className="text-danger fw-bold">- $85.00</span>
                  </li>

                  <li className="list-group-item">
                    <strong>Shell Gas Station</strong>
                    <p className="text-muted small mb-1">Transport • 3 days ago</p>
                    <span className="text-danger fw-bold">- $45.00</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* SAVINGS GOAL */}
          <div className="card shadow-sm border-0 p-4">
            <h4 className="fw-bold mb-2">Savings Goal</h4>
            <p className="text-muted mb-1">You're $200 away from your vacation goal!</p>
            <div className="progress" style={{ height: "10px" }}>
              <div className="progress-bar bg-primary" style={{ width: "80%" }}></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

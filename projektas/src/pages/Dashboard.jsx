import "./dashboard.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleNew = () => {

    navigate("/new");
  };

  return (
    <div className="container">
      {/* Main */}
      <main className="main">

        {/* Header */}
        <header className="header">
          <h1>Financial Overview</h1>

          <div className="header-actions">
            <button className="new-btn" onClick={handleNew}>
              + New
            </button>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>

        {/* Cards */}
        <section className="cards">
          <div className="card primary">
            <p>Total Balance</p>
            <h2>$12,450</h2>
          </div>

          <div className="card">
            <p>Income</p>
            <h2>$5,200</h2>
          </div>

          <div className="card">
            <p>Expenses</p>
            <h2>$3,120</h2>
          </div>
        </section>

        {/* Bottom */}
        <section className="bottom">
          <div className="chart">
            <h3>Spending Analysis</h3>
            <div className="fake-chart">Chart here</div>
          </div>

          <div className="activity">
            <h3>Recent Activity</h3>
            <ul>
              <li>Apple Store - $199</li>
              <li>Coffee - $12</li>
              <li>Salary +$4200</li>
              <li>Gas - $45</li>
            </ul>
          </div>
        </section>

      </main>
    </div>
  );
}
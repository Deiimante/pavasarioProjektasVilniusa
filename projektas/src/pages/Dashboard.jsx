import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="container">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>WealthWise</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Budgets</li>
          <li>Transactions</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Main */}
      <main className="main">

        <header>
          <h1>Financial Overview</h1>
          <button>+ New</button>
        </header>

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
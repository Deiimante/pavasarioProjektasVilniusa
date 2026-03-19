import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2>WealthWise</h2>

      <ul>
        <li
          className={location.pathname === "/dashboard" ? "active" : ""}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </li>

        <li
          className={location.pathname === "/transactions" ? "active" : ""}
          onClick={() => navigate("/transactions")}
        >
          Transactions
        </li>

        <li
          className={location.pathname === "/budget" ? "active" : ""}
          onClick={() => navigate("/budget")}
        >
          Budget
        </li>

        <li
          className={location.pathname === "/investments" ? "active" : ""}
          onClick={() => navigate("/investments")}
        >
          Investments
        </li>
      </ul>
    </div>
  );
}
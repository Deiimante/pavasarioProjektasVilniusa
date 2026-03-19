import { useState } from "react";
import "./Sidebar.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      {/* Toggle Button */}
      <button
        className="collapse-btn"
        onClick={() => setCollapsed(!collapsed)}
      >
        <i className="bi bi-list"></i>
      </button>

      {/* Logo */}
      <div className="sidebar-logo d-flex align-items-center gap-2 mb-4">
        <div className="logo-box bg-primary text-white rounded-3 d-flex align-items-center justify-content-center">
          <i className="bi bi-wallet2"></i>
        </div>
        {!collapsed && <h2 className="m-0 fw-bold">WealthWise</h2>}
      </div>

      {/* Navigation */}
      <ul className="sidebar-nav flex-column">
        <li className="active">
          <i className="bi bi-bullseye me-2"></i>
          {!collapsed && "Savings & Goals"}
        </li>
        <li>
          <i className="bi bi-speedometer2 me-2"></i>
          {!collapsed && "Dashboard"}
        </li>
        <li>
          <i className="bi bi-graph-up-arrow me-2"></i>
          {!collapsed && "Investments"}
        </li>
        <li>
          <i className="bi bi-wallet2 me-2"></i>
          {!collapsed && "Budget"}
        </li>
      </ul>

      {/* Profile */}
      <div className="sidebar-profile mt-auto pt-4">
        <i className="bi bi-person-circle me-2"></i>
        {!collapsed && (
          <div>
            <small className="text-muted">View Profile</small>
          </div>
        )}
      </div>
    </div>
  );
}

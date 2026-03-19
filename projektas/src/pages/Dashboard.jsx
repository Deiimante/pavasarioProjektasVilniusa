import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: clear any login state here
    navigate("/login");
  };

  return (
    <div className="container-fluid vh-100 bg-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand">Wealthwise Dashboard</span>
          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="row mt-5">
        <div className="col-md-3">
          {/* Sidebar */}
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active">
              Overview
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Analytics
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Profile
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Settings
            </a>
          </div>
        </div>

        <div className="col-md-9">
          {/* Dashboard Cards */}
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Revenue</h5>
                  <p className="card-text display-6">$12,345</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Users</h5>
                  <p className="card-text display-6">1,234</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Orders</h5>
                  <p className="card-text display-6">567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Section */}
          <div className="mt-4 p-3 bg-white rounded shadow-sm">
            <h4>Welcome to your Dashboard!</h4>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem harum corrupti, beatae deleniti odio fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
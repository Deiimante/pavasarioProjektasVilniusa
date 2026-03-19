import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container">
      <Sidebar />

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
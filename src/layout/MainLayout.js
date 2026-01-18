import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="content">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

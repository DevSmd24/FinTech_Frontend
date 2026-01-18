import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="content" style={{ flexGrow: 1 , marginLeft: 240 }}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

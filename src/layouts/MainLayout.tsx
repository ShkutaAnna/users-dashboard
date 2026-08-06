import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="bg-main-bg flex min-h-screen p-4 gap-2">
      <Sidebar />

      <main className="flex-1 p-4 rounded-md bg-white">
        <Outlet />
      </main>
    </div>
  );
}
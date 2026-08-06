import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavButton from "./UI/NavButton";

import DashIcon from "../assets/icons/rect-group.svg?react";
import UsersIcon from "../assets/icons/users.svg?react";
import ChevRightIcon from "../assets/icons/chev-right.svg?react";
import ChevLeftIcon from "../assets/icons/chev-left.svg?react";

export default function Sidebar() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  
  // test
  return (
    <aside className={`bg-white p-4 rounded-md
      flex-shrink-0
      overflow-hidden
      transition-all
      duration-300
      ease-in-out
      ${collapsed ? "w-18" : "w-48"}`}>
        
      <div className="flex items-center justify-center mb-8">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`cursor-pointer ${collapsed ? '' : 'ml-auto'}`}
        >
          {collapsed ? <ChevRightIcon /> : <ChevLeftIcon />}
        </button>
      </div>

      <nav className="flex flex-col gap-2">
        <NavButton
          classes={`${collapsed ? '' : 'w-40'}`}
          icon={<DashIcon />}
          onClick={() => navigate("/")}
          active={location.pathname === "/"}
          collapsed={collapsed}
        >Dashboard</NavButton>

        <NavButton
          classes={`${collapsed ? '' : 'w-40'}`}
          icon={<UsersIcon />}
          onClick={() => navigate("/users")}
          active={location.pathname === "/users"}
          collapsed={collapsed}
        >Users</NavButton>
      </nav>
    </aside>
  );
}
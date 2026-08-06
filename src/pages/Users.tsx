import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import UsersTable from "../components/users/UsersTable";
import UsersCards from "../components/users/UsersCards";
import Loader from "../components/UI/Loader";

export default function Users() {
  const { users , loading} = useUsers();

  const [view, setView] = useState<"table" | "cards">("table");
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        Users
      </h1>

      {
        loading
        ? (<Loader />)
        : (
          <div>
            <div>
              <button onClick={() => setView("table")}>
                Table
              </button>

              <button onClick={() => setView("cards")}>
                Cards
              </button>
            </div>


            {view === "table" ? (
              <UsersTable users={users} />
            ) : (
              <UsersCards users={users} />
            )}

          </div>
        )
      }
    </div>
  );
}
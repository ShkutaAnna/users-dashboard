import { useEffect, useState } from "react";
import { usersApi } from "../services/usersApi";
import type { User } from "../types/User";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    usersApi
      .getAll()
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  return {
    users,
    loading,
  };
}
import type { User } from "../types/User";
import usersData from "../data/users.json";

const STORAGE_KEY = "users";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const usersApi = {
  async getUsers(): Promise<User[]> {
    await delay(300);

    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      return JSON.parse(stored);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(usersData));

    return usersData as unknown as User[];
  },

  async create(user: User): Promise<User> {
    await delay(300);

    const users = await this.getUsers();

    users.push(user);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

    return user;
  },

  async delete(id: string): Promise<void> {
    await delay(300);

    const users = await this.getUsers();

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(users.filter((u) => u.id !== id))
    );
  },

  async update(user: User): Promise<User> {
    await delay(300);

    const users = await this.getUsers();

    const updated = users.map((u) =>
      u.id === user.id ? user : u
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    return user;
  },
};
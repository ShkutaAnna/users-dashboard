import type { User } from "../types/User";

const STORAGE_KEY = "users";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const usersApi = {
  async getAll(): Promise<User[]> {
    await delay(300);

    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [
        {
            id: 1,
            email: 'email 1',
            name: 'Anna',
        },
        {
            id: 2,
            email: 'email 2',
            name: 'Vika',
        },
        {
            id: 3,
            email: 'email 3',
            name: 'Sofia',
        }
    ];
  },

  async create(user: User): Promise<User> {
    await delay(300);

    const users = await this.getAll();

    users.push(user);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

    return user;
  },

  async delete(id: number): Promise<void> {
    await delay(300);

    const users = await this.getAll();

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(users.filter((u) => u.id !== id))
    );
  },

  async update(user: User): Promise<User> {
    await delay(300);

    const users = await this.getAll();

    const updated = users.map((u) =>
      u.id === user.id ? user : u
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    return user;
  },
};
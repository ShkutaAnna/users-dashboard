import type { User } from "../../types/User";

type Props = {
  users: User[];
};

export default function UsersCards({ users }: Props) {
  return (
    <>
      {users.map(user => (
        <p key={user.id}>
          {user.fullName}
        </p>
      ))}
    </>
  );
}
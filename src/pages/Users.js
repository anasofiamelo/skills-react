import { useState, useEffect, useCallback } from "react";
import { useUser } from "../contexts/users-context";

const Users = () => {
  const { fetchUsers } = useUser();
  const [users, setUsers] = useState([]);

  const fetchUsersHandler = useCallback(async () => {
    const response = await fetchUsers();
    setUsers(response);
  }, [fetchUsers]);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);

  return (
    <>
      <h1>users page</h1>
      {users.map((user) => (
        <h1>{user.nome}</h1>
      ))}
    </>
  );
};

export default Users;

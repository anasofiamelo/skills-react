import { useState, useEffect } from "react";
import { useUser } from "../contexts/user-context";
import useFetch from "../hooks/use-fetch";
import UsersList from "../components/Lists/UsersList";
const Users = () => {
  const { fetchUsers } = useUser();
  const [users, setUsers] = useState([]);

  const formatUsers = (data) => {
    const formattedData = data.map((user) => {
      return { ...user, key: user.id };
    });

    setUsers(formattedData);
  };

  const fetchUsersHandler = useFetch(fetchUsers, formatUsers);

  useEffect(() => {
    fetchUsersHandler();
  }, []);

  return (
    <>
      <h1>users page</h1>
      <UsersList users_list={users} />
    </>
  );
};

export default Users;

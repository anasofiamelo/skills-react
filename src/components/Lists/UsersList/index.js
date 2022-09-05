import UserCard from "../../UserCard";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const mappedUsers = props.users_list.map((user) => {
    return <UserCard {...user} />;
  });
  return <div className={classes.users_container}>{mappedUsers}</div>;
};

export default UsersList;

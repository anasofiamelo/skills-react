import Card from "../UI/Card";
import classes from "./UserCard.module.css";

const UserCard = (props) => {
  return (
    <Card>
      <h3>@{props.user}</h3>
      <h1>{props.nome}</h1>
      <p>{props.email}</p>
      <div className={classes.user_description}>
        <p>{props.profileDesc}</p>
      </div>
    </Card>
  );
};

export default UserCard;

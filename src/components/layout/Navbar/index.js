import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navbar_container}>
      <div className={classes.link}>
        <Link to="/users">Users</Link>
      </div>
      <div className={classes.link}>
        <Link to="/my-skills">My Skills</Link>
      </div>
      <div className={classes.link}>
        <Link to="/add-skills">Add Skill</Link>
      </div>
    </div>
  );
};

export default Navbar;

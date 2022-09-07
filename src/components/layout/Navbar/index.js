import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiHome,
  FiUsers,
  FiList,
  FiPlusCircle,
  FiEdit,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { useAuth } from "../../../contexts/auth-context";

import Container from "../../UI/Container";

const Navbar = () => {
  const { user, logout, isLogged } = useAuth();

  function logoutHandler() {
    logout();
  }

  return (
    <div className={classes.nav_container}>
      {isLogged && (
        <>
          <Container className={classes.profile_container}>
            <div className="aligned-content">
              <div className={classes.user_pic}>
                <FiUser style={{ fontSize: "3rem" }} />
              </div>
              <h2 className={classes.user_username}>@{user.user}</h2>
            </div>
            <h4 className={classes.user_name}>{user.nome}</h4>
            <p className={classes.user_desc}>{user.profileDesc}</p>
          </Container>

          <Container>
            <div className={`${classes.link} border`}>
              <FiHome />
              <Link to="/home">Home</Link>
            </div>
            <div className={`${classes.link} border`}>
              <FiUsers />
              <Link to="/users">Users</Link>
            </div>
            <div className={`${classes.link} border`}>
              <FiList />
              <Link to="/my-skills">Skills</Link>
            </div>
            <div className={`${classes.link} border`}>
              <FiPlusCircle />
              <Link to="/add-skills">Add Skill</Link>
            </div>
            <div className={`${classes.link} border`}>
              <FiEdit />
              <Link to="/add-skills">Profile</Link>
            </div>
            <div className={`${classes.link} border`}>
              <FiSettings />
              <Link to="/add-skills">Settings</Link>
            </div>
            <button
              onClick={logoutHandler}
              className={`no-border ${classes.link}`}
            >
              <FiLogOut />
              <span>Logout</span>
            </button>
          </Container>
        </>
      )}
    </div>
  );
};

export default Navbar;

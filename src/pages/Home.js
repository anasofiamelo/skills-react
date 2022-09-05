import { useEffect } from "react";
import Button from "../components/UI/Button";
import { useAuth } from "../contexts/auth-context";
import { useUser } from "../contexts/user-context";
const Home = (props) => {
  const { user, logout } = useAuth();
  const { fetchUserSkills } = useUser();

  function logoutHandler() {
    logout();
  }

  function fetchUserSkillsHandler(id) {
    fetchUserSkills(id);
  }

  useEffect(() => {
    fetchUserSkillsHandler(user.id);
  }, []);

  return (
    <>
      <h1>Hello, {user.nome}</h1>
      <h4>{user.profileDescription}</h4>
      <p>{user.email}</p>
      <Button onClick={logoutHandler} button_text="logout"></Button>
    </>
  );
};

export default Home;

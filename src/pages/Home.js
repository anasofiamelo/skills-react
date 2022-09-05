import Button from "../components/UI/Button";
import { useAuth } from "../contexts/auth-context";
const Home = (props) => {
  const { user, logoutHandler } = useAuth();

  function logout() {
    logoutHandler();
  }

  return (
    <>
      <h1>Hello, {user.nome}</h1>
      <h4>{user.profileDescription}</h4>
      <p>{user.email}</p>
      <Button onClick={logout} button_text="logout"></Button>
    </>
  );
};

export default Home;

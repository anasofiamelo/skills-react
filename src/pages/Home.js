import { useEffect } from "react";
import { useAuth } from "../contexts/auth-context";
import { useUser } from "../contexts/user-context";

import Container from "../components/UI/Container";

const Home = (props) => {
  const { user } = useAuth();
  const { fetchUserSkills } = useUser();

  // function fetchUserSkillsHandler(id) {
  //   fetchUserSkills(id);
  // }

  // useEffect(() => {
  //   fetchUserSkillsHandler(user.id);
  // }, []);

  return (
    <Container>
      <h1>Hello, {user.nome}</h1>
      <h4>{user.profileDescription}</h4>
      <p>{user.email}</p>
    </Container>
  );
};

export default Home;

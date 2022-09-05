import { Route } from "react-router-dom";
import Home from "../pages/Home";
import AddSkill from "../pages/AddSkill";
import Users from "../pages/Users";

const AppRoutes = (props) => {
  return (
    <>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/add-skills">
        <AddSkill />
      </Route>
    </>
  );
};

export default AppRoutes;

import { Route } from "react-router-dom";
import Home from "../pages/Home";
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
    </>
  );
};

export default AppRoutes;

import { Route } from "react-router-dom";
import Login from "../pages/Login";

const AuthRoutes = (props) => {
  return (
    <>
      <Route path="/signin">
        <Login />
      </Route>
    </>
  );
};

export default AuthRoutes;

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { useAuth } from "../contexts/auth-context";
// import { useHistory } from "react-router-dom";
const Routes = () => {
  // const history = useHistory();
  const { isLogged } = useAuth();

  // function redirectToAuthHandler() {
  //   history.replace("/signin");
  // }

  // function redirectToAppHandler() {
  //   history.replace("/home");
  // }
  return (
    <>
      {/* {isLogged ? redirectToAppHandler() : redirectToAuthHandler()} */}
      {isLogged ? <AppRoutes /> : <AuthRoutes />}
    </>
  );
};

export default Routes;

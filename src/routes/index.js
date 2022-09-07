import { useAuth } from "../contexts/auth-context";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { isLogged } = useAuth();

  return <>{isLogged ? <AppRoutes /> : <AuthRoutes />}</>;
};

export default Routes;

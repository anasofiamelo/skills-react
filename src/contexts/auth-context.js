import { useContext, createContext, useState } from "react";
import API from "../services/API";

const AuthContext = createContext({});

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(false);

  async function loginHandler(user, password) {
    const response = await API.post("/login", {
      user,
      senha: password,
    });
    setUser(response.data.user);
  }

  async function logoutHandler() {}

  return (
    <AuthContext.Provider
      value={{ isLogged: Boolean(user), user, loginHandler, logoutHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default AuthContext;

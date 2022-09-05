import { useContext, createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../services/API";

const AuthContext = createContext({});

export const AuthContextProvider = (props) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [savedId, setSavedId] = useState(localStorage.getItem("id"));

  useEffect(() => {
    async function fetchData() {
      const response = await fetchUser(savedId);
      console.log(response);
      setUser(response);
    }

    if (savedId) {
      fetchData();
    }
  }, [savedId]);

  async function loginHandler(user, password) {
    const response = await API.post("/login", {
      user,
      senha: password,
    });
    const userData = response.data.user;
    localStorage.setItem("token", userData.accessToken);
    localStorage.setItem("id", userData.id);
    setSavedId(userData.id);
    setUser(userData);
    history.replace("/home");
  }

  async function logoutHandler() {
    localStorage.clear();
    setSavedId(null);
    setUser(null);
    history.replace("/signin");
  }

  async function fetchUser(id) {
    const response = await API.get(`/users/${id}`);
    return response.data;
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged: Boolean(user),
        user,
        loginHandler,
        logoutHandler,
      }}
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

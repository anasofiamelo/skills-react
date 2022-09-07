import { useContext, createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../services/API";

const AuthContext = createContext({});

export const AuthContextProvider = (props) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(null);
  const [savedId, setSavedId] = useState(localStorage.getItem("id"));
  console.log(isLogged);
  useEffect(() => {
    async function fetchData() {
      const response = await fetchUser(savedId);
      setUser(response);
      setIsLogged(true);
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
    setIsLogged(true);
  }

  async function logout() {
    localStorage.clear();
    setSavedId(null);
    setUser(null);
    setIsLogged(false);
    history.replace("/signin");
  }

  async function fetchUser(id) {
    const response = await API.get(`/users/${id}`);
    return response.data;
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        user,
        loginHandler,
        logout,
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

import { useContext, createContext } from "react";
// import { useHistory } from "react-router-dom";
import API from "../services/API";

const UserContext = createContext({});

export const UserContextProvider = (props) => {
  async function fetchUsers() {
    const response = await API.get(`/lista`);
    return response.data;
  }

  async function fetchUser(id) {
    const response = await API.get(`/users/${id}`);
    return response.data;
  }

  async function fetchUserSkills(id) {
    const response = await API.get(`/users/${id}/habilidades`);
    return response.data;
  }

  return (
    <UserContext.Provider value={{ fetchUser, fetchUsers, fetchUserSkills }}>
      {props.children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  return context;
}

export default UserContext;

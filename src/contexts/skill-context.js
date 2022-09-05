import { useContext, createContext } from "react";
// import { useHistory } from "react-router-dom";
import API from "../services/API";

const SkillContext = createContext({});

export const SkillContextProvider = (props) => {
  async function fetchSkills() {
    const response = await API.get(`/habilidades`);
    return response.data;
  }

  return (
    <SkillContext.Provider value={{ fetchSkills }}>
      {props.children}
    </SkillContext.Provider>
  );
};

export function useSkill() {
  const context = useContext(SkillContext);
  return context;
}

export default SkillContext;

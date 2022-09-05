import { useEffect, useState } from "react";
import { useSkill } from "../../contexts/skill-context";

const SkillsList = () => {
  const { fetchSkills } = useSkill();

  const [skills, setSkills] = useState([]);

  function fetchSkillsHandler() {
    const response = fetchSkills();
    setSkills(response);
  }

  useEffect(() => {
    fetchSkillsHandler();
    console.log(skills);
  }, []);

  return (
    <>
      <h1>SkillsList component</h1>
    </>
  );
};

export default SkillsList;

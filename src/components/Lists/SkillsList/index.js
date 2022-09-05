import { useEffect, useState } from "react";
import { useSkill } from "../../../contexts/skill-context";
import useFetch from "../../../hooks/use-fetch";
import Skill from "../../Skill";

const SkillsList = () => {
  const { fetchSkills } = useSkill();

  const [skills, setSkills] = useState([]);
  console.log(skills);
  const fetchSkillsHandler = useFetch(fetchSkills, setSkills);

  useEffect(() => {
    fetchSkillsHandler();
  }, []);

  const mappedSkills = skills.map((skill) => {
    skill.key = skill.id;
    return <Skill {...skill} />;
  });

  return <>{mappedSkills}</>;
};

export default SkillsList;

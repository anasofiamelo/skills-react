import { useState } from "react";
import API from "../services/API";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import SkillsList from "../components/Lists/SkillsList";

const PageSkill = () => {
  const [skillName, setSkillName] = useState("");
  function changeSkillNameHandler(event) {
    setSkillName(event.target.value);
  }

  async function submitSkillHandler(event) {
    event.preventDefault();
    const response = await API.post(`/cria-habilidade`, {
      habilidade: skillName,
    });
    console.log(response);
  }

  return (
    <form onSubmit={submitSkillHandler}>
      <Input
        value={skillName}
        onChange={changeSkillNameHandler}
        placeholder="Skill Name"
      />
      <Button type="submit" button_text="Add" />
      <SkillsList />
    </form>
  );
};

export default PageSkill;

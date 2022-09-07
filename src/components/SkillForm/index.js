import { useState } from "react";
import API from "../../services/API";
import Button from "../UI/Button";
import Input from "../UI/Input";

const SkillForm = (props) => {
  const [skillName, setSkillName] = useState("");
  const [inputIsValid, setInputIsValid] = useState(true);

  function changeSkillNameHandler(value) {
    setSkillName(value);
  }

  async function submitSkillHandler(event) {
    event.preventDefault();
    if (skillName.trim() === "") {
      setInputIsValid(false);
      return;
    }

    const response = await API.post(`/cria-habilidade`, {
      habilidade: skillName,
    });
    console.log(response);
  }

  return (
    <form onSubmit={submitSkillHandler}>
      {!inputIsValid && <p>Input must not be empty.</p>}
      <Input
        onChangeInputValue={changeSkillNameHandler}
        placeholder="Skill Name"
      />
      <Button type="submit" button_text="Add" />
    </form>
  );
};

export default SkillForm;

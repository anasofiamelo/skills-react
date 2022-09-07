import { useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsValid, setInputIsValid] = useState(true);

  const changeInputValueHandler = (e) => {
    const value = e.target.value;
    props.onChangeInputValue(value);
    setInputValue(value);
    if (value.trim() === "") {
      setInputIsValid(false);
      return;
    }
    setInputIsValid(true);
  };

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={classes.input}
        type={props.type || "text"}
        id={props.id}
        value={inputValue}
        placeholder={props.placeholder || ""}
        onChange={changeInputValueHandler}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;

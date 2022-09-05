import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={classes.input}
        type={props.type || "text"}
        id={props.id}
        value={props.value || ""}
        placeholder={props.placeholder || ""}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;

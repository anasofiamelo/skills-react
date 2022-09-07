import classes from "./Container.module.css";

const Container = (props) => {
  const customClass = `${classes.container} ${props.className || ""}`;
  return <div className={customClass}>{props.children}</div>;
};

export default Container;

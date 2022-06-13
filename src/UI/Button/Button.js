import React from "react";
import styles from "./Button.module.css";

const Button = function (props) {
  const isValid = !props.disabled ? styles.enabled : styles.disabled;
  return (
    <button
      className={`${styles.btn} ${isValid}`}
      disabled={props.disabled}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;

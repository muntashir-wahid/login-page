import React from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation";

const Header = function (props) {
  const logOutHandler = function (isLogedOut) {
    props.onConfirmLogOut(isLogedOut)
  }
  return (
    <header className={styles.header}>
      <h1>A Typical Page</h1>
      {props.confirmLogedIn && <Navigation onLogOut={logOutHandler}/>}
    </header>
  );
};

export default Header;

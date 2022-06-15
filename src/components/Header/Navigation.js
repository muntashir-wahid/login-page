import React from "react";
import styles from "./Navigation.module.css";

const Navigation = function (props) {
  const logOutHandler = function (e) {
    e.preventDefault();
    props.onLogOut(e.target.id === "logout-btn");
  };

  return (
    <nav>
      <ul className={styles["nav-links"]} onClick={logOutHandler}>
        <li>
          <a href="#users">Users</a>
        </li>
        <li>
          <a href="#admin">Admin</a>
        </li>
        <li>
          <a href="#logout" id={"logout-btn"} className={styles["logout-btn"]}>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import React, { useState } from "react";
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
          <a href="#">Users</a>
        </li>
        <li>
          <a href="#">Admin</a>
        </li>
        <li>
          <a href="#" id={"logout-btn"} className={styles["logout-btn"]}>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

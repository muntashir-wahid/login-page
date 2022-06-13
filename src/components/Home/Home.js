import React from "react";
import styles from "./Home.module.css";
import Card from "../UI/Card/Card";

const Home = function () {
  return (
    <Card className={styles.home}>
        <h2 className={styles.message}>Welcome Back!</h2>
    </Card>
  );
};

export default Home;

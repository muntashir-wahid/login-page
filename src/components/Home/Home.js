import React from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import AuthContext from "../../store/auth-context";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <AuthContext.Consumer>
        {(ctx) => {
          return <Button onClick={ctx.onLogout}>Logout</Button>;
        }}
      </AuthContext.Consumer>
    </Card>
  );
};

export default Home;

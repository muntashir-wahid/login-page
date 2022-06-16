import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/Home/Home";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  console.log("Component function evaluated by react");
  useEffect(() => {
    if (localStorage.getItem("isLogedIn") === "1") {
      setIsLogedIn(true);
    }
    console.log("Side effect function runs!!");
  }, []);

  const loginConfirmHandler = function (isLogIn, userInfo) {
    // console.log(userInfo);
    setIsLogedIn(isLogIn);
    localStorage.setItem("isLogedIn", "1");
  };

  const userLogOutHandler = function (isLogedOut) {
    setIsLogedIn(!isLogedOut);
    localStorage.removeItem("isLogedIn");
  };
  return (
    <React.Fragment>
      <Header confirmLogedIn={isLogedIn} onConfirmLogOut={userLogOutHandler} />
      <main>
        {isLogedIn ? (
          <Home />
        ) : (
          <LoginForm onConfirmLogin={loginConfirmHandler} />
        )}
      </main>
    </React.Fragment>
  );
}

export default App;

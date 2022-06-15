import React, { useState } from "react";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/Home/Home";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);

  const loginConfirmHandler = function (isLogIn, userInfo) {
    console.log(userInfo);
    setIsLogedIn(isLogIn);
  };

  const userLogOutHandler = function (isLogedOut) {
    setIsLogedIn(!isLogedOut);
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

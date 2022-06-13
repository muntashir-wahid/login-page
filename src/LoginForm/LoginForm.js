import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const LoginForm = function (props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  const emailChangeHandler = function (e) {
    setEnteredEmail(e.target.value);
    setIsFormValid(
      e.target.value.includes("@") &&
        e.target.value.trim().length > 7 &&
        enteredPassword.length > 7
    );
  };
  const passwordChangeHandler = function (e) {
    setEnteredPassword(e.target.value);
    setIsFormValid(
      e.target.value.trim().length > 7 &&
        enteredEmail.includes("@") &&
        enteredEmail.trim().length > 7
    );
  };

  const emailValidationHandler = function () {
    setIsValidEmail(enteredEmail.includes("@"));
  };
  const passwordValidationHandler = function () {
    setIsValidPassword(enteredPassword.trim().length > 7);
  };

  const formSubmitHandler = function (e) {
    e.preventDefault();
    const userInfo = { userEmail: enteredEmail, password: enteredPassword };
    console.log(userInfo);
    setEnteredEmail("");
    setEnteredPassword("");
    setIsFormValid(false);
  };

  return (
    <main>
      <Card>
        <form className={styles["login-form"]} onSubmit={formSubmitHandler}>
          <div
            className={`${styles["form-control"]} ${
              !isValidEmail && styles.invalid
            }`}
          >
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailValidationHandler}
            />
          </div>
          <div
            className={`${styles["form-control"]} ${
              !isValidPassword && styles.invalid
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordValidationHandler}
            />
          </div>
          <div className={styles["form-control__btn"]}>
            <Button type={"submit"} disabled={!isFormValid}>
              Login
            </Button>
          </div>
        </form>
      </Card>
    </main>
  );
};

export default LoginForm;

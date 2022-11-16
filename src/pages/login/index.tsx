import Button from "../../components/Button";
import TextField from "../../components/TextField";
import Header from "../../components/Header";
import styles from "./login.module.scss";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ILogin, LoginState } from "../../redux/redux.types";
import { Dispatch } from "redux";
import { connect, shallowEqual, useDispatch, useSelector } from "react-redux";
import { login } from "../../redux";


export const Login = () => {
  const navigate = useNavigate();
  
  const dispatch: Dispatch<any> = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (credentials: ILogin) => dispatch(login(credentials));

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.input_area}>
          <div className={styles.title_area}>
            <p>
              {" "}
              <strong>Welcome</strong> to <strong>your</strong> best web{" "}
              <strong>wallet</strong>{" "}
            </p>
          </div>
          <div className={styles.inputs}>
            <TextField
              type={"text"}
              name={"email"}
              labeltext={"Email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type={"password"}
              name={"password"}
              labeltext={"Password"}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              onClick={() => handleLogin({ userName: email, password: password })}
              spacing={20}
            >
              Login
            </Button>
          </div>

          <div className={styles.links}>
            <h3>OR</h3>
            <a href="#">Sign-up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
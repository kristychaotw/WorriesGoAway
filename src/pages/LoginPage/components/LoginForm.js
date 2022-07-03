import React, { useState, useRef } from "react";
import { useAuthUser } from "../../../firebase";
import {
  FormContainer,
  BtnSubmit,
  P,
  MsgLogin,
  TextInput,
  InputLable,
  FormStyled,
} from "../../../components/styles/component.css";
import { login, signup } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/modal/Modal";
import { openModal } from "../../../reducers/modal";

export default function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuthUser().currentUser;
  const [loginForm, setLoginForm] = useState(true);
  const [validationMsg, setValidationMsg] = useState("");
  const [testAccount, setTestAccount] = useState({
    testEmail: "",
    testPwd: "",
  });
  const nav = useNavigate();
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal.value);

  function getTestAccount() {
    const testAccount = { testEmail: "test@gmail.com", testPwd: "Test2022" };
    setTestAccount(testAccount);
    emailRef.current.value = testAccount.testEmail;
    passwordRef.current.value = testAccount.testPwd;
  }

  function changetoLoginForm() {
    setLoginForm(true);
  }

  function changetoSignupForm() {
    setLoginForm(false);
  }

  const regexEmail = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  const regexPwd = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/);
  let newMsg;
  function checkFormat(type, value) {
    setValidationMsg("");
    if (type === "email") {
      newMsg = regexEmail.test(value) ? "" : "Must be Email Format";
      setValidationMsg(newMsg);
    } else if (type === "pwd") {
      newMsg = regexPwd.test(value)
        ? ""
        : "Must be 4-10 char with numbers and mixed-case letters.";
      setValidationMsg(newMsg);
    }
  }

  async function handleClick(email, pwd, type) {
    let msgLogin = "";
    setLoading(true);
    if (type === "login") {
      msgLogin = await login(email, pwd);
    } else {
      msgLogin = await signup(email, pwd);
    }
    if (msgLogin !== "signIn")
      dispatch(openModal({ show: true, headlines: msgLogin, msg: "" }));
    setLoading(false);
  }

  return (
    <FormContainer>
      <FormStyled>
        {modalState.show && <Modal />}
        <InputLable primary>User Email</InputLable>
        <TextInput
          ref={emailRef}
          type="email"
          required
          pattern={regexEmail}
          autoComplete="current-email"
          onFocus={() => setValidationMsg("")}
          onKeyDown={() => checkFormat("email", emailRef.current.value)}
        />
        <InputLable primary>Password</InputLable>
        <TextInput
          ref={passwordRef}
          type="password"
          required
          pattern={regexPwd}
          autoComplete="current-password"
          onFocus={() => setValidationMsg("")}
          onKeyDown={() => checkFormat("pwd", passwordRef.current.value)}
        />
        <MsgLogin>{validationMsg}</MsgLogin>
      </FormStyled>
      <div>
        {loginForm ? (
          <div>
            <BtnSubmit
              marginbt={"10px"}
              disabled={loading || currentUser}
              onClick={() =>
                handleClick(
                  emailRef.current.value,
                  passwordRef.current.value,
                  "login"
                )
              }
            >
              Log In
            </BtnSubmit>
            <P style={{ paddingBottom: 20 }}>
              Need an account ?{" "}
              <span
                onClick={changetoSignupForm}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Register
              </span>
            </P>
          </div>
        ) : (
          <div>
            <BtnSubmit
              marginbt={"10px"}
              disabled={loading || currentUser}
              onClick={() =>
                handleClick(
                  emailRef.current.value,
                  passwordRef.current.value,
                  "signup"
                )
              }
            >
              Sign Up
            </BtnSubmit>

            <P style={{ paddingBottom: 20 }}>
              Already a user ?{" "}
              <span
                onClick={changetoLoginForm}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Login
              </span>
            </P>
          </div>
        )}
        <BtnSubmit color={"#27567d"} onClick={() => getTestAccount()}>
          Get Test Account
        </BtnSubmit>
      </div>
    </FormContainer>
  );
}

import React, { useState, useRef, useEffect } from "react";
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
    let msg = "";
    setLoading(true);
    if (type === "login") msg = await login(email, pwd);
    else msg = signup(email, pwd);
    console.log("msg", msg);
    setValidationMsg(msg);
    setLoading(false);
  }

  useEffect(() => {
    if (currentUser) nav("/home");
    else nav("/");
  }, [currentUser]);

  return (
    <FormContainer>
      <div>
        <FormStyled>
          <InputLable primary>User Email</InputLable>
          <TextInput
            ref={emailRef}
            type="email"
            required
            pattern={regexEmail}
            onFocus={() => setValidationMsg("")}
            onKeyDown={() => checkFormat("email", emailRef.current.value)}
          />
          <InputLable primary>Password</InputLable>
          <TextInput
            ref={passwordRef}
            type="password"
            required
            pattern={regexPwd}
            onFocus={() => setValidationMsg("")}
            onKeyDown={() => checkFormat("pwd", passwordRef.current.value)}
          />
        </FormStyled>
        <MsgLogin>{validationMsg}</MsgLogin>
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
      </div>
    </FormContainer>
  );
}

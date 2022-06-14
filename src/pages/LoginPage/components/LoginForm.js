import React, { useState, useRef } from "react";
import { useAuthUser } from "../../../firebase";
import {
  FormContainer,
  BtnSubmit,
  P,
  MsgP,
  TextInput,
  InputLable,
  FormStyled,
} from "../../../components/styles/component.css";
import Welcome from "./Welcome";
import { login, signup } from "../../../firebase";

export default function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuthUser().currentUser;
  const [loginForm, setLoginForm] = useState(true);
  const [loginState, setLoginState] = useState("");
  const [testAccount, setTestAccount] = useState({
    testEmail: "",
    testPwd: "",
  });

  function getTestAccount() {
    const testAccount = { testEmail: "test@gmail.com", testPwd: "Test2022" };
    setTestAccount(testAccount);
  }

  function changetoLoginForm() {
    setLoginState("");
    setLoginForm(true);
  }

  function changetoSignupForm() {
    setLoginState("");
    setLoginForm(false);
  }

  const regexEmail = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  const regexPwd = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/);
  const [validationMsg, setValidationMsg] = useState("");
  let newMsg;
  function checkFormat(type, value) {
    setValidationMsg("");
    setLoginState("");
    if (type === "email") {
      newMsg = regexEmail.test(value) ? "" : "Must be Email Format";
      setValidationMsg(newMsg);
    } else if (type === "pwd") {
      newMsg = regexPwd.test(value)
        ? ""
        : "Must be 4-10 charactors mixing uppercase and lowercase letters and numbers.";
      setValidationMsg(newMsg);
    }
  }

  async function handleClick(email, pwd, type) {
    let msg = "";
    setLoading(true);
    if (type === "login") msg = login(email, pwd);
    else msg = signup(email, pwd);
    setLoginState(msg);
    setLoading(false);
  }

  return (
    <FormContainer>
      {currentUser ? (
        <div>
          <Welcome />
        </div>
      ) : (
        <div>
          <FormStyled>
            <InputLable primary>User Email</InputLable>
            <TextInput
              ref={emailRef}
              defaultValue={testAccount.testEmail}
              type="email"
              required
              pattern={regexEmail}
              onFocus={() => setValidationMsg("")}
              onKeyDown={() => checkFormat("email", emailRef.current.value)}
            />
            <InputLable primary>Password</InputLable>
            <TextInput
              ref={passwordRef}
              defaultValue={testAccount.testPwd}
              type="password"
              required
              pattern={regexPwd}
              onFocus={() => setValidationMsg("")}
              onKeyDown={() => checkFormat("pwd", passwordRef.current.value)}
            />
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
            <BtnSubmit onClick={() => getTestAccount()}>
              Get Test Account
            </BtnSubmit>
            <MsgP>{loginState || validationMsg}</MsgP>
          </div>
        </div>
      )}
    </FormContainer>
  );
}

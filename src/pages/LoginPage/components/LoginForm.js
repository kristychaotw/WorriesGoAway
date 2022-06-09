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
import { handleLogin } from "./loginAuth";

export default function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuthUser().currentUser;
  const [loginForm, setLoginForm] = useState(true);
  const [loginState, setLoginState] = useState("");

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
    setValidationMsg("")
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
    setLoading(true);
    const msg = await handleLogin(email, pwd, type);
    console.log("msg", msg);
    setLoginState(msg);
    setLoading(false);
  }

  return (
    <FormContainer>
      {console.log("currentuser:", currentUser)}

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
              type="email"
              required
              pattern={regexEmail}
              onFocus={()=>setValidationMsg("")}
              onKeyDown={() => checkFormat("email", emailRef.current.value)}
            />
            <InputLable primary>Password</InputLable>
            <TextInput
              ref={passwordRef}
              type="password"
              required
              pattern={regexPwd}
              onFocus={()=>setValidationMsg("")}
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
                <MsgP>{loginState || validationMsg}</MsgP>
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
                <MsgP>{loginState || validationMsg}</MsgP>
              </div>
            )}
          </div>
        </div>
      )}
    </FormContainer>
  );
}

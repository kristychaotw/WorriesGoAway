import React, { useState, useRef } from "react";
import { Link} from "react-router-dom";
import { useAuth, login, signup, logout } from "../../../firebase";
import styled from "styled-components";
import { PageTitle, TitleLable } from "../../../components/styles/component.css";
import { BtnSubmit, P } from "../../../components/styles/component.css";

const FormContainer = styled.div`
  text-align: center;
  background: #00000040;
  border: 1px solid rgba(19, 19, 19, 0.053);
  border-radius: 5px;
  box-shadow: 3px 3px 5px #000000a1;
  width: 50%;
  margin: 30px auto;
`;

export default function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const [loginForm, setLoginForm] = useState(true);

  function changetoLoginForm() {
    setLoginForm(true);
  }

  function changetoSignupForm() {
    setLoginForm(false);
  }
  async function handleLogin() {
    setLoading(true);
    if (loginForm === true)
      try {
        await login(emailRef.current.value, passwordRef.current.value);
      } catch {
        alert("Error!");
      }
    else
      try {
        await signup(emailRef.current.value, passwordRef.current.value);
      } catch {
        alert("Error!");
      }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <FormContainer>
      {console.log("currentuser:", currentUser)}
      {console.log("form:", loginForm)}
      {currentUser ? (
        <>
          <PageTitle>Welcome</PageTitle>
          <BtnSubmit disabled={loading || !currentUser} onClick={()=>handleLogout()}>Log Out</BtnSubmit>
          <BtnSubmit disabled={loading || !currentUser}> <Link to="/editor">Enter</Link></BtnSubmit>

        </>
      ) : (
        <>
          <form>
            <TitleLable primary>User Email</TitleLable>
            <input ref={emailRef} type="email" />
            <TitleLable primary>Password</TitleLable>
            <input ref={passwordRef} type="password" />
          </form>
          <div>
            {loginForm ? (
              <>
                <BtnSubmit
                  disabled={loading || currentUser}
                  onClick={() => handleLogin()}
                >
                  Log In
                </BtnSubmit>
                <P style={{ paddingBottom: 50 }}>
                  Need an account ?{" "}
                  <span
                    onClick={changetoSignupForm}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Register
                  </span>
                </P>
              </>
            ) : (
              <>
                <BtnSubmit
                  disabled={loading || currentUser}
                  onClick={() => handleLogin()}
                >
                  Sign Up
                </BtnSubmit>

                <P style={{ paddingBottom: 50 }}>
                  Already a user ?{" "}
                  <span
                    onClick={changetoLoginForm}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Login
                  </span>
                </P>
              </>
            )}
          </div>
        </>
      )}
    </FormContainer>
  );
}

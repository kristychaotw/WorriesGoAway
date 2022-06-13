// import { useDispatch } from "react-redux";
// import { loginr } from "../../../reducers/user";
import { login, signup } from "../../../firebase";

export async function handleLogin(emailValue, pwdValue, action) {
  const msgReturn = "";
  if (action === "login")
    login(emailValue, pwdValue)
      .then(() => (msgReturn = "Log in Success."))
      .catch((e) => (msgReturn = e));
  else
    signup(emailValue, pwdValue)
      .then(() => (msgReturn = "Sign up Success."))
      .catch((e) => (msgReturn = e));
  return msgReturn;
}

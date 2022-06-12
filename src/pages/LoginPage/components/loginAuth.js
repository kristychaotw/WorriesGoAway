// import { useDispatch } from "react-redux";
// import { loginr } from "../../../reducers/user";
import { login, signup } from "../../../firebase";
import { auth } from "../../../firebase";

export async function handleLogin(emailValue, pwdValue, action) {
  // const dispatch = useDispatch();
  if (action === "login")
    try {
      await login(emailValue, pwdValue);
      return "Log in Success.";
    } catch(error) {
      return error.code
    }
  else
    try {
      await signup(emailValue, pwdValue);
      return "Sign up Success.";
    } catch(error) {
      return error.code
    }
  // dispatch(
  //   loginr({
  //     name: "",
  //     age: passwordRef.current.value,
  //     email: emailRef.current.value,
  //   })
  // );
}

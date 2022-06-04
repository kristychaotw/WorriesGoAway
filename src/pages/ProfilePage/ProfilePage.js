import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginr, logoutr } from "../../reducers/user";
import GetNote from "../../reducers/utils/getNote";


export default function ProfilePage() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>ProfilePage</div>
      <p>Name:{user.name}</p>
      <p>Email:{user.email}</p>
      <p>Password:{user.age}</p>
      <button
        onClick={() => {
          dispatch(loginr({ name: "PP", age: 10, email: "11@gmail.com" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logoutr());
        }}
      >
        Logout
      </button>
      <GetNote/>
    </>
  );
}

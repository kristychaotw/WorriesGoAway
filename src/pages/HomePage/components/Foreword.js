import React from "react";
import { useAuthUser } from "../../../firebase";
import { H3 } from "../../../components/styles/component.css";

export default function Foreword() {
  const currentUser = useAuthUser().currentUser;

  return (
    <>
      <H3 grid={"email"}>Hello {currentUser.email} ,</H3>
      <H3>Your recent activities:</H3>

    </>
  );
}

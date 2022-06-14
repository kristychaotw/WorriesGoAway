import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WebTitle } from "../../../components/styles/component.css";
import { useAuthUser, logout } from "../../../firebase";
import { BtnSubmit } from "../../../components/styles/component.css";

export default function Welcome() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuthUser().currentUser;

  async function handleLogout() {
    setLoading(true);
    logout();
    setLoading(false);
  }
  return (
    <div>
      <WebTitle>Welcome</WebTitle>
      <BtnSubmit disabled={loading || !currentUser}>
        {" "}
        <Link to="/Home">Enter</Link>
      </BtnSubmit>
      <BtnSubmit
        disabled={loading || !currentUser}
        onClick={() => handleLogout()}
      >
        Log Out
      </BtnSubmit>
    </div>
  );
}

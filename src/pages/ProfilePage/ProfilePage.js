import React, { useState, useContext } from "react";
import { useAuthUser, logout } from "../../firebase";
import { H3, PageTitle } from "../../components/styles/component.css";
import Avatar from "./components/avatar";
import { PageContainer } from "../../components/styles/container.css";
import { SendBtn } from "../../components/styles/note.css";
import { motion } from "framer-motion";
import { FMContextVar, FMContextTrans } from "../App";

export default function ProfilePage() {
  const pageVariants = useContext(FMContextVar);
  const pageTransition = useContext(FMContextTrans);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuthUser().currentUser;

  async function handleLogout() {
    setLoading(true);
    logout();
    setLoading(false);
  }
  return (
    <>
      <PageTitle>
        <h3>Profile Page</h3>
      </PageTitle>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <PageContainer>
          <H3>Hello {currentUser.email} ,</H3>
          <Avatar></Avatar>
          <SendBtn
            disabled={loading || !currentUser}
            onClick={() => handleLogout()}
          >
            Log Out
          </SendBtn>
        </PageContainer>
      </motion.div>
    </>
  );
}

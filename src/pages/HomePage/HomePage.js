import React, { useContext } from "react";
import { PageTitle } from "../../components/styles/component.css";
import Foreword from "./components/Foreword";
import { PageContainer } from "../../components/styles/container.css";
import Static from "./components/Static";
import { motion } from "framer-motion";
import { FMContextVar, FMContextTrans } from "../App";

export default function HomePage() {
  const pageVariants = useContext(FMContextVar);
  const pageTransition = useContext(FMContextTrans);
  return (
    <>
      <PageTitle>
        <h3>Home Page</h3>
        <p>View your note report</p>
      </PageTitle>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <PageContainer>
          <Foreword />
          <Static />
        </PageContainer>
      </motion.div>
    </>
  );
}

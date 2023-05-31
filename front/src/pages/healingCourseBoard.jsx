import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HealingCourseBoardView from "../components/Board/healingCourseBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function healingCourseBoard() {
  return (
    <>
      <Header />
      <HealingCourseBoardView />
      <Footer />
    </>
  );
}
export default healingCourseBoard;
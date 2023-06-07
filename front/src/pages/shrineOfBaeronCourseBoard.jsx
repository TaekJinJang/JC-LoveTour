import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShrineOfBaeronCourseBoardView from "../components/Board/shrineOfBaeronCourseBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function shrineOfBaeronCourseBoard() {
  return (
    <>
      <Header />
      <ShrineOfBaeronCourseBoardView />
      <Footer />
    </>
  );
}
export default shrineOfBaeronCourseBoard;
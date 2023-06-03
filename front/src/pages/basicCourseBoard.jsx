import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicCourseBoardView from "../components/Board/basicCourseBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function basicCourseBoard() {
  return (
    <>
      <Header />
      <BasicCourseBoardView />
      <Footer />
    </>
  );
}
export default basicCourseBoard;
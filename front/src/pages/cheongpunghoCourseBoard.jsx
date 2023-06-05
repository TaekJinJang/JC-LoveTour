import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CheongpunghoCourseBoardView from "../components/Board/cheongpunghoCourseBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function cheongpunghoCourseBoard() {
  return (
    <>
      <Header />
      <CheongpunghoCourseBoardView />
      <Footer />
    </>
  );
}
export default cheongpunghoCourseBoard;
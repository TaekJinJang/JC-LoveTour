import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MuseumCourseBoardView from "../components/Board/museumCourseBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function museumCourseBoard() {
  return (
    <>
      <Header />
      <MuseumCourseBoardView />
      <Footer />
    </>
  );
}
export default museumCourseBoard;
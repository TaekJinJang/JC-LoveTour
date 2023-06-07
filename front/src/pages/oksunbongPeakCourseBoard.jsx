import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OksunbongPeakCourseBoardView from "../components/Board/oksunbongPeakCourseBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function oksunbongPeakCourseBoard() {
  return (
    <>
      <Header />
      <OksunbongPeakCourseBoardView />
      <Footer />
    </>
  );
}
export default oksunbongPeakCourseBoard;
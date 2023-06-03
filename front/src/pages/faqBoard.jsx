import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FaqBoardView from "../components/Board/faqBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function faqBoard() {
  return (
    <>
      <Header />
      <FaqBoardView />
      <Footer />
    </>
  );
}
export default faqBoard;
import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FestivalBoardView from "../components/Board/festivalBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function festivalBoard() {
  return (
    <>
      <Header />
      <FestivalBoardView />
      <Footer />
    </>
  );
}
export default festivalBoard;
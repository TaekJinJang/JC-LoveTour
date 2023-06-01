import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GastroTourBoardView from "../components/Board/gastroTourBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function gastroTourBoard() {
  return (
    <>
      <Header />
      <GastroTourBoardView />
      <Footer />
    </>
  );
}
export default gastroTourBoard;
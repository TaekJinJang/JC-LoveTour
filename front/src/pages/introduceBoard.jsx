import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IntroduceBoardView from "../components/Board/introduceBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function introduceBoard() {
  return (
    <>
      <Header />
      <IntroduceBoardView />
      <Footer />
    </>
  );
}
export default introduceBoard;

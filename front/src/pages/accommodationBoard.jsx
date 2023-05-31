import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AccommodationBoardView from "../components/Board/accommodationBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function accommodationBoard() {
  return (
    <>
      <Header />
      <AccommodationBoardView />
      <Footer />
    </>
  );
}
export default accommodationBoard;
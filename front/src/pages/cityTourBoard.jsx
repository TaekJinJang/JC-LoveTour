import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CityTourBoardView from "../components/Board/cityTourBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function cityTourBoard() {
  return (
    <>
      <Header />
      <CityTourBoardView />
      <Footer />
    </>
  );
}
export default cityTourBoard;
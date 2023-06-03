import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TouristSpotBoardView from "../components/Board/touristSpotBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function touristSpotBoard() {
  return (
    <>
      <Header />
      <TouristSpotBoardView />
      <Footer />
    </>
  );
}
export default touristSpotBoard;
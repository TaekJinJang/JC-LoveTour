import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodBoardView from "../components/Board/foodBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function foodBoard() {
  return (
    <>
      <Header />
      <FoodBoardView />
      <Footer />
    </>
  );
}
export default foodBoard;
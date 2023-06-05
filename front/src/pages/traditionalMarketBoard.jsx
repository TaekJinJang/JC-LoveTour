import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TraditionalMarketBoardView from "../components/Board/traditionalMarketBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function traditionalMarketBoard() {
  return (
    <>
      <Header />
      <TraditionalMarketBoardView />
      <Footer />
    </>
  );
}
export default traditionalMarketBoard;
import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GalleryBoardView from "../components/Board/galleryBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function galleryBoard() {
  return (
    <>
      <Header />
      <GalleryBoardView />
      <Footer />
    </>
  );
}
export default galleryBoard;

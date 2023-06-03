import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoGalleryBoardView from "../components/Board/videoGalleryBoardView";
import Header from "../components/UI/header";
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from "../components/UI/footer";

function videoGalleryBoard() {
  return (
    <>
      <Header />
      <VideoGalleryBoardView />
      <Footer />
    </>
  );
}
export default videoGalleryBoard;
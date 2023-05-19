import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewBoardView from '../components/Board/reviewBoardView';
import Header from '../components/UI/header';
// import { TextArea } from 'react-bootstrap';
import Footer from '../components/UI/footer';

function reviewBoard() {
  return (
    <>
      <Header />
      <ReviewBoardView />
      <Footer />
    </>
  );
}
export default reviewBoard;

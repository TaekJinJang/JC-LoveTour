import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewBoardWrite from '../components/Board/reviewBoardWrite';
import Header from '../components/UI/header';
import Footer from '../components/UI/footer';

function reviewBoardAdd() {
  return (
    <>
      <Header />
      <ReviewBoardWrite />
      <Footer />
    </>
  );
}
export default reviewBoardAdd;

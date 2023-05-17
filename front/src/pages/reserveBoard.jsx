import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReserveBoardView from '../components/Board/reserveBoardView';
import Header from '../components/UI/header';
// import { TextArea } from 'react-bootstrap';
import Footer from '../components/UI/footer';

function reserveBoard() {
  return (
    <>
      <Header />
      <ReserveBoardView />
      <Footer />
    </>
  );
}
export default reserveBoard;

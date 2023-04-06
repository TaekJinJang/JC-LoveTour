import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReserveBoardView from '../components/Board/reserveBoardView';
import Header from '../components/Common/header';
// import { TextArea } from 'react-bootstrap';

function reserveBoard() {
  return (
    <>
      {/* <Header /> */}
      <ReserveBoardView />
    </>
  );
}
export default reserveBoard;

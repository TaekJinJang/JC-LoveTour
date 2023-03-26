import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnnounceBoardView from '../components/Board/announceBoardView';
import Header from '../components/Common/header';
// import { TextArea } from 'react-bootstrap';

function announceBoard() {
  return (
    <>
      {/* <Header /> */}
      <AnnounceBoardView />
    </>
  );
}
export default announceBoard;

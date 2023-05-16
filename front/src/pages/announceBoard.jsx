import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnnounceBoardView from '../components/Board/announceBoardView';
import Header from '../components/UI/header';
// import { TextArea } from 'react-bootstrap';

// 공통부분 
import Footer from '../components/UI/footer';

function announceBoard() {
  return (
    <>
    <Header/>
      <AnnounceBoardView />
      <Footer />
    </>
  );
}
export default announceBoard;

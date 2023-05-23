import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GalleryBoardWrite from '../components/Board/galleryBoardWrite';
// import { TextArea } from 'react-bootstrap';
import Header from '../components/UI/header';
import Footer from '../components/UI/footer';

function galleryBoardAdd() {
  return (
    <>
      <Header />
      <GalleryBoardWrite />
      <Footer />
    </>
  );
}
export default galleryBoardAdd;

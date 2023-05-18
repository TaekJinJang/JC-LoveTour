import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnnounceBoardWrite from '../components/Board/announceBoardWrite';
// import { TextArea } from 'react-bootstrap';
import Header from '../components/UI/header';
import Footer from '../components/UI/footer';
function announceBoardAdd() {
    return (
        <>
            <Header />
            <AnnounceBoardWrite />
            <Footer />
        </>
    );
}
export default announceBoardAdd;

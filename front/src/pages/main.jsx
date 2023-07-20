import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Footer from '../components/UI/footer';
import MainHeader from '../components/UI/mainheader';
import MainGrid from '../components/UI/mainGrid';

function main() {
    return (
        <>
            <MainHeader />
            {/* <Container>
                <Link to="/board/announce">
                    <button>게시판</button>
                </Link>
                <Link to="/board/review">
                    <button>후기게시판</button>
                </Link>
                <Link to="/board/gallery">
                    <button>갤러리</button>
                </Link>
                <Link to="/admin">
                    <button>관리자</button>
                </Link>
            </Container> */}
            <MainGrid />
            <Footer />
        </>
    );
}
export default main;

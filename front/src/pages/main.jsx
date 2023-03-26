import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Common/header';

function main() {
  return (
    <>
      <Container>{/* <Header /> */}</Container>

      <Container>
        <Link to="/board/announce">
          <button>게시판</button>
        </Link>
        <Link to="/board/gallery">
          <button>갤러리</button>
        </Link>
        <Link to="/admin">
          <button>관리자</button>
        </Link>
      </Container>
    </>
  );
}
export default main;

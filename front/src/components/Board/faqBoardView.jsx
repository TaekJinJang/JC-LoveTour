import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import styled from 'styled-components';
import {
  ButtonGroup,
  Button,
  Card,
  Stack,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';

// import GalleryBoardList from './galleryBoardList';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_GALLERY_POSTS_REQUEST } from '../../reducers/post';

// 모바일 관련 코드
import { BrowserView, MobileView } from 'react-device-detect';

// 공통부분
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../UI/header';
import SideBar from '../UI/sideBar';
import Footer from '../UI/footer';
import Offcanvasnav from '../UI/offcanvasnav';

function faqBoardView() {
  // 페이지 버튼 눌린 상태로 만드려고 생성
  const [currentPage, setCurrentPage] = useState('FAQ'); // 현재 페이지 상태
  const { admin } = useSelector((state) => state.admin);
  const { gallery } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  // 페이지네이션
  const [page, setPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const indexOfLastPost = page * 10;
  const indexOfFirstPost = indexOfLastPost - 10;
  const handlePageChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    setCurrentPosts(gallery.slice(indexOfFirstPost, indexOfLastPost));
  }, [gallery, indexOfFirstPost, indexOfLastPost, page]);

  useEffect(() => {
    dispatch({
      type: LOAD_GALLERY_POSTS_REQUEST,
    });
  }, []);

  // 사이드바 내용
  const buttons = [
    { label: '공지사항', href: '/board/announce' },
    { label: '자주하는 질문', href: '/board/faq' },
    { label: '투어 후기', href: '/board/review' },
  ];

  return (
    <>
      {/* 데스크톱 */}
      <BrowserView>
        <Container style={{ fontFamily: 'Pretendard-Regular' }}>
          <Header />
          <Container className="mt-3">
            <Row>
              <Col md={3}>
                <SideBar buttons={buttons} title={'알림마당'} />
              </Col>
              <Col md={9}>
                <Row>
                  <h3>자주하는 질문</h3>
                  <hr />
                </Row>
              </Col>
            </Row>
          </Container>
          <Footer />
        </Container>
      </BrowserView>
      {/* 모바일 */}
      <div style={{ maxWidth: ' 576px', margin: '0 auto' }}>
        <MobileView>
          <Row style={{ width: '100%' }} className="justify-content-center m-0">
            <Offcanvasnav />
            <Row>
              <div style={{ height: '75px' }}></div>
            </Row>
            <Row>
              <SideBar
                buttons={buttons}
                title={'알림마당'}
                style={{ Width: '100%' }}
              />
            </Row>
            <Row className="ms-1 me-1 ps-4 pe-4">
              <h3>자주하는 질문</h3>
              <hr />
            </Row>
          </Row>
          <Row>{/* <Footer />  푸터 수정 진행중*/}</Row>
        </MobileView>
      </div>
    </>
  );
}

export default faqBoardView;

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

// 공통부분
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../UI/header';
import TopNavBar from '../UI/topNavBar';
import SideBar from '../UI/sideBar';
import Footer from '../UI/footer';

// import GalleryBoardList from './galleryBoardList';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_GALLERY_POSTS_REQUEST } from '../../reducers/post';

function museumCourseBoardView() {
  // 페이지 버튼 눌린 상태로 만드려고 생성
  const [currentPage, setCurrentPage] = useState('박물관 코스'); // 현재 페이지 상태
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
    { label: '옥순봉 코스', href: '/board/oksunbongPeakCourse' },
    { label: '청풍호 코스', href: '/board/cheongpunghoCourse' },
    { label: '박물관 코스', href: '/board/museumCourse' },
    { label: '배론성지 코스', href: '/board/shrineOfBaeronCourse' },
    { label: '힐링 코스', href: '/board/healingCourse' },
  ];

  return (
    <>
      <Container>
        <Header />
        <Container>
          <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
            <TopNavBar />
          </Row>
          <Row className="mt-3 ps-1" style={{ width: '100%' }}>
            <Col md={3}>
              <SideBar buttons={buttons} title={'테마/코스'} />
            </Col>
            <Col md={9}>
              <Row>
                <h3>박물관 코스</h3>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
        {/* </Row>
        <Row className="mt-4">
          <Col md={3} className="d-grid gap-2"></Col> */}
        {/* 수정 진행 중 -> col/row container 구역 나눔 문제였음 해결함 */}
      </Container>
    </>
  );
}

export default museumCourseBoardView;

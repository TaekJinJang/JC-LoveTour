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

import GalleryBoardList from './galleryBoardList';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_GALLERY_POSTS_REQUEST } from '../../reducers/post';

function galleryBoardView() {
  // 페이지 버튼 눌린 상태로 만드려고 생성
  const [currentPage, setCurrentPage] = useState('사진 갤러리'); // 현재 페이지 상태
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
    { label: '러브투어 소개', href: '/board/introduce' },
    { label: '지원 혜택', href: '/board/supportBenefit' },
    { label: '사진 갤러리', href: '/board/gallery' },
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
              <SideBar buttons={buttons} title={'사진 갤러리'} />
            </Col>
            <Col md={9}>
              <Row>
                <h2>사진 갤러리</h2>
              </Row>
              <Row className="mt-2">
                <Col className="bg-light border pt-1">
                  <Col className="mb-1" style={{ float: 'right' }}>
                    <Stack direction="horizontal" gap={3}>
                      <Form.Control className="ms-auto" />
                      <Button
                        variant="success"
                        text="white"
                        style={{ width: '130px' }}
                      >
                        검색
                      </Button>
                    </Stack>
                  </Col>
                  {/* 서치바 드롭다운 메뉴 통일 */}
                  <Form.Select
                    className="me-2"
                    style={{ float: 'right', width: '100px' }}
                  >
                    <option>전체</option>
                    <option value="1">최신순</option>
                    <option value="2">게시글순</option>
                    <option value="3">왓에버순</option>
                  </Form.Select>

                  {admin && (
                    <Link to="/board/gallery/add">
                      <Button>글쓰기</Button>
                    </Link>
                  )}
                </Col>
              </Row>
              <Row className="mt-2">
                {currentPosts.map((post, index) => (
                  <GalleryBoardList key={post.id} post={post} />
                ))}
              </Row>
              <Row>
                <Pagination
                  activePage={page}
                  itemsCountPerPage={10}
                  totalItemsCount={gallery.length}
                  pageRangeDisplayed={5}
                  prevPageText={'‹'}
                  nextPageText={'›'}
                  onChange={handlePageChange}
                />
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>

      {/* </Row>
        <Row className="mt-4">
          <Col md={3} className="d-grid gap-2"></Col> */}
      {/* 수정 진행 중 -> col/row container 구역 나눔 문제였음 해결함 */}
    </>
  );
}

export default galleryBoardView;

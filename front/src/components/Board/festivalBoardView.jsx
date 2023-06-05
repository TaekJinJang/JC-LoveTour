import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col,
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

function festivalBoardView() {
  // 페이지 버튼 눌린 상태로 만드려고 생성
  const [currentPage, setCurrentPage] = useState('축제/행사'); // 현재 페이지 상태
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

  return (
    <>
      <Container>
        {/* 상단 네비바 */}
        <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
          <Navbar bg="success" expand="lg" className="p-0">
            <Container style={{ top: '-2px' }}>
              <Navbar.Brand href="#home">
                <h6>홈</h6>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <NavDropdown
                    as="h6"
                    title="제천 러브투어"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    as="h6"
                    title="러브투어 소개"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>

        {/* 사이드바 */}
        <Row className="mt-3 ps-1" style={{ width: '100%' }}>
          <Col md={3} className="d-grid gap-2 ms" style={{ height: '100%' }}>
            <Card bg="success" text="white">
              <Card.Body className="pb-1 pt-1">
                <Card.Title style={{ textAlign: 'center' }}>
                  <h3 className="mb-0">축제 / 행사</h3>
                </Card.Title>
              </Card.Body>
            </Card>
            <ButtonGroup vertical>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded-0"
                size="lg"
                block
              >
                관광지
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded-0"
                size="lg"
                block
              >
                전통시장
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded-0"
                size="lg"
                block
              >
                음식
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded-0"
                size="lg"
                block
              >
                숙박
              </Button>
              <Button
                variant={
                  currentPage === '축제/행사' ? 'success' : 'outline-success'
                } // 현재 페이지에 따라 스타일 설정
                className="mb-2 p-2 rounded-0"
                size="lg"
                block
                onClick={() => setCurrentPage('축제/행사')} // 버튼 클릭 시 현재 페이지 업데이트
              >
                축제/행사
              </Button>
            </ButtonGroup>
          </Col>
          {/* </Row>
        <Row className="mt-4">
          <Col md={3} className="d-grid gap-2"></Col> */}
          {/* 수정 진행 중 -> col/row container 구역 나눔 문제였음 해결함 */}
          <Col md={9}>
            <Row>
              <h3>축제 / 행사</h3>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default festivalBoardView;

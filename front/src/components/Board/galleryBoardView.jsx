import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
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

import GalleryBoardList from './galleryBoardList';
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
//공통부분
import Footer from '../UI/footer';

const GreenCol = styled(Col)`
  background-color: green;
`;

function galleryBoardView() {
  const { admin } = useSelector((state) => state.admin);
  const { gallery } = useSelector((state) => state.post);

  return (
    <>
      <Container>
        {/* 상단 네비바 */}
        <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
          <Navbar bg="success" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <h4>홈</h4>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <NavDropdown
                    as="h5"
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
                    as="h5"
                    title="사진 갤러리"
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

        {/* 사이드 메뉴 */}
        <Row className="mt-3 ps-1" style={{ width: '100%' }}>
          <Col md={3} className="d-grid gap-2 ms" style={{ height: '100%' }}>
            <Card bg="success" text="white" style={{ height: '150px' }}>
              <Card.Body className="bp-0">
                <Card.Title className="my-3 mx-5 h-1">
                  <h2>사진</h2>
                </Card.Title>
                <Card.Title
                  className="my-3 mx-5 h-1 bp-0"
                  style={{ fontWeight: 'bold', height: '100px' }}
                >
                  <h3>갤러리</h3>
                </Card.Title>
              </Card.Body>
            </Card>
            <ButtonGroup vertical>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block
              >
                러브투어 소개
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block
              >
                지원 혜택
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block
              >
                사진 갤러리
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block
              >
                영상 갤러리
              </Button>
              {/* block button 세로 길이 조정 */}
            </ButtonGroup>
          </Col>
          {/* </Row>
        <Row className="mt-4">
          <Col md={3} className="d-grid gap-2"></Col> */}
          {/* 수정 진행 중 -> col/row container 구역 나눔 문제였음 해결함 */}
          <Col md={9}>
            <Row>
              <h2>사진 갤러리</h2>
            </Row>
            <Row className="mt-2">
              <Col className="bg-light border pt-1">
                <Col className="mb-1" style={{ float: 'right' }}>
                  <Stack direction="horizontal" gap={3}>
                    <Form.Control
                      className="ms-auto"
                      placeholder="Add your item here..."
                    />
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
              {gallery.map((post, index) => (
                <GalleryBoardList key={post.id} post={post} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default galleryBoardView;

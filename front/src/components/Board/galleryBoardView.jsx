import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  Nav, Navbar, NavDropdown
} from 'react-bootstrap';

import GalleryBoardList from './galleryBoardList';
import { useSelector } from 'react-redux';

//공통부분
import Footer from '../UI/footer';

const GreenCol = styled(Col)`
  background-color: green;
`;

function galleryBoardView() {
  const { gallery } = useSelector((state) => state.post);
  return (
    <>
      <Container>
        {/* 상단 네비바 */}
      <Row className='w-100% p-0'>
          <Navbar bg="success" expand="lg" >
            <Container>
              <Navbar.Brand href="#home"><h4>홈</h4></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <NavDropdown as="h5" title="알림마당" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown as="h5" title="공지사항" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
        

        {/* 사이드 메뉴 */}
        <Row className="mt-3 ps-1">
          <Col md={3} className="d-grid gap-2 ms" style={{ height: '100%' }} >
            <Card bg="success" text="white" style={{ height: '150px' }}>
              <Card.Body className='bp-0'>
                <Card.Title className="my-3 mx-5 h-1" ><h2>알림</h2></Card.Title>
                <Card.Title className="my-3 mx-5 h-1 bp-0" style={{ fontWeight: 'bold', height: '100px' }}><h2>마당</h2></Card.Title>
              </Card.Body>
            </Card>
            <ButtonGroup vertical>
              <Button variant="outline-success" className="mb-2 p-2 rounded" size="lg" block>공지사항</Button>
              <Button variant="outline-success" className="mb-2 p-2 rounded" size="lg" block>자주하는 질문</Button>
              <Button variant="outline-success" className="mb-2 p-2 rounded" size="lg" block>1:1 고객센터</Button>
              {/* block button 세로 길이 조정 */}
            </ButtonGroup>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={3} className="d-grid gap-2">

          </Col>
          <Col md={9}>
            <Row>
              <h2>Example heading</h2>
            </Row>
            <Row>
              <Col className="bg-light border">
                <Form.Select>
                  <option>전체</option>
                  <option value="1">최신순</option>
                  <option value="2">게시글순</option>
                  <option value="3">왓에버순</option>
                </Form.Select>
                <Stack direction="horizontal" gap={3}>
                  <Form.Control
                    className="ms-auto"
                    placeholder="Add your item here..."
                  />
                  <Button variant="success" text="white">
                    검색
                  </Button>
                </Stack>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Row>
                  <Col md={4}>
                    {gallery.map((post, index) => (
                      <GalleryBoardList key={post.id} post={post} />
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default galleryBoardView;

import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { REMOVE_POST_REQUEST } from '../../reducers/post';
import {
  Row,
  Col,
  ButtonGroup,
  Card,
  Container,
  Nav,
  Navbar,
  Table,
  NavDropdown,
  Button,
} from 'react-bootstrap';

import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import '../UI/boardUI.css';
// 사이드바 라이브러리 추가

function announceBoardDetail() {
  const { admin } = useSelector((state) => state.admin);
  // const { mainPosts, REMOVE_POST_REQUEST } = useSelector((state) => state.post);
  const location = useLocation();
  const { post } = location?.state;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(post);

  const deleteBoard = useCallback(() => {
    navigate('/board/announce');
    return dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  const updateBoard = useCallback(() => {
    navigate(`/board/announce/${post.id}/update`, { state: { post } });
  }, []);

  return (
    <>
      <Container style={{ width: '100%' }}>
        <Row
          style={{ width: '100%', marginLeft: 0, marginRight: 0, padding: 0 }}
        >
          <Navbar bg="success" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <h4>홈</h4>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <NavDropdown as="h5" title="알림마당" id="basic-nav-dropdown">
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
                  <NavDropdown as="h5" title="공지사항" id="basic-nav-dropdown">
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
        <Row className="mt-3 ps-1 mt-2">
          <Col md={3} className="d-grid gap-2 ms" style={{ height: '100%' }}>
            <Card bg="success" text="white" style={{ height: '150px' }}>
              <Card.Body className="bp-0">
                <Card.Title
                  className="my-3 mx-5 h-1"
                  style={{ textAlign: 'center' }}
                >
                  <h2>알림</h2>
                  <h2>마당</h2>
                </Card.Title>
              </Card.Body>
            </Card>
            <ButtonGroup vertical>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded-0"
                size="lg"
                block="true"
              >
                공지사항
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded-0"
                size="lg"
                block="true"
              >
                자주하는 질문
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded-0"
                size="lg"
                block="true"
              >
                1:1 고객센터
              </Button>

              {/* block button 세로 길이 조정 */}
            </ButtonGroup>
          </Col>
          {/* // 3번 그리드 */}
          <Col md={9}>
            <Row
              style={{
                width: '100%',
                marginLeft: 0,
                marginRight: 0,
                padding: 0,
              }}
            >
              <h2>공지사항</h2>
              <hr />
              <div className="w-100% p-0">
                {/* 제목은 나중에 수정 */}
                <h2>{post.title}</h2>
                <div style={{ float: 'right' }}>
                  <span>작성일: </span>
                  <span>{post.date} </span>
                  <span>작성자: </span>
                  <span>관리자 </span>
                  <span>조회수: </span>
                  <span>{post.views}</span>
                </div>
              </div>

              {post.Images.length > 0 &&
                post.Images.map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:3005/${image.src}`}
                    alt={`http://localhost:3005/${image.src}`}
                    // 사진 크기는 수정 해야함
                    style={{ width: '300px', height: '200px' }}
                  />
                ))}

              <div className="w-100% p-0">{post.content}</div>
              {/* {admin && ( */}
              <>
                <Button variant="danger" onClick={deleteBoard}>
                  삭제
                </Button>
                <Button variant="info" onClick={updateBoard}>
                  수정
                </Button>
              </>
              {/* )} */}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default announceBoardDetail;
